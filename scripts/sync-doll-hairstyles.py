"""Sync the reviewed hairstyle SVGs with the website artwork data."""
from copy import deepcopy
import json
from pathlib import Path
import re
import xml.etree.ElementTree as ET

ROOT = Path(__file__).resolve().parents[1]
SOURCE = ROOT / 'assets/artwork/hairstyles/evelyn-model'
NS = '{http://www.w3.org/2000/svg}'
ET.register_namespace('', NS[1:-1])


def markup(element):
    return ET.tostring(element, encoding='unicode').replace(
        ' xmlns="http://www.w3.org/2000/svg"', '')


def contents(element):
    return ''.join(markup(child) for child in element)


def inline_styles(root):
    styles = {}
    for style in root.iter(NS + 'style'):
        for name, declarations in re.findall(r'\.([\w-]+)\{([^}]+)\}', style.text or ''):
            styles[name] = dict(item.split(':', 1) for item in declarations.rstrip(';').split(';'))
    for element in root.iter():
        for name in element.get('class', '').split():
            for attribute, value in styles.get(name, {}).items():
                if attribute != 'isolation':
                    element.set(attribute, value)
        element.attrib.pop('class', None)


artwork = {}
for key, filename in [
    ('loose', '01-loose.svg'),
    ('bun', '02-bun.svg'),
    ('headband', '03-headband.svg'),
    ('pigtails', '04-pigtails.svg'),
    ('long-waves', '05-long-waves.svg'),
    ('double-bun', '06-double-bun.svg'),
]:
    root = ET.parse(SOURCE / filename).getroot()
    if key == 'double-bun':
        wrapper = next(child for child in root if child.tag == NS + 'g')
        inline_styles(wrapper)
        back = ET.Element(NS + 'g', {'transform': 'translate(40.666667 27.67) scale(.3333333333)'})
        front = ET.Element(NS + 'g', {'transform': wrapper.get('transform')})
        for child in wrapper:
            if child.tag == NS + 'defs':
                continue
            (back if child.get('id') in ('b', 'c') else front).append(deepcopy(child))
        artwork[key] = {'back': markup(back), 'front': markup(front)}
    else:
        back = root.find('.//*[@id="hair-back"]')
        outer = next(child for child in root if child.tag == NS + 'g')
        front = next(child for child in outer if child is not back)
        defs = root.find(NS + 'defs')
        artwork[key] = {
            'back': contents(back),
            'front': (markup(defs) if defs is not None else '') + markup(front),
        }

(ROOT / 'assets/artwork/doll-hairstyles.json').write_text(
    json.dumps(artwork, ensure_ascii=False, indent=2) + '\n')

# Keep the static avatar's existing outfit and framing.
path = ROOT / 'assets/artwork/evelyn-avatar.svg'
root = ET.parse(path).getroot()
for layer in root.iter(NS + 'g'):
    classes = layer.get('class', '').split()
    if 'doll-head--back' in classes or 'doll-head--front' in classes:
        for child in list(layer):
            layer.remove(child)
        fragment = artwork['bun']['back' if 'doll-head--back' in classes else 'front']
        if 'doll-head--back' in classes:
            fragment = '<g transform="translate(0 8)">' + fragment + '</g>'
        layer.append(ET.fromstring('<g xmlns="http://www.w3.org/2000/svg">' + fragment + '</g>'))
ET.ElementTree(root).write(path, encoding='unicode')

import hairstyleArtwork from "../artwork/doll-hairstyles.json";

(function () {
  "use strict";

  const storageKey = "ep-doll-outfit";
  const tops = [
    { id: "brick-cardigan", label: "Terracotta cardigan", color: "#B75C50", kind: "cardigan", shortSleeves: true },
    { id: "collared-sweater", label: "Navy sweater with white collar", color: "#414454", kind: "collared-knit" },
    { id: "cream-knit", label: "Cream sweater", color: "#F0E5CE", kind: "knit" },
    { id: "rose-shirt", label: "Rose button-up blouse", color: "#CB9790", kind: "blouse", shortSleeves: true },
    { id: "sunflower-cardigan", label: "Sunflower cardigan", color: "#F0E5CE", kind: "sunflower-cardigan" },
    { id: "denim-overalls", label: "Dungarees and T-shirt", color: "#F0E5CE", fabricColor: "#6E8B9B", kind: "overalls" },
    { id: "moon-sailor", label: "Sailor Moon outfit", kind: "sailor" }
  ];
  const bottoms = [
    { id: "chocolate-skirt", label: "Chocolate knee-length skirt", color: "#705044", kind: "skirt" },
    { id: "black-midi-skirt", label: "Black pleated midi skirt", color: "#302D30", kind: "midi-skirt" },
    { id: "a-line-skirt", label: "Lavender A-line midi skirt", color: "#A394B5", kind: "a-line" },
    { id: "wrap-skirt", label: "Terracotta wrap skirt", color: "#B75C50", kind: "wrap" },
    { id: "maxi-skirt", label: "Navy long skirt", color: "#414454", kind: "maxi" },
    { id: "blue-jeans", label: "Blue jeans", color: "#6E8B9B", kind: "trousers" },
    { id: "cream-trousers", label: "Cream straight trousers", color: "#DED3BA", kind: "trousers" },
    { id: "flared-jeans", label: "Dark brown flared trousers", color: "#342D2A", kind: "flare" }
  ];
  const hairstyles = [
    { id: "loose", label: "Loose hair" },
    { id: "bun", label: "Bun" },
    { id: "headband", label: "Bow headband" },
    { id: "pigtails", label: "Low pigtails" },
    { id: "long-waves", label: "Shoulder-length wavy hair" },
    { id: "double-bun", label: "Double buns" }
  ];
  const shoes = [
    { id: "sneakers", label: "Sneakers" },
    { id: "mary-janes", label: "Mary Janes" },
    { id: "sandals", label: "Sandals" },
    { id: "boots", label: "Boots" },
    { id: "black-pumps", label: "Black pointed-toe pumps" },
    { id: "flip-flops", label: "Flip-flops" }
  ];
  const eyes = [
    { id: "rounded-lash", label: "Rounded eyes with a curved lash" }
  ];
  const mouths = [
    { id: "soft-smile", label: "Soft smile" }
  ];
  const categories = { hair: hairstyles, eyes, mouth: mouths, top: tops, bottom: bottoms, shoes };

  function normalize(value) {
    return Object.fromEntries(Object.entries(categories).map(([key, items]) => [
      key, items.some(item => item.id === value?.[key]) ? value[key] : items[0].id
    ]));
  }

  function read() {
    try { return normalize(JSON.parse(localStorage.getItem(storageKey))); }
    catch (_) { return normalize(null); }
  }

  function save(value) {
    const outfit = normalize(value);
    try { localStorage.setItem(storageKey, JSON.stringify(outfit)); } catch (_) {}
    return outfit;
  }

  function sunflower(x, y, scale = 1) {
    const petals = Array.from({ length: 8 }, (_, i) => `<ellipse cx="0" cy="-4.5" rx="1.8" ry="3.1" transform="rotate(${i * 45})"/>`).join("");
    return `<g class="doll-sunflower" transform="translate(${x} ${y}) scale(${scale})"><g fill="#E7B644" stroke="#B68A32" stroke-width=".35">${petals}</g><circle r="2.6" fill="#846036"/><circle cx="-.5" cy="-.5" r=".7" fill="#B28A4C"/></g>`;
  }

  function topShape(item) {
    const bottomColor = item.fabricColor || "#6E8B9B";
    if (item.kind === "sunflower-cardigan") {
      const ribbing = [66, 69, 72, 75, 78, 102, 105, 108, 111, 114]
        .map(x => `<path d="M${x} 198V203"/>`).join("");
      return `<g stroke-linejoin="round">
        <path d="M77 124H103L109 192Q90 196 71 192Z" fill="#FFFAF1"/>
        <path d="M82 123H98L93 129Q90 132 87 129Z" fill="#EAC3A4"/>
        <path d="M73 128Q62 131 57 145L47 175Q46 182 53 184L63 182L75 151ZM107 128Q118 131 123 145L133 175Q134 182 127 184L117 182L105 151Z" fill="${item.color}"/>
        <path d="M73 125L81 123L80 156L79 204Q71 207 63 202L68 151ZM107 125L99 123L100 156L101 204Q109 207 117 202L112 151Z" fill="${item.color}"/>
        <path d="M79 126L78 155L77 200M101 126L102 155L103 200M65 197Q71 200 78 199M102 199Q109 200 115 197M48 176L61 180M132 176L119 180" fill="none" stroke="#B6A68A" stroke-opacity=".65" stroke-width="1.1"/>
        <g fill="none" stroke="#B6A68A" stroke-opacity=".45" stroke-width=".7">${ribbing}<path d="M51 177L50 181M54 178L53 182M57 179L56 183M129 177L130 181M126 178L127 182M123 179L124 183M67 151L65 172M113 151L115 172"/></g>
        ${sunflower(73, 140, .95)}${sunflower(106, 139, 1)}${sunflower(70, 174, 1)}${sunflower(111, 170, .9)}${sunflower(106, 195, .9)}${sunflower(55, 160, .8)}
      </g>`;
    }
    if (item.kind === "overalls" || item.kind === "pinafore") {
      const lower = item.kind === "overalls"
        ? `<path d="M68 183H112L118 265Q106 270 94 266L91 222Q90 218 89 222L86 266Q74 270 62 265Z" fill="${bottomColor}"/><path d="M65 258L86 259L86 267Q74 271 62 266ZM94 259L116 258L118 266Q107 271 94 267Z" fill="#FFFFFF" fill-opacity=".2"/><path d="M90 191V212M78 209L75 253M102 209L106 253" fill="none" stroke="#FFFFFF" stroke-opacity=".3" stroke-width="1.2"/>`
        : `<path d="M68 183H112L128 254Q90 266 52 254Z" fill="${bottomColor}"/><path d="M76 200L66 251M90 202V256M104 200L114 251" fill="none" stroke="#FFFFFF" stroke-opacity=".25" stroke-width="1.2"/>`;
      return `<g stroke-linejoin="round">
        <path d="M74 128Q63 130 58 144L48 178Q51 184 61 183L75 150ZM106 128Q117 130 122 144L132 178Q129 184 119 183L105 150Z" fill="${item.color}"/>
        <path d="M74 124Q90 131 106 124L111 153Q109 169 106 185H74Q71 169 69 153Z" fill="${item.color}"/>
        <path d="M80 125Q90 133 100 125M49 177L62 180M131 177L118 180" fill="none" stroke="#A89F92" stroke-opacity=".6" stroke-width="1.3"/>
        <g>${lower}
        <path d="M74 124L81 125L83 155H76ZM106 124L99 125L97 155H104Z" fill="${bottomColor}"/>
        <path d="M73 147Q90 151 107 147L111 190Q90 198 69 190Z" fill="${bottomColor}"/>
        <path d="M80 160H100L98 177L90 182L82 177Z" fill="#FFFFFF" fill-opacity=".08" stroke="#FFFFFF" stroke-opacity=".4" stroke-width="1.2"/>
        <g fill="#D4BD83" stroke="#7A756A" stroke-width=".7"><circle cx="78" cy="150" r="2"/><circle cx="102" cy="150" r="2"/></g>
        <path d="M75 128L77 144M105 128L103 144M70 192Q77 199 82 194M110 192Q103 199 98 194" fill="none" stroke="#FFFFFF" stroke-opacity=".35" stroke-width="1"/>
        ${sunflower(92, 170, .33)}${sunflower(108, item.kind === "overalls" ? 240 : 231, .35)}</g>
      </g>`;
    }
    if (item.kind === "sailor") {
      return `<g stroke-linejoin="round">
        <path d="M74 128Q64 130 59 145L49 179Q53 184 61 183L75 151ZM106 128Q116 130 121 145L131 179Q127 184 119 183L105 151Z" fill="#FAF2DF"/>
        <path d="M53 162L64 166M116 166L127 162" stroke="#A94463" stroke-width="5"/>
        <path d="M73 124Q90 118 107 124L112 189L90 200L68 189Z" fill="#FAF2DF"/>
        <path d="M73 124L81 123Q90 131 99 123L107 124L105 138L90 151L75 138Z" fill="#344F86"/>
        <path d="M76 127L78 136L90 147L102 136L104 127" fill="none" stroke="#FAF2DF" stroke-width="1.5"/>
        <path d="M68 187L90 197L112 187L125 229Q115 235 106 230Q97 237 90 232Q81 237 74 230Q64 235 55 229Z" fill="#344F86"/>
        <path d="M76 198L69 228M84 202L81 231M96 202L99 231M104 198L111 228" stroke="#FAF2DF" stroke-opacity=".35" fill="none" stroke-width="1.2"/>
        <path d="M68 187L90 197L112 187" stroke="#FAF2DF" stroke-width="3" fill="none"/>
        <path d="M89 149L76 141L75 157L86 154L80 171L90 165L100 171L94 154L105 157L104 141L91 149Z" fill="#A94463"/>
        <circle cx="90" cy="150" r="4.5" fill="#E8C66A"/><circle cx="90" cy="150" r="2" fill="#A94463"/>
        ${shoesShape({ id: "sailor-boots" })}
      </g>`;
    }
    const arms = item.shortSleeves
      ? '<path class="doll-arms" d="M61 148Q58 162 48 183L56 187Q67 167 71 152ZM119 148Q122 162 132 183L124 187Q113 167 109 152Z" fill="#EAC3A4"/>'
      : "";
    const sleeves = item.shortSleeves
      ? `<path class="doll-sleeves--short" d="M74 128Q64 130 59 145L56 155Q61 159 69 159L75 145ZM106 128Q116 130 121 145L124 155Q119 159 111 159L105 145Z" fill="${item.color}"/>`
      : `<path d="M74 128Q64 130 59 145L49 179Q53 184 61 183L75 151ZM106 128Q116 130 121 145L131 179Q127 184 119 183L105 151Z" fill="${item.color}"/>`;
    const body = `<path d="M73 124Q90 118 107 124L115 192Q90 198 65 192Z" fill="${item.color}"/>`;
    let collar = '<path d="M80 122Q90 130 100 122L99 133Q90 139 81 133Z" fill="#FAF2DF"/>';
    let details = "";
    if (item.kind === "cardigan") {
      collar = '<path d="M80 123Q90 133 100 123L98 192H82Z" fill="#FAF2DF"/><path d="M83 107H97L98 122Q99 132 90 132Q81 132 82 122Z" fill="#EAC3A4"/>';
      details = '<path d="M79 125Q81 134 84 140L83 190M101 125Q99 134 96 140L97 190" fill="none" stroke="#8F493F" stroke-opacity=".45" stroke-width="1.1"/><g fill="#773C35"><circle cx="99" cy="150" r="1.3"/><circle cx="99" cy="164" r="1.3"/><circle cx="99" cy="178" r="1.3"/></g>';
    } else if (item.kind === "collared-knit") {
      collar = '<path d="M83 107H97L99 122Q100 133 90 134Q80 133 81 122Z" fill="#EAC3A4"/>';
      details = '<path d="M78 124L82 123Q84 130 90 133Q87 140 81 138Q75 135 78 124ZM102 124L98 123Q96 130 90 133Q93 140 99 138Q105 135 102 124Z" fill="#FAF2DF"/><path d="M51 177L63 181M117 181L129 177" fill="none" stroke="#FFFFFF" stroke-opacity=".2" stroke-width="1.5"/>';
    } else if (item.kind === "knit") {
      details = '<path d="M77 129V139M83 130V141M90 131V142M97 130V141M103 129V139" stroke="#C9BDA4" stroke-width="1.3" fill="none"/>';
    } else {
      collar = '<path d="M83 107H97L98 122Q98 130 90 140Q82 130 82 122Z" fill="#EAC3A4"/>';
      details = '<path d="M78 125L82 123Q83 130 90 140L81 136Q78 132 78 125ZM102 125L98 123Q97 130 90 140L99 136Q102 132 102 125Z" fill="#DEADA4"/><path d="M90 141V187" stroke="#B17B75" stroke-width="1"/><g fill="#FAF2DF"><circle cx="90" cy="151" r="1.3"/><circle cx="90" cy="164" r="1.3"/><circle cx="90" cy="177" r="1.3"/></g>';
    }
    return `<g stroke-linejoin="round">${arms}${sleeves}${body}${collar}${details}</g>`;
  }

  function bottomShape(item, tuckedIntoBoots = false) {
    if (item.kind === "flare") {
      return `<g><path d="M68 185H112L110 228L117 268Q105 271 92 268L91 225Q90 216 89 225L88 268Q75 271 63 268L70 228Z" fill="${item.color}"/><path d="M71 195Q78 202 83 195M97 195Q102 202 109 195M90 191V210M65 265Q76 268 87 265M93 265Q104 268 115 265" fill="none" stroke="#746259" stroke-opacity=".45" stroke-width="1.2"/></g>`;
    }
    if (item.kind === "a-line") {
      return `<g><path d="M68 185H112L129 255Q90 266 51 255Z" fill="${item.color}"/><path d="M69 190H111M72 202L59 253M108 202L121 253" stroke="#FFFFFF" stroke-opacity=".17" stroke-width="1.4" fill="none"/></g>`;
    }
    if (item.kind === "wrap") {
      return `<g><path d="M68 185H112L124 255Q90 265 56 255Z" fill="${item.color}"/><path d="M108 190Q99 225 69 258M68 191H112" fill="none" stroke="#FFFFFF" stroke-opacity=".3" stroke-width="1.4"/><path d="M106 191L114 198L120 192L113 188ZM113 194L119 212M113 194L110 213" fill="none" stroke="#352A31" stroke-opacity=".5" stroke-width="1.8"/></g>`;
    }
    if (item.kind === "maxi") {
      return `<g><path d="M68 185H112Q119 227 130 264Q119 270 109 266Q98 272 88 267Q76 272 65 267Q55 271 50 264Q60 228 68 185Z" fill="${item.color}"/><path d="M76 199Q74 235 65 261M90 200V264M104 199Q107 237 117 263" fill="none" stroke="#FFFFFF" stroke-opacity=".2" stroke-width="1.5"/><path d="M68 190H112" stroke="#352A31" stroke-opacity=".4" stroke-width="2"/></g>`;
    }
    if (item.kind === "midi-skirt") {
      return `<g><path d="M68 185H112L127 258Q90 267 53 258Z" fill="${item.color}"/><path d="M76 199L68 255M90 200V260M104 199L112 255" fill="none" stroke="#62585D" stroke-opacity=".4" stroke-width="1.3"/><path d="M68 190H112" stroke="#201F23" stroke-width="2"/></g>`;
    }
    if (item.kind === "trousers") {
      const silhouette = tuckedIntoBoots
        ? "M68 185H112L111 211Q110 234 108 255V260H94L91 225Q90 216 89 225L86 260H72V255Q70 234 69 211Z"
        : "M68 185H112L113 268Q103 271 92 268L91 225Q90 216 89 225L88 268Q77 271 67 268Z";
      return `<g><path d="${silhouette}" fill="${item.color}"/><path d="M71 195Q78 202 83 195M97 195Q102 202 109 195M90 191V210" fill="none" stroke="#53625E" stroke-opacity=".5" stroke-width="1.2"/></g>`;
    }
    return `<g><path d="M68 185H112L128 234Q90 246 52 234Z" fill="${item.color}"/><path d="M76 199L69 231M90 200V234M104 199L111 231" fill="none" stroke="#6F5146" stroke-opacity=".22" stroke-width="1.3"/><path d="M68 190H112" stroke="#6F5146" stroke-opacity=".25" stroke-width="2"/></g>`;
  }

  function hairBack(style) {
    return hairstyleMarkup(hairstyleArtwork[style].back);
  }

  function shoesShape(item) {
    let foot;
    if (item.id === "black-pumps") {
      foot = '<path d="M75 277Q79 282 86 277L88 283L86 287L68 290Q65 288 70 284Z" fill="#29272B"/><path d="M85 284L86 290H88L88 283Z" fill="#1C1B1E"/><path d="M71 286L76 282" stroke="#55505A" stroke-width=".8" fill="none"/>';
    } else if (item.id === "sailor-boots") {
      foot = '<path d="M74 242L81 246L88 242L87 278L89 285Q88 290 71 288Q66 286 70 281L74 277Z" fill="#A94463"/><path d="M74 243L81 247L88 243" stroke="#FAF2DF" stroke-width="2" fill="none"/>';
    } else if (item.id === "boots") {
      foot = '<path d="M74 255H88L87 278L89 285Q88 290 71 288Q66 286 70 281L74 277Z" fill="#77533D"/><path d="M74 259H87M70 287H88" stroke="#543F32" stroke-width="2"/>';
    } else if (item.id === "sneakers") {
      foot = '<path d="M75 270H87V279H75Z" fill="#F5EBD7"/><path d="M75 276H87L89 283V286H69Q66 282 75 276Z" fill="#E4DBCA"/><path d="M69 286H89" stroke="#FAF5E9" stroke-width="3"/><path d="M78 279H84M76 282H83" stroke="#8A9484" stroke-width="1.2"/>';
    } else if (item.id === "sandals" || item.id === "flip-flops") {
      const straps = item.id === "sandals"
        ? '<path d="M75 275H86M72 282H87" stroke="#A67B54" stroke-width="3"/>'
        : '<path d="M73 279L80 283L86 279M80 283V286" stroke="#78927E" stroke-width="2" fill="none"/>';
      foot = `<path d="M74 277H87L88 285Q84 290 70 287Q67 284 74 277Z" fill="${item.id === "sandals" ? "#806047" : "#78927E"}"/><path d="M75 273H86L87 283Q80 287 71 284Q69 281 75 277Z" fill="#EAC3A4"/>${straps}`;
    } else {
      foot = '<path d="M75 270H87V279H75Z" fill="#F5EBD7"/><path d="M74 277Q80 281 88 277L90 285Q79 292 68 286Q67 281 74 277Z" fill="#634C39"/>';
    }
    return `<g class="doll-shoes"><g transform="translate(-2 0)">${foot}</g><g transform="translate(182 0) scale(-1 1)">${foot}</g></g>`;
  }

  function eyesShape() {
    const eye = '<path d="M72 82C70.6 82 69.2 81.2 69.4 79.5Q70.6 81 72.6 80.2C75 77.8 80.4 79 80.4 84C80.4 88.9 78.9 91 76.2 91C73.2 91 71.8 87.8 72 82Z" fill="#624535"/>';
    return `<g class="eyes hb-eyes">${eye}<g transform="translate(180 0) scale(-1 1)">${eye}</g></g>`;
  }

  function mouthShape(style) {
    return '<path class="doll-mouth" d="M85 102Q90 106 96 102" fill="none" stroke="#A75F50" stroke-width="1.5"/>';
  }

  let hairstyleInstance = 0;

  function hairstyleMarkup(markup) {
    const prefix = `doll-hair-${++hairstyleInstance}-`;
    return markup
      .replace(/id="([^"]+)"/g, (_, id) => `id="${prefix}${id}"`)
      .replace(/url\(#([^)]+)\)/g, (_, id) => `url(#${prefix}${id})`);
  }

  function face(hair) {
    return hairstyleMarkup(hairstyleArtwork[hair].front);
  }

  function render(value, bust = false) {
    const outfit = normalize(value);
    const top = tops.find(item => item.id === outfit.top);
    const bottom = bottoms.find(item => item.id === outfit.bottom);
    const onePiece = ["sailor", "overalls", "pinafore"].includes(top.kind);
    const topScale = onePiece ? .975 : .94;
    const topTransform = `translate(0 124) scale(1 ${topScale}) translate(0 -124)`;
    const lowerBody = `<g transform="translate(0 -4)">
      <path d="M75 220H87L85 279H73ZM93 220H105L107 279H95Z" fill="#EAC3A4"/>
      ${top.kind === "sailor" ? "" : shoesShape(shoes.find(item => item.id === outfit.shoes))}
      ${onePiece ? "" : bottomShape(bottom, outfit.shoes === "boots")}
    </g>`;
    return `<svg xmlns="http://www.w3.org/2000/svg" viewBox="${bust ? "35 8 110 143" : "0 0 180 286"}" aria-hidden="true" focusable="false">
      <g class="doll" stroke-linecap="round">
        <g class="doll-head doll-head--back" transform="translate(90 118.5) scale(.78) translate(-90 -120)"><g transform="translate(0 8)">${hairBack(outfit.hair)}</g></g>
        <g class="doll-body" transform="translate(90 110) scale(.88 .98) translate(-90 -110)">
        <path d="M83 107H97V128Q90 132 83 128Z" fill="#EAC3A4"/>
        ${lowerBody}
        <g transform="${topTransform}">${topShape(top)}
          <path d="M49 180Q44 183 45 189Q47 195 53 192L60 183M131 180Q136 183 135 189Q133 195 127 192L120 183" fill="#EAC3A4"/>
        </g>
        </g>
        <g class="doll-head doll-head--front" transform="translate(90 118.5) scale(.78) translate(-90 -120)">${face(outfit.hair, outfit.mouth)}</g>
      </g></svg>`;
  }

  function thumbnail(category, id) {
    if (category === "eyes") {
      return `<svg viewBox="62 73 56 24" aria-hidden="true" focusable="false">${eyesShape(id)}</svg>`;
    }
    if (category === "mouth") {
      return `<svg viewBox="76 94 28 22" aria-hidden="true" focusable="false"><g stroke-linecap="round">${mouthShape(id)}</g></svg>`;
    }
    if (category === "hair") {
      return `<svg viewBox="${id === "long-waves" ? "25 15 130 150" : "25 8 130 135"}" aria-hidden="true" focusable="false"><g transform="translate(0 8)">${hairBack(id)}</g>${face(id)}</svg>`;
    }
    const item = categories[category].find(option => option.id === id);
    if (["sailor", "overalls", "pinafore"].includes(item.kind)) {
      return `<svg viewBox="40 115 100 180" aria-hidden="true" focusable="false">${topShape(item)}</svg>`;
    }
    if (category === "shoes") {
      return `<svg viewBox="62 249 56 46" aria-hidden="true" focusable="false">${shoesShape(item)}</svg>`;
    }
    const viewBox = category === "top"
      ? item.kind === "sunflower-cardigan" ? "40 115 100 97" : "40 115 100 85"
      : "36 179 108 102";
    return `<svg viewBox="${viewBox}" aria-hidden="true" focusable="false">${category === "top" ? topShape(item) : bottomShape(item)}</svg>`;
  }

  window.EvyDoll = { tops, bottoms, categories, normalize, read, save, render, thumbnail };
})();

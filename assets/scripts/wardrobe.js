(function () {
  "use strict";
  const doll = window.EvyDoll;
  const panel = document.getElementById("wardrobe");
  const scene = document.querySelector(".s-scene");
  const trigger = document.getElementById("outfit");
  const me = document.getElementById("me");
  const translations = JSON.parse(document.getElementById("wardrobe-translations").textContent);
  const label = item => translations[item.id] || item.label;
  let outfit = doll.read();

  for (const [category, items] of Object.entries(doll.categories)) {
    const list = document.getElementById(`wardrobe-${category}`);
    list.closest("fieldset").hidden = items.length === 1;
    list.innerHTML = items.map(item =>
      `<label class="wardrobe__option"><input type="radio" name="${category}" value="${item.id}"><span class="wardrobe__card">${doll.thumbnail(category, item.id)}<span>${label(item)}</span></span></label>`
    ).join("");
  }

  function update() {
    me.innerHTML = doll.render(outfit);
    for (const input of panel.querySelectorAll('input[type="radio"]')) {
      input.checked = outfit[input.name] === input.value;
    }
    const top = doll.tops.find(item => item.id === outfit.top);
    const bottom = doll.bottoms.find(item => item.id === outfit.bottom);
    const hair = doll.categories.hair.find(item => item.id === outfit.hair);
    const shoes = doll.categories.shoes.find(item => item.id === outfit.shoes);
    const eyes = doll.categories.eyes.find(item => item.id === outfit.eyes);
    const mouth = doll.categories.mouth.find(item => item.id === outfit.mouth);
    const sailor = top.kind === "sailor";
    const onePiece = sailor || top.kind === "overalls";
    document.getElementById("wardrobe-bottom").closest("fieldset").hidden = onePiece;
    document.getElementById("wardrobe-shoes").closest("fieldset").hidden = sailor;
    const moon = scene.querySelector(".s-moon circle");
    if (sailor) moon.setAttribute("mask", "url(#moon-mask)");
    else moon.removeAttribute("mask");
    scene.classList.toggle("night", sailor);
    const details = [hair, eyes, mouth, top, ...(!onePiece ? [bottom] : []), ...(!sailor ? [shoes] : [])].map(label);
    me.setAttribute("aria-label", `Evy: ${details.slice(0, -1).join(", ")} ${translations.and} ${details[details.length - 1]}`);
  }

  function setOpen(open) {
    panel.hidden = !open;
    scene.classList.toggle("wardrobe-open", open);
    trigger.setAttribute("aria-expanded", String(open));
    if (open) panel.querySelector("[data-close-wardrobe]").focus({ preventScroll: true });
    else trigger.focus({ preventScroll: true });
  }

  trigger.addEventListener("click", () => setOpen(panel.hidden));
  panel.addEventListener("change", event => {
    if (!event.target.matches('input[type="radio"]')) return;
    outfit = doll.save({ ...outfit, [event.target.name]: event.target.value });
    update();
  });
  document.getElementById("wardrobe-reset").addEventListener("click", () => {
    outfit = doll.save(null);
    update();
  });
  for (const button of panel.querySelectorAll("[data-close-wardrobe]")) {
    button.addEventListener("click", () => setOpen(false));
  }
  document.addEventListener("keydown", event => {
    if (event.key === "Escape" && !panel.hidden) {
      event.preventDefault();
      setOpen(false);
    }
  });
  update();
})();

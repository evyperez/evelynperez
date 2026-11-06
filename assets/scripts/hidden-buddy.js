/*
 * hidden-buddy.js — a tiny paper-cut Evy that peeks from the bottom of the page.
 * Hover (or focus) and she pops up and whispers; click and you go to the secret page.
 *
 * Usage (anywhere before </body>):
 *   <script src="/scripts/hidden-buddy.js" data-href="/secret/" defer></script>
 *
 * Options (data-attributes on the <script> tag):
 *   data-href    where the click goes                 (default "/secret/")
 *   data-side    "right" | "left"                      (default "right")
 *   data-text    the whisper                           (default "Psst… wanna know a secret?")
 *   data-label   accessible name of the link
 */
(function () {
  var script = document.currentScript;
  var cfg = {
    href: (script && script.dataset.href) || "/secret/",
    side: (script && script.dataset.side) || "right",
    text: (script && script.dataset.text) || "Psst… wanna know a secret?",
    label: (script && script.dataset.label) || "A tiny Evy is peeking. Click to find out more about me."
  };

  var SVG = window.EvyDoll.render(window.EvyDoll.read(), true);

  var side = cfg.side === "left" ? "left" : "right";
  var css =
    ".hb{position:fixed;bottom:0;" + side + ":28px;z-index:9999;width:72px;height:72px;text-decoration:none;outline:none}" +
    ".hb-clip{position:absolute;inset:0;overflow:hidden}" +
    ".hb-sprite{position:absolute;left:0;bottom:0;width:72px;transform:translateY(28%);transition:transform .35s cubic-bezier(.34,1.56,.64,1)}" +
    ".hb-sprite svg{display:block;width:100%;height:auto}" +
    ".hb:hover .hb-sprite,.hb:focus-visible .hb-sprite{transform:translateY(6%)}" +
    ".hb.hop .hb-sprite{animation:hb-hop .6s cubic-bezier(.34,1.56,.64,1)}" +
    "@keyframes hb-hop{40%{transform:translateY(14%)}}" +
    ".hb-eyes{transform-box:fill-box;transform-origin:center;transition:transform .08s}" +
    ".hb-eyes.shut{transform:scaleY(.15)}" +
    ".hb-say{position:absolute;bottom:82px;" + side + ":0;white-space:nowrap;font:500 13px/1.3 var(--ep-font-body,system-ui,sans-serif);" +
      "background:var(--ep-card,#fff);color:var(--ep-text,#2a1808);border-radius:14px;" +
      "box-shadow:0 8px 32px rgba(58,47,38,.18);padding:8px 14px;opacity:0;transform:translateY(6px);transition:opacity .2s,transform .2s;pointer-events:none}" +
    ".hb:hover .hb-say,.hb:focus-visible .hb-say{opacity:1;transform:none}" +
    ".hb:focus-visible .hb-clip{outline:3px solid var(--ep-focus,#B85C1E);outline-offset:2px;border-radius:12px}" +
    "@media (prefers-reduced-motion:reduce){.hb-sprite{transition:none}.hb.hop .hb-sprite{animation:none}}";

  function init() {
    var style = document.createElement("style");
    style.textContent = css;
    document.head.appendChild(style);

    var a = document.createElement("a");
    a.className = "hb";
    a.href = cfg.href;
    a.setAttribute("aria-label", cfg.label);
    a.innerHTML = '<span class="hb-say">' + cfg.text + '</span><span class="hb-clip"><span class="hb-sprite">' + SVG + "</span></span>";
    // Inside the footer so it belongs to a page landmark.
    (document.querySelector("footer") || document.body).appendChild(a);

    if (window.matchMedia && matchMedia("(prefers-reduced-motion: reduce)").matches) return;

    var eyes = a.querySelector(".hb-eyes");
    (function blink() {
      eyes.classList.add("shut");
      setTimeout(function () { eyes.classList.remove("shut"); }, 140);
      setTimeout(blink, 2500 + Math.random() * 3500);
    })();

    // a little hop every so often, so she gets noticed
    setInterval(function () {
      if (a.matches(":hover")) return;
      a.classList.remove("hop"); void a.offsetWidth; a.classList.add("hop");
    }, 9000);
  }

  if (document.readyState === "loading") document.addEventListener("DOMContentLoaded", init);
  else init();
})();

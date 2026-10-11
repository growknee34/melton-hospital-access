// Every number on the pages is written into the HTML when the site is built
// (R/09_site_numbers.R, from site/data/site_numbers.json), so the pages show
// all numbers with JavaScript turned off. This script only does one small
// thing: on a narrow screen the web maps keep a readable size and scroll
// sideways, and this starts them with Melton town in view.
(function () {
  function startMaps() {
    Array.prototype.forEach.call(document.querySelectorAll(".map-scroll[data-start]"), function (el) {
      var room = el.scrollWidth - el.clientWidth;
      if (room > 0) el.scrollLeft = Math.round(room * parseFloat(el.getAttribute("data-start")));
    });
  }
  if (document.readyState === "complete") startMaps(); else window.addEventListener("load", startMaps);
})();

// Menu button on narrow screens. Without JavaScript the button stays hidden
// and the full list of links shows, as before. With it, the header is one
// short row that stays at the top, and the links open from the Menu button.
// The js-menu class is set by a one-line script in each page's head, so the
// compact header is the first thing drawn (no layout shift).
(function () {
  var btn = document.querySelector(".site-head .menu-btn");
  if (!btn) return;
  function setOpen(open) { btn.setAttribute("aria-expanded", open ? "true" : "false"); }
  btn.addEventListener("click", function () { setOpen(btn.getAttribute("aria-expanded") !== "true"); });
  document.addEventListener("keydown", function (e) {
    if (e.key === "Escape" && btn.getAttribute("aria-expanded") === "true") { setOpen(false); btn.focus(); }
  });
})();

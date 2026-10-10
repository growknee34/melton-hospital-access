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

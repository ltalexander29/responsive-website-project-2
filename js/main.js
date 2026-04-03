document.addEventListener("DOMContentLoaded", function () {
  function SwitchStyle() {
    let existing = document.getElementById("alt-theme");

    if (existing) {
      existing.remove();
    } else {
      let link = document.createElement("link");
      link.rel = "stylesheet";
      link.href = "../css/alt.css";
      link.id = "alt-theme";

      document.head.appendChild(link);
    }
  }

  let switchButton = document.getElementById("style-switch");
  switchButton.addEventListener("click", SwitchStyle);
});

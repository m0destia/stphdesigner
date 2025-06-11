import Load from "./loadgallery.js";

const changeThemeButton = document.getElementById("change_theme");

ScrollReveal().reveal("#anim_back", {
  origin: "top",
  distance: "1080px",
  duration: "700",
  easing: "ease",
});

ScrollReveal().reveal("#anim_front", {
  origin: "bottom",
  distance: "1080px",
  duration: "700",
  easing: "ease",
});

ScrollReveal().reveal("#title", {
  delay: "500",
  easing: "ease-out",
  origin: "right",
  distance: "64px",
});

ScrollReveal().reveal("header", {
  delay: "800",
  easing: "ease",
  origin: "top",
  distance: "128px",
});

changeThemeButton.addEventListener("click", (event) => {
  switch (event.target.checked) {
    case true:
      document.documentElement.style.setProperty(
        "--background-color",
        "rgb(38, 37, 51)"
      );
      document.documentElement.style.setProperty(
        "--activate-color",
        "rgb(233, 233, 233)"
      );
      document.documentElement.style.setProperty(
        "--deactivate-color",
        "rgb(185, 185, 185)"
      );
      document.documentElement.style.setProperty(
        "--text-color",
        "rgb(224, 224, 224)"
      );
      document.documentElement.style.setProperty(
        "--header-color",
        "rgb(255, 255, 255)"
      );

      break;
    case false:
      document.documentElement.style.setProperty(
        "--background-color",
        "rgb(239, 248, 255)"
      );
      document.documentElement.style.setProperty(
        "--activate-color",
        "rgb(63, 63, 63)"
      );
      document.documentElement.style.setProperty("--deactivate-color", "gray");
      document.documentElement.style.setProperty(
        "--text-color",
        "rgb(48, 48, 48)"
      );
      document.documentElement.style.setProperty("--header-color", "#1d1d1d");

      break;
  }
});

window.addEventListener("scroll", () => {
  const scrollTop = window.scrollY || document.documentElement.scrollTop;

  const scrollHeight = document.documentElement.scrollHeight;
  const clientHeight = document.documentElement.clientHeight;

  const scrollPercent = (scrollTop / (scrollHeight - clientHeight)) * 100;

  if (scrollPercent > 80) {
    document.querySelector("#social-media").style.position = "relative";
  } else {
    document.querySelector("#social-media").style.position = "fixed";
  }

  if (scrollTop > 70) {
    document.querySelector("header").style.boxShadow =
      "0 0 8px rgba(0, 0, 0, 0.4)";
  } else {
    document.querySelector("header").style.boxShadow = "none";
  }
});

Load();

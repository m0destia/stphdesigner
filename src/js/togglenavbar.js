const navbarButton = document.getElementById("mobile_nav_button");
const mobileNavbar = document.getElementById("mobile_navbar");

navbarButton.addEventListener("click", () => {
  mobileNavbar.classList.toggle("hidden");
  navbarButton.setAttribute(
    "aria-expanded",
    !navbarButton.getAttribute("aria-expanded")
  );
});

function togglePopupMenu(event) {
  const popupMenu = event.target.nextElementSibling;
  const attr = event.target.getAttribute("aria-expanded");
  console.log(attr);
  event.target.setAttribute(
    "aria-expanded",
    attr === "true" ? "false" : "true"
  );
  popupMenu.style.display = attr !== "true" ? "block" : "none";
}
const popups = document.querySelectorAll("*[aria-expanded]");
popups.forEach((popup) => {
  popup.addEventListener("click", togglePopupMenu, false);
});

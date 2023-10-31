//Menubar toggle
function togglePopupMenu(event) {
  const popupMenu = event.target.nextElementSibling;
  const attr = event.target.getAttribute("aria-expanded");
  event.target.setAttribute(
    "aria-expanded",
    attr === "true" ? "false" : "true"
  );
  popupMenu.style.display = attr !== "true" ? "flex" : "none";
  event.target.querySelector("svg").style.transform =
    attr !== "true" ? "scaleY(-1)" : "scaleY(1)";
}
document.querySelectorAll("*[aria-expanded]").forEach((popup) => {
  popup.addEventListener("click", togglePopupMenu, false);
});

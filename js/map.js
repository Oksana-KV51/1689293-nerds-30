const mapPopup = document.querySelector(".modal-visually");
const map = document.querySelector(".contacts-map");

mapPopup.addEventListener("domcontentloaded", function (evt) {
  evt.preventDefault();
  mapPopup.classList.add("modal-show");
});

map.addEventListener("domcontentloaded", function (evt) {
  evt.preventDefault();
  mapPopup.classList.add("modal-visually");
});

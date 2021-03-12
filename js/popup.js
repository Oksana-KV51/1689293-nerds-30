const mapLink = document.querySelector(".btn-contacts");
const popup = document.querySelector(".appoiment");
const mapClose = document.querySelector(".appoiment-close");

mapLink.addEventListener("click", function (evt) {
    evt.preventDefault();       
    popup.classList.add("modal-show");
});

mapClose.addEventListener("click", function (evt) {
    evt.preventDefault();       
    popup.classList.remove("modal-show");
}); 

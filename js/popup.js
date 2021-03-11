const btncontacts = document.querySelector(".btn-contacts");
const popup = document.querySelector(".appoiment");
const close = document.querySelector(".appoiment-close");
btncontacts.addEventListener("click", function (evt) {
    evt.preventDefault();       
    popup.classList.add("modal-show");
});
close.addEventListener("click", function (evt) {
    evt.preventDefault();       
    popup.classList.remove("modal-show");
}); 
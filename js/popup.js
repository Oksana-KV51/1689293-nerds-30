const feedbackOpenBtn = document.querySelector(".btn-contacts");
const popup = document.querySelector(".appoiment");
const contactsСlose = document.querySelector(".appoiment-close");
feedbackOpenBtn.addEventListener("click", function (evt) {
    evt.preventDefault();       
    popup.classList.add("modal-show");
});
contactsСlose.addEventListener("click", function (evt) {
    evt.preventDefault();       
    popup.classList.remove("modal-show");
}); 

let popup = document.querySelector('.popup');
let popupOpen = document.querySelector('.profile__edit-btn');
let popupClose = document.querySelector('.popup__close');
let nameInput = document.querySelector('.popup__nameinput');
let jobInput = document.querySelector('.popup__jobinput');
let submitBtn = document.querySelector('.popup__submit');
let form = document.querySelector('.popup__form');
let nameUser = document.querySelector('.profile__name');
let userJob = document.querySelector('.profile__profession');


/*popupOpen.onclick = function() {
  popup.style.display = "block";
};

popupClose.onclick = function() {
  popup.style.display = "none";
};
*/

popupOpen.addEventListener("click", function () {
  popup.style.display = "block";
  nameInput.value = nameUser.textContent;
  jobInput.value = userJob.textContent;
});

popupClose.addEventListener("click", function () {
  popup.style.display = "none";

});

function formSubmitHandler(evt) {
  evt.preventDefault();
  nameUser.textContent = nameInput.value;
  userJob.textContent = jobInput.value;
  popup.style.display = "none";

}

form.addEventListener('submit', formSubmitHandler); 

let popup = document.querySelector('.popup');
let popupOpen = document.querySelector('.profile__edit-btn');
let popupClose = document.querySelector('.popup__close');
let nameInput = document.querySelector('.popup__input_type_name');
let jobInput = document.querySelector('.popup__input_type_job');
let form = document.querySelector('.popup__form');
let nameUser = document.querySelector('.profile__name');
let userJob = document.querySelector('.profile__profession');
/*
function addPopupModifier() {
  popup.classList.toggle('popup_opened');
  nameInput.value = nameUser.textContent;
  jobInput.value = userJob.textContent;
}

popupOpen.addEventListener('click', addPopupModifier);

function removePopupModifier() {
  popup.classList.remove('popup_opened');
}
popupClose.addEventListener('click', removePopupModifier);*/

function formSubmitHandler(evt) {
  evt.preventDefault();
  nameUser.textContent = nameInput.value;
  userJob.textContent = jobInput.value;
  

}

form.addEventListener('submit', formSubmitHandler); 
form.addEventListener('submit', removePopupModifier);

function addPopupModifier() {
  popup.classList.toggle('popup_opened');
  nameInput.value = nameUser.textContent;
  jobInput.value = userJob.textContent;
}

popupOpen.addEventListener('click', addPopupModifier);

function removePopupModifier() {
  popup.classList.remove('popup_opened');
}

popupClose.addEventListener('click', removePopupModifier);
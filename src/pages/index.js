import { Card } from "../components/Card.js";
import { FormValidator } from "../components/FormValidator.js";
import {profilePopup, cardPopup, imgPopup, profileEditBtn, cardPopupBtn, profileInputName, profileInputJob} from "../utils/constants.js";
import {profilePopupForm, profileName, profileJob, cardsContainer, cardPopupForm, cardPopupInputName, cardPopupInputLink} from "../utils/constants.js";
import { imgPopupPicture, imgPopupName, cardPopupSubmitBtn, validationObject, selectorTemplate, containerSelector ,initialCards, popupSelector} from "../utils/constants.js";
import { Section } from "../components/Section.js";
//import { Popup } from "../components/Popup";



const section = new Section({items: initialCards, renderer: rendererCallback}, containerSelector);
section.renderer()
const cardFormValidator = new FormValidator(validationObject, cardPopupForm);
cardFormValidator.enableValidation();
const profileFormValidator = new FormValidator(validationObject, profilePopupForm);
profileFormValidator.enableValidation();
/*
initialCards.forEach((cardData) => {
 // const cardWeJustCreated = createCard(cardData.name, cardData.link);
 // renderCard(cardWeJustCreated);
  //initImagePopup(cardData.name, cardData.link)
});*/

function rendererCallback(cardData) {  
 // const cardWeJustCreated = createCard(cardData.name, cardData.link);
  //renderCard(cardWeJustCreated);
  const card = new Card(cardData.name, cardData.link, selectorTemplate, openImagePopap);
  const cardElement = card.generateCard();
  section.addItem(cardElement)
 // initImagePopup(cardData.name, cardData.link)
}
/*
function createCard(name, link) {
  const card = new Card(name, link, selectorTemplate, openImagePopap);
  const cardElement = card.generateCard();
  return cardElement;
}*/

/*function renderCard(card) {
  cardsContainer.prepend(card);
}*/

function openPopup(modal) {
  modal.classList.add('popup_opened');
  document.addEventListener('keyup', handleEscUp);
}

function handleEscUp(evt) {
  evt.preventDefault();
  if (evt.key === 'Escape') {
    const activePopup = document.querySelector('.popup_opened');
    removePopupModifier(activePopup);
  }
}


function openCardPopup() {
  cardPopupForm.reset();
  cardFormValidator.resetValidation()
  cardFormValidator.disableButton(cardPopupSubmitBtn, validationObject)
}

function openProfilePopup() {
  profileInputName.value = profileName.textContent;
  profileInputJob.value = profileJob.textContent;
  profileFormValidator.resetValidation()

}


function removePopupModifier(modal) {
  modal.classList.remove('popup_opened');
  document.removeEventListener('keydown', handleEscUp)
}


function handleSubmitProfileForm(evt) {
  evt.preventDefault();
  profileName.textContent = profileInputName.value;
  profileJob.textContent = profileInputJob.value;
  removePopupModifier(profilePopup);

}


//добавление карточки из
function handleCardFormSubmit(evt) {
  evt.preventDefault();
  const cardName = cardPopupInputName.value;
  const cardLink = cardPopupInputLink.value;
  //const cardWeJustCreated = createCard(cardName, cardLink);
  //renderCard(cardWeJustCreated)
  const card = new Card(cardName, cardLink, selectorTemplate, openImagePopap);
  const cardElement = card.generateCard();
  section.addItem(cardElement)
  initImagePopup(cardName, cardLink)
  removePopupModifier(cardPopup);
}

function initImagePopup(name, link) {
  imgPopupPicture.src = link;
  imgPopup.alt = name;
  imgPopupName.textContent = name;

}
function openImagePopap(name, link) {
  initImagePopup(name, link);
  openPopup(imgPopup);
}


profilePopup.addEventListener('click', function (evt) {
  if (evt.target.classList.contains('popup_opened') || evt.target.classList.contains('popup__close')) {
    removePopupModifier(profilePopup)
  }
})

cardPopup.addEventListener('click', function (evt) {

  if (evt.target.classList.contains('popup_opened') || evt.target.classList.contains('popup__close')) {
    removePopupModifier(cardPopup)
  }
})

imgPopup.addEventListener('click', function (evt) {
  if (evt.target.classList.contains('popup_opened') || evt.target.classList.contains('popup__close')) {
    removePopupModifier(imgPopup)

  }
})

cardPopupBtn.addEventListener('click', function () {
  openPopup(cardPopup);
  openCardPopup()

});

profileEditBtn.addEventListener('click', function () {
  openProfilePopup(profilePopup);
  openPopup(profilePopup);

})


profilePopupForm.addEventListener('submit', handleSubmitProfileForm);

cardPopupForm.addEventListener('submit', handleCardFormSubmit);





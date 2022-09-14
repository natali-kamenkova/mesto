import { Card } from "../components/Card.js";
import { FormValidator } from "../components/FormValidator.js";
import {profilePopup, cardPopup, imgPopup, profileEditBtn, cardPopupBtn, profileInputName, profileInputJob, profileNameSelector, profileJobSelector} from "../utils/constants.js";
import {profilePopupForm, profileName, profileJob, cardsContainer, cardPopupForm, cardPopupInputName,cardFormSelector, cardPopupInputLink, profileFormSelector} from "../utils/constants.js";
import { imgPopupPicture, imgPopupName, cardPopupSubmitBtn, validationObject, selectorTemplate, containerSelector ,initialCards, popupProfileSelector, popupCardSelector, popupImageSelector} from "../utils/constants.js";
import { Section } from "../components/Section.js";
import { Popup } from "../components/Popup.js";
import { UserInfo } from "../components/UserInfo.js";
import {PopupWithForm} from "../components/PopupWithForm.js";


const popupProfileWithForm = new PopupWithForm(popupProfileSelector, profileFormSelector, handleSubmitProfileForm);
popupProfileWithForm.setEventListeners();
const popupCardWithForm = new PopupWithForm(popupCardSelector, cardFormSelector,handleCardFormSubmit);
popupCardWithForm.setEventListeners();
const userInfo = new UserInfo({profileNameSelector, profileJobSelector});
//userInfo.getUserInfo()

const popupProfile = new Popup(popupProfileSelector);
const popupCards = new Popup(popupCardSelector);
const popupImage = new Popup(popupImageSelector);
popupProfile.setEventListeners();
popupCards .setEventListeners();
popupImage.setEventListeners();

const section = new Section({items: initialCards, renderer: rendererCallback}, containerSelector);
section.renderer()

const cardFormValidator = new FormValidator(validationObject, cardPopupForm);
cardFormValidator.enableValidation();
const profileFormValidator = new FormValidator(validationObject, profilePopupForm);
profileFormValidator.enableValidation();


function rendererCallback(cardData) {  
  const cardWeJustCreated = createCard(cardData);
  section.addItem(cardWeJustCreated)
 // initImagePopup(cardData.name, cardData.link)

}

function createCard(cardData ) {
  const card = new Card(cardData.name, cardData.link, selectorTemplate, openImagePopap);
  const cardElement = card.generateCard();
  return cardElement;
}



/*function openPopup(modal) {
  modal.classList.add('popup_opened');
  document.addEventListener('keyup', handleEscUp);
}*/

/*function handleEscUp(evt) {
  evt.preventDefault();
  if (evt.key === 'Escape') {
    const activePopup = document.querySelector('.popup_opened');
    removePopupModifier(activePopup);
  }
}*/


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


/*function removePopupModifier(modal) {
  modal.classList.remove('popup_opened');
  document.removeEventListener('keydown', handleEscUp)
}*/

/*
function handleSubmitProfileForm(evt) {
  evt.preventDefault();
 
 profileName.textContent = profileInputName.value;
  profileJob.textContent = profileInputJob.value;
  popupProfile.close();

}*/

function handleSubmitProfileForm(formDataObject) {
  console.log(formDataObject)
  userInfo.setUserInfo(formDataObject);
}


//добавление карточки из
function handleCardFormSubmit(formDataObject) {
 // evt.preventDefault();
 // const cardName = cardPopupInputName.value;
 // const cardLink = cardPopupInputLink.value;
  //const cardWeJustCreated = createCard(cardName, cardLink);
  //renderCard(cardWeJustCreated)
 // const card = new Card(cardName, cardLink, selectorTemplate, openImagePopap);
  //const cardElement = card.generateCard();
  createCard(formDataObject)
  section.addItem(formDataObject)
  initImagePopup(formDataObject.name, formDataObject.link)
  popupCards.close();
}

function initImagePopup(name, link) {
  imgPopupPicture.src = link;
  imgPopup.alt = name;
  imgPopupName.textContent = name;

}
function openImagePopap(name, link) {
  initImagePopup(name, link);
  popupImage.open();
 
}

/*
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
})*/

cardPopupBtn.addEventListener('click', function () {
  popupCards.open();
  openCardPopup()

});

profileEditBtn.addEventListener('click', function () {
  openProfilePopup(profilePopup);
  popupProfile.open();

})


profilePopupForm.addEventListener('submit', handleSubmitProfileForm);

cardPopupForm.addEventListener('submit', handleCardFormSubmit);





import { Card } from "../components/Card.js";
import { FormValidator } from "../components/FormValidator.js";
import {profilePopup, cardPopup, imgPopup, profileEditBtn, cardPopupBtn, profileInputName, profileInputJob, profileNameSelector, profileJobSelector} from "../utils/constants.js";
import {profilePopupForm, profileName, profileJob, cardsContainer, cardPopupForm, cardPopupInputName,cardFormSelector, cardPopupInputLink, profileFormSelector} from "../utils/constants.js";
import { imgPopupPicture, imgPopupName, cardPopupSubmitBtn, validationObject, selectorTemplate, containerSelector ,initialCards, popupProfileSelector, popupCardSelector, popupImageSelector} from "../utils/constants.js";
import { Section } from "../components/Section.js";
import { Popup } from "../components/Popup.js";
import { UserInfo } from "../components/UserInfo.js";
import {PopupWithForm} from "../components/PopupWithForm.js";
import { PopupWithImage } from "../components/PopupWithImage.js";

const popupProfileWithForm = new PopupWithForm(popupProfileSelector, profileFormSelector, handleSubmitProfileForm);
popupProfileWithForm.setEventListeners();
const popupCardWithForm = new PopupWithForm(popupCardSelector, cardFormSelector,handleCardFormSubmit);
popupCardWithForm.setEventListeners();
const userInfo = new UserInfo({profileNameSelector, profileJobSelector});

const popupImage = new Popup(popupImageSelector);
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
 

}

function createCard(cardData ) {
  const card = new Card(cardData.name, cardData.link, selectorTemplate, openImagePopap);
  const cardElement = card.generateCard();
  return cardElement;
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



function handleSubmitProfileForm(formDataObject) {
  console.log(formDataObject)
  userInfo.setUserInfo(formDataObject);
}


//добавление карточки из
function handleCardFormSubmit(formDataObject) {

  const card = createCard(formDataObject)
  section.addItem(card)
    popupCardWithForm.close();
}

/*function handleCardFormSubmit(formDataObject) {
 
  
  section.addItem(createCard(formDataObject.name, formDataObject.link))
  popupAddCard.close()
}*/




function initImagePopup(name, link) {
  imgPopupPicture.src = link;
  imgPopup.alt = name;
  imgPopupName.textContent = name;

}
function openImagePopap(name, link) {
  initImagePopup(name, link);
  popupImage.open();
 
}



cardPopupBtn.addEventListener('click', function () {
  popupCardWithForm.open();
  openCardPopup()

});

profileEditBtn.addEventListener('click', function () {
  openProfilePopup(profilePopup);
  popupProfileWithForm.open();

})








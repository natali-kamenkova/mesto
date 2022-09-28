import './index.css'
import { Card } from "../components/Card.js";
import { FormValidator } from "../components/FormValidator.js";
import { profilePopup, cardPopup, imgPopup, profileEditBtn, cardPopupBtn, profileInputName, profileInputJob, profileNameSelector, profileJobSelector, avatarPopup, avatarPopupForm, avatarPopupSubmitBtn, avatarPopupInput } from "../utils/constants.js";
import { profilePopupForm, profileName, profileJob, cardsContainer, cardPopupForm, cardPopupInputName, cardFormSelector, deletPopupSubmitBtn, profileFormSelector, popupDeleteSelector, profileAvatar, popupAvatarSelector, avatarFormSelector, openAvatarPopupBtn } from "../utils/constants.js";
import { imgPopupPicture, imgPopupName, cardPopupSubmitBtn, validationObject, selectorTemplate, containerSelector, initialCards, popupProfileSelector, popupCardSelector, popupImageSelector, profileAvatarSelector } from "../utils/constants.js";
import { Section } from "../components/Section.js";
import { Popup } from "../components/Popup.js";
import { UserInfo } from "../components/UserInfo.js";
import { PopupWithForm } from "../components/PopupWithForm.js";
import { PopupWithImage } from "../components/PopupWithImage.js";
import { PopupDelete } from "../components/PopupDelete.js";
import { Api } from '../components/Api';
import { data } from 'autoprefixer';


const config = {
  url: 'https://mesto.nomoreparties.co/v1/cohort-51',
  headers: {
    authorization: 'c14fd4d2-b83b-4faf-994c-ea33775685d1',
    "Content-Type": "application/json"
  }
}

const api = new Api(config)
/*
api.getInitialCards()
  .then(function (data) {
    section.renderer(data)
    console.log(data)

  })
  .catch(function (err) {
    console.log('Ошибка', err)
  })



api.getUserInfo()
  .then(function (dataFromServer) {

    userInfo.setUserInfo(dataFromServer);
    userInfo.setUserAvatar(dataFromServer);
  })
  .catch(function (err) {
    console.log('Ошибка', err)
  })*/


const popupDelete = new PopupDelete(popupDeleteSelector);
popupDelete.setEventListeners();
const popupWithImage = new PopupWithImage(popupImageSelector)

const popupProfileWithForm = new PopupWithForm(popupProfileSelector, profileFormSelector, handleSubmitProfileForm);
popupProfileWithForm.setEventListeners();
const popupCardWithForm = new PopupWithForm(popupCardSelector, cardFormSelector, handleCardFormSubmit);
popupCardWithForm.setEventListeners();
const popupAvatarWithForm = new PopupWithForm(popupAvatarSelector, avatarFormSelector, handleAvatarFormSubmit);
popupAvatarWithForm.setEventListeners();

const userInfo = new UserInfo({ profileNameSelector, profileJobSelector, profileAvatarSelector });


popupWithImage.setEventListeners();

const section = new Section(rendererCallback, containerSelector);
//section.renderer(initialCards)

const cardFormValidator = new FormValidator(validationObject, cardPopupForm);
cardFormValidator.enableValidation();
const profileFormValidator = new FormValidator(validationObject, profilePopupForm);
profileFormValidator.enableValidation();

const avatarFormValidator = new FormValidator(validationObject, avatarPopupForm);
avatarFormValidator.enableValidation();

api.getInitialCards()
  .then(function (cardsFromServer) {
    section.renderer(cardsFromServer)
    console.log(cardsFromServer)

  })
  .catch(function (err) {
    console.log('Ошибка', err)
  })



api.getUserInfo()
  .then(function (dataFromServer) {

    userInfo.setUserInfo(dataFromServer);
    userInfo.setUserAvatar(dataFromServer);
  })
  .catch(function (err) {
    console.log('Ошибка', err)
  })




function rendererCallback(cardData) {
  const cardWeJustCreated = createCard(cardData);
  section.addItem(cardWeJustCreated)
}

function createCard(cardData) {
  const card = new Card(cardData, selectorTemplate, openImagePopap, openDeletePopup, handleLikeClick);

  const cardElement = card.generateCard();

  return cardElement;
}

function handleLikeClick() {

}

function openDeletePopup(cardInst) {
  popupDelete.setSubmitAction(() => {
    
    api.removeCard(cardInst.getId())
      .then(() => {
        cardInst.handleRemoveCard()
      })
      .catch(function (err) {
        console.log('Ошибка', err)
      })
  })
  popupDelete.open();
}


function openCardPopup() {
  cardPopupForm.reset();
  cardFormValidator.resetValidation()
  cardFormValidator.disableButton(cardPopupSubmitBtn, validationObject)
}

function openAvatarPopup() {
  avatarPopupForm.reset()
  avatarFormValidator.resetValidation()
  avatarFormValidator.disableButton(avatarPopupSubmitBtn, validationObject)
}

function openProfilePopup() {


  profileInputName.value = userInfo.getUserInfo().name;
  profileInputJob.value = userInfo.getUserInfo().job;
  profileFormValidator.resetValidation()

}


//сабмит попапа профиля
function handleSubmitProfileForm(formDataObject) {
  api.editProfile(formDataObject)
    .then(function (formDataObject) {
      userInfo.setUserInfo(formDataObject);
    })
    .catch(function (err) {
      console.log('Ошибка', err)
    })

}


//добавление карточки (сабмит)
function handleCardFormSubmit(formDataObject) {
  api.addCard(formDataObject)
    .then(function (formDataObject) {

      const card = createCard(formDataObject)

      section.addItem(card)
      popupCardWithForm.close();
    })
    .catch(function (err) {
      console.log('Ошибка', err)
    })

}
// сабмит аватара
function handleAvatarFormSubmit(formDataObject) {
  api.editAvatar(formDataObject)
    .then(function (formDataObject) {
      userInfo.setUserAvatar(formDataObject)
    })
    .catch(function (err) {
      console.log('Ошибка', err)
    })



}



function openImagePopap(name, link) {
  popupWithImage.open({ name, link });

}

cardPopupBtn.addEventListener('click', function () {
  popupCardWithForm.open();
  openCardPopup()

});

profileEditBtn.addEventListener('click', function () {
  openProfilePopup(profilePopup);
  popupProfileWithForm.open();

})

openAvatarPopupBtn.addEventListener('click', function () {
  popupAvatarWithForm.open();
  openAvatarPopup()
})









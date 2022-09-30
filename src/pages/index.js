import './index.css'
import { Card } from "../components/Card.js";
import { FormValidator } from "../components/FormValidator.js";
import { profilePopup, cardPopup, imgPopup, profileEditBtn, cardPopupBtn, profileInputName, profileInputJob, profileNameSelector, profileJobSelector, avatarPopup, avatarPopupForm, avatarPopupSubmitBtn, avatarPopupInput } from "../utils/constants.js";
import { profilePopupForm, profileName, profileJob, profilePopupSubmitBtn, cardsContainer, cardPopupForm, cardPopupInputName, cardFormSelector, deletPopupSubmitBtn, profileFormSelector, popupDeleteSelector, profileAvatar, popupAvatarSelector, avatarFormSelector, openAvatarPopupBtn } from "../utils/constants.js";
import { imgPopupPicture, imgPopupName,cardLikeBtn, cardPopupSubmitBtn, validationObject, selectorTemplate, containerSelector, initialCards, popupProfileSelector, popupCardSelector, popupImageSelector, profileAvatarSelector } from "../utils/constants.js";
import { Section } from "../components/Section.js";
import { Popup } from "../components/Popup.js";
import { UserInfo } from "../components/UserInfo.js";
import { PopupWithForm } from "../components/PopupWithForm.js";
import { PopupWithImage } from "../components/PopupWithImage.js";
import { PopupDelete } from "../components/PopupDelete.js";
import { Api } from '../components/Api';
//import { data } from 'autoprefixer';


const config = {
  url: 'https://mesto.nomoreparties.co/v1/cohort-51',
  headers: {
    authorization: 'c14fd4d2-b83b-4faf-994c-ea33775685d1',
    "Content-Type": "application/json"
  }
}

const api = new Api(config)


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

  let userId = null;

  api.getAllInfo()
  .then(([userData, cardsData])=>{
    userId = userData._id;
    section.renderer(cardsData);
    userInfo.setUserInfo(userData);
    userInfo.setUserAvatar(userData);
   
  })
  .catch(function (err) {
    console.log('Ошибка', err)
  })




function rendererCallback(cardData) {
  const cardWeJustCreated = createCard(cardData);
  section.addItem(cardWeJustCreated)
}

function handleLikeClick(instance) {
  api.changeLike(instance.getId(), instance.isLiked())
  .then(dataCard => {
    instance.setLikesData(dataCard)
    
    
  })
  .catch(function (err) {
    console.log('Ошибка', err)
  })

}

function createCard(cardData) {
  const card = new Card(cardData, selectorTemplate, openImagePopap, openDeletePopup, userId, handleLikeClick);

  const cardElement = card.generateCard();

  return cardElement;
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
function renderLoading(isLoading, btn) {
  if (isLoading) {
    btn.innerText = 'Сохраняется...'
  }
  else {
    btn.innerText = 'Сохранить'
  }
}

//сабмит попапа профиля
function handleSubmitProfileForm(formDataObject) {
  api.editProfile(formDataObject)
    .then(function (formDataObject) {
      userInfo.setUserInfo(formDataObject);

      renderLoading(true, profilePopupSubmitBtn)
    })
    .catch(function (err) {
      console.log('Ошибка', err)
    })
    .finally(function (formDataObject) {

      renderLoading(false, profilePopupSubmitBtn)
    })

}


//добавление карточки (сабмит)
function handleCardFormSubmit(formDataObject) {
  api.addCard(formDataObject)
    .then(function (formDataObject) {

      const card = createCard(formDataObject)

      renderLoading(true, cardPopupSubmitBtn)
      section.addItem(card)
      popupCardWithForm.close();
    })
    .catch(function (err) {
      console.log('Ошибка', err)
    })
    .finally(function (formDataObject) {
      renderLoading(false, cardPopupSubmitBtn)

    })


}
// сабмит аватара
function handleAvatarFormSubmit(formDataObject) {
  api.editAvatar(formDataObject)
    .then(function (formDataObject) {
      userInfo.setUserAvatar(formDataObject)
      renderLoading(true, avatarPopupSubmitBtn)
    })
    .catch(function (err) {
      console.log('Ошибка', err)
    })
    .finally(function (formDataObject) {
      renderLoading(false, avatarPopupSubmitBtn)

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









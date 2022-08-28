
import { Card } from "./Card.js";
import { FormValidator } from "./FormValidator.js";

const profilePopup = document.querySelector('.popup-profile');
const cardPopup = document.querySelector('.popup-cards');
const imgPopup = document.querySelector('.popup-image');
const profileEditBtn = document.querySelector('.profile__edit-btn');
const cardPopupBtn = document.querySelector('.profile__next-popup-btn');
const btnProfilePopupClose = document.querySelector('.popup__close');
const profileInputName = document.querySelector('.popup__input_type_name');
const profileInputJob = document.querySelector('.popup__input_type_job');
const profilePopupForm = document.querySelector('.popup__form');
const profileName = document.querySelector('.profile__name');
const profileJob = document.querySelector('.profile__profession');
const cardsContainer = document.querySelector('.elements');
const btnCardPopupClose = cardPopup.querySelector('.popup__close');
const cardPopupForm = cardPopup.querySelector('.popup__form');
const cardPopupInputName = cardPopup.querySelector('.popup__input_type_card-name');
const cardPopupInputLink = cardPopup.querySelector('.popup__input_type_card-link');
const templateElement = document.querySelector('#card-template').content.querySelector('.element');
const imgPopupPicture = imgPopup.querySelector('.popup-image__img');
const imgPopupName = imgPopup.querySelector('.popup-image__title');
const btnImgPopupClose = imgPopup.querySelector('.popup__close');
const cardPopupSubmitBtn = cardPopup.querySelector('.popup__submit');

const validationObject = {
  formSelector: '.popup__form',
  inputSelector: '.popup__input',
  submitButtonSelector: '.popup__submit',
  inactiveButtonClass: 'popup__submit_disabled',
  inputErrorClass: 'popup__input_type_error',
  errorClass: 'popup__span_active'
}

const initialCards = [
  {
    name: 'Архыз',
    link: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/arkhyz.jpg'
  },
  {
    name: 'Челябинская область',
    link: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/chelyabinsk-oblast.jpg'
  },
  {
    name: 'Иваново',
    link: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/ivanovo.jpg'
  },
  {
    name: 'Камчатка',
    link: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/kamchatka.jpg'
  },
  {
    name: 'Холмогорский район',
    link: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/kholmogorsky-rayon.jpg'
  },
  {
    name: 'Байкал',
    link: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/baikal.jpg'
  }
];



const cardFormValidator = new FormValidator(validationObject, cardPopupForm);
cardFormValidator.enableValidation();
const profileFormValidator = new FormValidator(validationObject, profilePopupForm);
profileFormValidator.enableValidation();


initialCards.forEach((cardData) => {
  const cardWeJustCreated = addCardAndReturnAddedCard(cardData.name, cardData.link);

  initImagePopup(cardWeJustCreated)
});

function addCardAndReturnAddedCard(name, link) {
  const card = new Card(name, link, openImagePopap);
  const cardElement = card.generateCard();
  renderCard(cardElement);
  return cardElement;
}



function renderCard(card) {
  cardsContainer.prepend(card);
}

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


//функция отправки CardForm - Сохранить новую карточку
//вызывается когда я нажимаю на кнопку сохранить
function handleCardFormSubmit(evt) {
  evt.preventDefault();
  const cardName = cardPopupInputName.value;
  const cardLink = cardPopupInputLink.value;
  const cardWeJustCreated = addCardAndReturnAddedCard(cardName, cardLink);
  initImagePopup(cardWeJustCreated)
  removePopupModifier(cardPopup);

}

function initImagePopup(cardElement) {
  const text = cardElement.querySelector('.element__name');
  const cardImg = cardElement.querySelector('.element__image');
  imgPopupPicture.src = cardImg.src;
  imgPopup.alt = text.textContent;
    imgPopupName.textContent = text.textContent;

}
function openImagePopap(cardElement) {
  initImagePopup(cardElement);
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





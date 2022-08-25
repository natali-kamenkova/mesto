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
    name: 'Байкал',
    link: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/baikal.jpg'
  },
  {
    name: 'Челябинская область',
    link: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/chelyabinsk-oblast.jpg'
  },
  {
    name: 'Яффо',
    link: 'https://7d9e88a8-f178-4098-bea5-48d960920605.selcdn.net/4ef76ebb-714e-460c-886f-fc514226d278/'
  },
  {
    name: 'Лаба',
    link: 'https://anapacity.com/images/articles/big/reka-laba.jpg'
  },
  {
    name: 'Адыгея',
    link: 'https://kurort.yuga.ru/media/b2/f2/photo_2020-01-28_122338__k4d0vn5.jpg'
  },
  {
    name: 'Ростов-на-Дону',
    link: 'https://34travel.me/media/upload/images/2019/march/rostov-na-donu/new/Depositphotos_201004458_s-2019.jpg'
  }
];



const formValidator = new FormValidator(validationObject, cardPopupForm );

initialCards.forEach((item) => {
 const cardWeJustCreated = addCardAndReturnAddedCard(item.name, item.link);
 addCardImageClickListener(cardWeJustCreated)
});

function addCardAndReturnAddedCard (name, link){
  const card = new Card(name, link);
  const cardElement = card.generateCard();
  cardsContainer.prepend(cardElement);
  return cardElement;
}

function openPopup(modal) {
  modal.classList.add('popup_opened');

  document.addEventListener('keyup', handleEscUp)

  

}

profilePopup.addEventListener('click', function (evt) {
  
  if (evt.target.classList.contains('popup_opened') || evt.target.classList.contains('popup__close'))
   {
    removePopupModifier(profilePopup)
  }
})

cardPopup.addEventListener('click', function (evt) {
  
  if (evt.target.classList.contains('popup_opened') || evt.target.classList.contains('popup__close'))
   {
    removePopupModifier(cardPopup)
  }
})

imgPopup.addEventListener('click', function (evt) {
  if (evt.target.classList.contains('popup_opened') || evt.target.classList.contains('popup__close')) {
    removePopupModifier(imgPopup)
  }
})






function handleEscUp(evt) {
  evt.preventDefault();
  if (evt.key === 'Escape') {
    const activePopup = document.querySelector('.popup_opened');
    removePopupModifier(activePopup);
  }
}



cardPopupBtn.addEventListener('click', function () {
  openPopup(cardPopup);
  openCardPopup()

});

function openCardPopup() {
  cardPopupForm.reset();
 formValidator.hideInputError(cardPopup, cardPopupInputName, validationObject);
 formValidator.hideInputError(cardPopup, cardPopupInputLink, validationObject);
 formValidator.disableButton(cardPopupSubmitBtn, validationObject)
}

function openProfilePopup() {
  profileInputName.value = profileName.textContent;
  profileInputJob.value = profileJob.textContent;

  formValidator.hideInputError(profilePopupForm, profileInputName, validationObject);
  formValidator.hideInputError(profilePopupForm, profileInputJob, validationObject);
}


profileEditBtn.addEventListener('click', function () {
  openProfilePopup(profilePopup);
  openPopup(profilePopup);

})


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

profilePopupForm.addEventListener('submit', handleSubmitProfileForm);

//создание карточки
/*
function createCard(name, link) {
  const clonedCard = templateElement.cloneNode(true);
  const img = clonedCard.querySelector('.element__image');
  img.src = link;
  img.alt = name;
  clonedCard.querySelector('.element__name').textContent = name;
  clonedCard.querySelector('.element__like-btn').addEventListener('click', function (evt) {
    evt.target.classList.toggle('element__like-btn_active');
  });

  clonedCard.querySelector('.element__reset-btn').addEventListener('click', function () {
    clonedCard.remove();
  });

  const text = clonedCard.querySelector('.element__name');
  const cardImg = clonedCard.querySelector('.element__image');
  cardImg.addEventListener('click', function () {
    openPopup(imgPopup);
    imgPopupPicture.src = cardImg.src;
    imgPopupPicture.alt = text.textContent;
    imgPopupName.textContent = text.textContent;
  })

  return clonedCard
}*/



//размещение на странице
/*
function renderCard(card) {
  cardsContainer.prepend(card);
}

function addCardJS(name, link) {
  const cardElement = createCard(name, link)
  renderCard(cardElement)
}

const cardsHTML = initialCards.map(function (card) {
  return addCardJS(card.name, card.link);
})*/



//функция отправки CardForm - Сохранить новую карточку
//вызывается когда я нажимаю на кнопку сохранить
function handleCardFormSubmit(evt) {
  evt.preventDefault();

  const cardName = cardPopupInputName.value;
  const cardLink = cardPopupInputLink.value;

  const cardWeJustCreated = addCardAndReturnAddedCard(cardName, cardLink);
  addCardImageClickListener(cardWeJustCreated)
   removePopupModifier(cardPopup);

}
cardPopupForm.addEventListener('submit', handleCardFormSubmit); 

function addCardImageClickListener(cardElement){
  const text = cardElement.querySelector('.element__name');
  const cardImg = cardElement.querySelector('.element__image');
  cardImg.addEventListener('click', function () {
    openPopup(imgPopup);
    imgPopupPicture.src = cardImg.src;
    imgPopupPicture.alt = text.textContent;
    imgPopupName.textContent = text.textContent;
  })
}


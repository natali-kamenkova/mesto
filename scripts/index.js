const popup = document.querySelector('.popup');
const nextPopup = document.querySelector('.next-popup');
const imgPopup = document.querySelector('.img-popup');
let popupOpen = document.querySelector('.profile__edit-btn');
let nextPopupOpenBtn = document.querySelector('.profile__next-popup-btn');
let popupClose = document.querySelector('.popup__close');
let nameInput = document.querySelector('.popup__input_type_name');
let jobInput = document.querySelector('.popup__input_type_job');
let form = document.querySelector('.popup__form');
let nameUser = document.querySelector('.profile__name');
let userJob = document.querySelector('.profile__profession');
let elements = document.querySelector('.elements');
let nextPopupClose = nextPopup.querySelector('.popup__close');
let formCard = nextPopup.querySelector('.popup__form');
let nextPopupNameInput = nextPopup.querySelector('.popup__input_type_card-name');
let nextPopupLinkInput = nextPopup.querySelector('.popup__input_type_card-link');
const teml = document.querySelector('#card-template').content.children[0];
const picture = imgPopup.querySelector('.img-popup__img');
const imgPopupClose = imgPopup.querySelector('.popup__close');

console.log(imgPopupClose);
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

function openPopup(modal) {
  modal.classList.toggle('popup_opened');
  nameInput.value = nameUser.textContent;
  jobInput.value = userJob.textContent;
}

popupOpen.addEventListener('click', () => openPopup(popup));
nextPopupOpenBtn.addEventListener('click', () => openPopup(nextPopup));

function removePopupModifier() {
  popup.classList.remove('popup_opened');
  nextPopup.classList.remove('popup_opened');
  imgPopup.classList.remove('popup_opened');
  nextPopupNameInput.value = "";
  nextPopupLinkInput.value = "";
}

popupClose.addEventListener('click', removePopupModifier);
nextPopupClose.addEventListener('click', removePopupModifier);
imgPopupClose.addEventListener('click', removePopupModifier);


function formSubmitHandler(evt) {
  evt.preventDefault();
  nameUser.textContent = nameInput.value;
  userJob.textContent = jobInput.value;
}

form.addEventListener('submit', formSubmitHandler);
form.addEventListener('submit', removePopupModifier);

function addCardJS(name, link) {
  const cardElement = teml.cloneNode(true);
  cardElement.querySelector('.element__image').src = link;
  cardElement.querySelector('.element__name').textContent = name;
  cardElement.querySelector('.element__like-btn').addEventListener('click', function (evt) {
    evt.target.classList.toggle('element__like-btn_active');
  });

  cardElement.querySelector('.element__reset-btn').addEventListener('click', function () {
    cardElement.remove();
  });

  const cardImg = cardElement.querySelector('.element__image');
  cardImg.addEventListener('click', () => openPopup(imgPopup));
   cardImg.addEventListener('click', function(){
   picture.src = link;
  })
  
  elements.prepend(cardElement);
}

const cardsHTML = initialCards.map(card => {
  return addCardJS(card.name, card.link);
})

function cardFormSubmitHandler(evt) {
  evt.preventDefault();
  const cardName = nextPopupNameInput.value;
  const cardLink = nextPopupLinkInput.value;
  const cardsHTML = addCardJS(cardName, cardLink);
  nextPopupNameInput.value = "";
  nextPopupLinkInput.value = "";
  removePopupModifier();
}
formCard.addEventListener('submit', cardFormSubmitHandler);


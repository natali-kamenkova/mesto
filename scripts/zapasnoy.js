/*
let popup = document.querySelector('.popup');
let nextPopup = document.querySelector('.next-popup');
let popupOpen = document.querySelector('.profile__edit-btn');
let popupClose = document.querySelector('.popup__close');
let nextPopupClose = document.querySelector('.next-popup__close');
let nameInput = document.querySelector('.popup__input_type_name');
let jobInput = document.querySelector('.popup__input_type_job');
let form = document.querySelector('.popup__form');
let nameUser = document.querySelector('.profile__name');
let userJob = document.querySelector('.profile__profession');
let elements = document.querySelector('.elements');
let nextPopupOpenBtn = document.querySelector('.profile__next-popup-btn');
let nextPopupNameInput = document.querySelector('.next-popup__input_type_card-name');
let nextPopupLinkInput = document.querySelector('.next-popup__input_type_card-link');
/*let elementResetBtn = document.querySelector('.element__reset-btn');*/
/*let formCard = document.querySelector('.next-popup__form');


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
console.log(initialCards);

function addCardJS(name, link) {
  const cardTemplate = document.querySelector('#card-template').content;
  const cardElement = cardTemplate.querySelector('.element').cloneNode(true);

  cardElement.querySelector('.element__image').src = link;
  cardElement.querySelector('.element__name').textContent = name;
  cardElement.querySelector('.element__like-btn').addEventListener('click', function (evt) {
    evt.target.classList.toggle('element__like-btn_active');
  
  });
  elements.prepend(cardElement);
}

const cardsHTML = initialCards.map(card => {
  return addCardJS(card.name, card.link);
})



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

function addNextPopupModifier() {
  nextPopup.classList.toggle('next-popup_opened');
}

nextPopupOpenBtn.addEventListener('click', addNextPopupModifier);

function removePopupModifier() {
  popup.classList.remove('popup_opened');
}

popupClose.addEventListener('click', removePopupModifier);

function removeNextPopupModifier() {
  nextPopup.classList.toggle('next-popup_opened');

}
nextPopupClose.addEventListener('click', removeNextPopupModifier);



nextPopupAddbtn.addEventListener('click', function () {
  const cardName = nextPopupNameInput.value;
  const cardLink = nextPopupLinkInput.value;
  const card = { name: cardName, link: cardLink };
  initialCards.unshift(card);
  const cardsHTML = addCardJS(card.name, card.link);
  nextPopupNameInput.value = " ";
  nextPopupLinkInput.value = " ";
  removeNextPopupModifier();
});

function cardFormSubmitHandler(evt){
  evt.preventDefault();
  const cardName = nextPopupNameInput.value;
  const cardLink = nextPopupLinkInput.value;
  const card = { name: cardName, link: cardLink };
  initialCards.unshift(card);
  const cardsHTML = addCardJS(card.name, card.link);
  nextPopupNameInput.value = " ";
  nextPopupLinkInput.value = " ";
  removeNextPopupModifier();
}

formCard.addEventListener('submit', cardFormSubmitHandler);*/

//2 попытка



let popup = document.querySelector('.popup');
let nextPopup = document.querySelector('.next-popup');
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
console.log(initialCards);


function addCardJS(name, link) {
  const cardTemplate = document.querySelector('#card-template').content;
  const cardElement = cardTemplate.querySelector('.element').cloneNode(true);
  cardElement.querySelector('.element__image').src = link;
  cardElement.querySelector('.element__name').textContent = name;
  cardElement.querySelector('.element__like-btn').addEventListener('click', function (evt) {
    evt.target.classList.toggle('element__like-btn_active');
    
  });
  elements.prepend(cardElement);
}

const cardsHTML = initialCards.map(card => {
  return addCardJS(card.name, card.link);
})
/*

function formSubmitHandler(evt) {
  evt.preventDefault();
  nameUser.textContent = nameInput.value;
  userJob.textContent = jobInput.value;


}

form.addEventListener('submit', formSubmitHandler);
form.addEventListener('submit', removePopupModifier);
/*
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
  nextPopupNameInput.value = "";
  nextPopupLinkInput.value = "";
}

popupClose.addEventListener('click', removePopupModifier);

nextPopupClose.addEventListener('click', removePopupModifier);*/

function cardFormSubmitHandler(evt) {
  evt.preventDefault();
  const cardName = nextPopupNameInput.value;
  const cardLink = nextPopupLinkInput.value;

 const card = { name: cardName, link: cardLink };
  initialCards.unshift(card);
  
  console.log(initialCards );
  const cardsHTML = addCardJS(card.name, card.link);
  nextPopupNameInput.value = "";
  nextPopupLinkInput.value = "";
  removePopupModifier();
}

formCard.addEventListener('submit', cardFormSubmitHandler);


const buttons = document.querySelectorAll('.element__reset-btn');

console.log(buttons);

function resetCard(evt) {
  const currentButton = evt.currentTarget;
  currentButton.closest('.element').remove()
  
}

buttons.forEach(button => {
  button.addEventListener('click', resetCard)
  
})
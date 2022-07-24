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
const templateElement = document.querySelector('#card-template').content.children[0];
const imgPopupPicture = imgPopup.querySelector('.popup-image__img');
const imgPopupName = imgPopup.querySelector('.popup-image__title');
const btnImgPopupClose = imgPopup.querySelector('.popup__close');
console.log(imgPopupName);

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
  },
  {
    name: 'Ростов-на-Дону',
    link: 'https://www.kp.ru/russia/wp-content/uploads/2019/02/Naberezhnaya-1330-530x322.jpg'
  }
];

function openPopup(modal) {
  modal.classList.toggle('popup_opened');
}


cardPopupBtn.addEventListener('click', function () {
  return openPopup(cardPopup);
});

function openProfilePopup(modal) {
  profileInputName.value = profileName.textContent;
  profileInputJob.value = profileJob.textContent;
}

profileEditBtn.addEventListener('click', function () {
  openProfilePopup(profilePopup);
  openPopup(profilePopup);
})


function removePopupModifier(modal) {
  modal.classList.remove('popup_opened');
}

btnProfilePopupClose.addEventListener('click', function () {
  removePopupModifier(profilePopup);
});


btnCardPopupClose.addEventListener('click', function () {
  closeCardsPopup();
  removePopupModifier(cardPopup);
});
btnImgPopupClose.addEventListener('click', function () {
  removePopupModifier(imgPopup);
});


function closeCardsPopup() {
  cardPopupInputName.value = "";
  cardPopupInputLink.value = "";
}


function handleSubmitform(evt) {
  evt.preventDefault();
  profileName.textContent = profileInputName.value;
  profileJob.textContent = profileInputJob.value;
  removePopupModifier();
}

profilePopupForm.addEventListener('submit', handleSubmitform);

function createCard(name, link) {
  const clonedCard = templateElement.cloneNode(true);
  const img = clonedCard.querySelector('.element__image');
  img.src = link;
  img.alt = name;
  clonedCard.querySelector('.element__name').textContent = name;
  addListeners(clonedCard)
  return clonedCard
}


function addListeners(card) {
  card.querySelector('.element__like-btn').addEventListener('click', function (evt) {
    evt.target.classList.toggle('element__like-btn_active');
  });

  card.querySelector('.element__reset-btn').addEventListener('click', function () {
    card.remove();
  });

  const text = card.querySelector('.element__name');
  const cardImg = card.querySelector('.element__image');
  cardImg.addEventListener('click', function () {
    openPopup(imgPopup);
    imgPopupPicture.src = cardImg.src;
    imgPopupPicture.alt = text.textContent;
    imgPopupName.textContent = text.textContent;
  })
}


function renderCard(card) {
  cardsContainer.prepend(card);
}

function addCardJS(name, link) {
  const cardElement = createCard(name, link)
  renderCard(cardElement)
}

const cardsHTML = initialCards.map(function (card) {
  return addCardJS(card.name, card.link);
})

function handleCardFormSubmit(evt) {
  evt.preventDefault();
  const cardName = cardPopupInputName.value;
  const cardLink = cardPopupInputLink.value;
  addCardJS(cardName, cardLink);
  cardPopupInputName.value = "";
  cardPopupInputLink.value = "";
  removePopupModifier();
}
cardPopupForm.addEventListener('submit', handleCardFormSubmit);


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
const cardPopupSubmitBtn = cardPopup.querySelector('.popup__submit');
console.log(templateElement);

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

function openPopup(modal) {
  modal.classList.add('popup_opened');

  document.addEventListener('keyup', handleEscUp)

  modal.addEventListener('click', function (evt) {
    if (evt.target.classList.contains('popup_opened')) {
      removePopupModifier(modal)
    }
  })

}


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
  hideInputError(cardPopup, cardPopupInputName, validationObject);
  hideInputError(cardPopup, cardPopupInputLink, validationObject);
  disableButton(cardPopupSubmitBtn, validationObject)
}

function openProfilePopup() {
  profileInputName.value = profileName.textContent;
  profileInputJob.value = profileJob.textContent;

  hideInputError(profilePopupForm, profileInputName, validationObject);
  hideInputError(profilePopupForm, profileInputJob, validationObject);
}


profileEditBtn.addEventListener('click', function () {
  openProfilePopup(profilePopup);
  openPopup(profilePopup);

})


function removePopupModifier(modal) {
  modal.classList.remove('popup_opened');
  document.removeEventListener('keydown', handleEscUp)
}

btnProfilePopupClose.addEventListener('click', function () {
  removePopupModifier(profilePopup);

});




btnCardPopupClose.addEventListener('click', function () {

  removePopupModifier(cardPopup);
});
btnImgPopupClose.addEventListener('click', function () {
  removePopupModifier(imgPopup);
});




function handleSubmitProfileForm(evt) {
  evt.preventDefault();
  profileName.textContent = profileInputName.value;
  profileJob.textContent = profileInputJob.value;
  removePopupModifier(profilePopup);

}

profilePopupForm.addEventListener('submit', handleSubmitProfileForm);

//создание карточки
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
}

/*
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
}*/

//размещение на странице
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



//функция отправки CardForm
function handleCardFormSubmit(evt) {
  evt.preventDefault();
  const cardName = cardPopupInputName.value;
  const cardLink = cardPopupInputLink.value;
  addCardJS(cardName, cardLink);
  removePopupModifier(cardPopup);

}
cardPopupForm.addEventListener('submit', handleCardFormSubmit); 

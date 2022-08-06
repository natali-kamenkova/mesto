console.log('Удачи!!!!!')             //.popup__input_type_error- Красная полоска  |||||| .popup__input-error_active -Надпись



/* 
//принимает форму и поля формы и валид
function isValid(formElement, inputElement, obj) {
  if (!inputElement.validity.valid) {
    // showInputError теперь получает параметром форму, в которой
    // находится проверяемое поле, и само это поле
    showInputError(formElement, inputElement, inputElement.validationMessage,obj);
  } else {
    // hideInputError теперь получает параметром форму, в которой
    // находится проверяемое поле, и само это поле
    hideInputError(formElement, inputElement, obj);
  }
}



//показывает сообщения об ошибках
function showInputError(formElement, inputElement, errorMessage, obj) {
  // Находим элемент ошибки внутри самой функции
  const errorElement = formElement.querySelector(`.${inputElement.id}-error`);
  inputElement.classList.add(obj.inputErrorClass);
  errorElement.textContent = errorMessage;
  errorElement.classList.add(obj.errorClass);
  if(inputElement.type === 'url') {
    
    errorElement.textContent = 'Введите адрес сайта.'
    
  }
  if (inputElement.value === '') {
    errorElement.textContent = 'Вы пропустили это поле'
    
  }
  
}


//скрывает сщщбщения об ошибках
function hideInputError(formElement, inputElement, obj) {
  // Находим элемент ошибки
  const errorElement = formElement.querySelector(`.${inputElement.id}-error`);
  // Остальной код такой же
  inputElement.classList.remove(obj.inputErrorClass);
  errorElement.classList.remove(obj.errorClass);
  errorElement.textContent = '';
}




function setEventListeners(formElement, obj) {
  // Найдём все поля формы и сделаем из них массив
  const inputList = Array.from(formElement.querySelectorAll(obj.inputSelector));
  // Найдём в текущей форме кнопку отправки
  const buttonElement = formElement.querySelector(obj.submitButtonSelector);
  toggleButtonState(inputList, buttonElement, obj);
  inputList.forEach((inputElement) => {
    inputElement.addEventListener('input', () => {
      isValid(formElement, inputElement, obj);

      // Вызовем toggleButtonState и передадим ей массив полей и кнопку
      toggleButtonState(inputList, buttonElement, obj);
    });
  });
}





//Добавление обработчиков всем формам
function enableValidation(obj) {

  const formList = Array.from(document.querySelectorAll(obj.inputSelector)); //массив форм

  formList.forEach((formElement) => {
    formElement.addEventListener('submit', function (evt) {
      evt.preventDefault();
    });

    // Для каждой формы вызовем функцию setEventListeners, передав ей элемент формы

    setEventListeners(formElement, obj);
  });
}

// Функция принимает массив полей

function hasInvalidInput(inputList) {
  // проходим по этому массиву методом some
  return inputList.some((inputElement) => {
    // Если поле не валидно, колбэк вернёт true
    // Обход массива прекратится и вся функция
    // hasInvalidInput вернёт true
    return !inputElement.validity.valid;
  });
}
/*
enableValidation = {
  formSelector: '.popup__form',
  inputSelector: '.popup__input',
  submitButtonSelector: '.popup__submit',
  inactiveButtonClass: 'popup__submit_disabled',
  inputErrorClass: 'popup__input_type_error',
  errorClass: 'popup__input-error_active'
};*/


// Функция принимает массив полей ввода
// и элемент кнопки, состояние которой нужно менять
/*
function toggleButtonState(inputList, buttonElement, obj) {
  // Если есть хотя бы один невалидный инпут
  if (hasInvalidInput(inputList)) {
    // сделай кнопку неактивной
    buttonElement.classList.add(obj.inactiveButtonClass)
    buttonElement.setAttribute('disabled', 'disabled');
    
  } else {
    // иначе сделай кнопку активной
    buttonElement.classList.remove(obj.inactiveButtonClass)
    buttonElement.removeAttribute('disabled');
  }
}

document.addEventListener('keydown', function (evt) {
  if (evt.key === 'Escape') {
    closePopupEsc()
  }
});

function closePopupEsc (){
  const popupList = Array.from(document.querySelectorAll('.popup'));
  popupList.forEach((popup) => {
    popup.classList.remove('popup_opened');
    });
}

document.addEventListener('click', function(evt){
  if(evt.target.classList.contains('popup_opened')){
    closePopupEsc()
}
})








enableValidation({
  formSelector: '.popup__form',
  inputSelector: '.popup__input',
  submitButtonSelector: '.popup__submit',
  inactiveButtonClass: 'popup__submit_disabled',
  inputErrorClass: 'popup__input_type_error',
  errorClass: 'popup__input-error_active'
});

*/





//принимает форму и поля формы и валид
function isValid(formElement, inputElement) {
  if (!inputElement.validity.valid) {
    // showInputError теперь получает параметром форму, в которой
    // находится проверяемое поле, и само это поле
    showInputError(formElement, inputElement, inputElement.validationMessage);
  } else {
    // hideInputError теперь получает параметром форму, в которой
    // находится проверяемое поле, и само это поле
    hideInputError(formElement, inputElement);
  }
}



//показывает сообщения об ошибках
function showInputError(formElement, inputElement, errorMessage) {
  // Находим элемент ошибки внутри самой функции
  const errorElement = formElement.querySelector(`.${inputElement.id}-error`);
  inputElement.classList.add('popup__input_type_error');
  errorElement.textContent = errorMessage;
  errorElement.classList.add('popup__input-error_active');
  if(inputElement.type === 'url') {
    
    errorElement.textContent = 'Введите адрес сайта.'
    
  }
  if (inputElement.value === '') {
    errorElement.textContent = 'Вы пропустили это поле'
    
  }
  
}


//скрывает сщщбщения об ошибках
function hideInputError(formElement, inputElement) {
  // Находим элемент ошибки
  const errorElement = formElement.querySelector(`.${inputElement.id}-error`);
  // Остальной код такой же
  inputElement.classList.remove('popup__input_type_error');
  errorElement.classList.remove('popup__input-error_active');
  errorElement.textContent = '';
  
}




function setEventListeners(formElement) {
  // Найдём все поля формы и сделаем из них массив
  const inputList = Array.from(formElement.querySelectorAll(`.popup__input`));
  // Найдём в текущей форме кнопку отправки
  const buttonElement = formElement.querySelector('.popup__submit');
  toggleButtonState(inputList, buttonElement);
  inputList.forEach((inputElement) => {
    inputElement.addEventListener('input', () => {
      isValid(formElement, inputElement);

      // Вызовем toggleButtonState и передадим ей массив полей и кнопку
      toggleButtonState(inputList, buttonElement);
    });
  });
}





//Добавление обработчиков всем формам
function enableValidation() {

  const formList = Array.from(document.querySelectorAll('.popup__form')); //массив форм

  formList.forEach((formElement) => {
    formElement.addEventListener('submit', function (evt) {
      evt.preventDefault();
    });

    // Для каждой формы вызовем функцию setEventListeners, передав ей элемент формы

    setEventListeners(formElement);
  });
}

// Функция принимает массив полей

function hasInvalidInput(inputList) {
  // проходим по этому массиву методом some
  return inputList.some((inputElement) => {
    // Если поле не валидно, колбэк вернёт true
    // Обход массива прекратится и вся функция
    // hasInvalidInput вернёт true
    return !inputElement.validity.valid;
  });
}

// Функция принимает массив полей ввода
// и элемент кнопки, состояние которой нужно менять

function toggleButtonState(inputList, buttonElement) {
  // Если есть хотя бы один невалидный инпут
  if (hasInvalidInput(inputList)) {
    // сделай кнопку неактивной
    buttonElement.classList.add('popup__submit_disabled')
    buttonElement.setAttribute('disabled', 'disabled');
    
  } else {
    // иначе сделай кнопку активной
    buttonElement.classList.remove('popup__submit_disabled')
    buttonElement.removeAttribute('disabled');
  }
}

document.addEventListener('keydown', function (evt) {
  if (evt.key === 'Escape') {
    closePopupEsc()
  }
});

function closePopupEsc (){
  const popupList = Array.from(document.querySelectorAll('.popup'));
  popupList.forEach((popup) => {
    popup.classList.remove('popup_opened');
    });
}

document.addEventListener('click', function(evt){
  if(evt.target.classList.contains('popup_opened')){
    closePopupEsc()
}
})

// Вызовем функцию
enableValidation();











































console.log('Удачи!!!!!')             //.popup__input_type_error- Красная полоска  |||||| .popup__input-error_active -Надпись





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
    buttonElement.setAttribute('disabled', 'disabled');
  } else {
    // иначе сделай кнопку активной
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




































//const formElement = document.querySelector('.popup__form');
//const formInput = formElement.querySelector('.popup__input');
//const formInput =Array.from(formElement.querySelectorAll('.popup__input'));
//const formError = formElement.querySelector(`.${formInput.id}-error`);

//console.log(formInput)



/*const chowInputError = (element) => {
  element.classList.add('popup__input_type_error');
  // Скрываем сообщение об ошибке
  formError.classList.add('popup__input-error_active');
  formError.textContent = '';
};




const hideInputError = (element) => {
  element.classList.remove('popup__input_type_error');
  // Скрываем сообщение об ошибке
  formError.classList.remove('popup__input-error_active');
  formError.textContent = '';
};




function isValid() {
  if (!formInput.validity.valid) {
    // Если поле не проходит валидацию, покажем ошибку
    showInputError(formInput, formInput.validationMessage);
  } else {
    // Если проходит, скроем
    hideInputError(formInput);
  }
}
console.log(formInput.validity)

 
formElement.addEventListener('submit', function (evt) {
  // Отменим стандартное поведение по сабмиту
  evt.preventDefault();
});



 //Вызовем функцию isValid на каждый ввод символа
formInput.addEventListener('input', isValid); */













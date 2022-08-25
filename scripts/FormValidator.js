export class FormValidator {

  constructor(obj, formElement) {
    this.formElement = formElement;
    this.enableValidation(obj)
  }
  
  isValid(formElement, inputElement, obj) {
    if (!inputElement.validity.valid) {
      // showInputError теперь получает параметром форму, в которой
      // находится проверяемое поле, и само это поле
      this.showInputError(formElement, inputElement, inputElement.validationMessage, obj);
    } else {
      // hideInputError теперь получает параметром форму, в которой
      // находится проверяемое поле, и само это поле
      this.hideInputError(formElement, inputElement, obj);
    }
  }



  //показывает сообщения об ошибках
  showInputError(formElement, inputElement, errorMessage, obj) {
    // Находим элемент ошибки внутри самой функции
    const errorElement = formElement.querySelector(`.${inputElement.id}-error`);
    inputElement.classList.add(obj.inputErrorClass);
    errorElement.textContent = errorMessage;
    errorElement.classList.add(obj.errorClass);

  }


  //скрывает сщщбщения об ошибках
  hideInputError(formElement, inputElement, obj) {
    // Находим элемент ошибки
    const errorElement = formElement.querySelector(`.${inputElement.id}-error`);
    // Остальной код такой же
    inputElement.classList.remove(obj.inputErrorClass);
    errorElement.classList.remove(obj.errorClass);
    errorElement.textContent = '';

  }




  setEventListeners(formElement, obj) {
    // Найдём все поля формы и сделаем из них массив
    const inputList = Array.from(formElement.querySelectorAll(obj.inputSelector));
    // Найдём в текущей форме кнопку отправки
    const buttonElement = formElement.querySelector(obj.submitButtonSelector);
    this.toggleButtonState(inputList, buttonElement, obj);
    const thisObject = this
    inputList.forEach((inputElement) => {
      inputElement.addEventListener('input', function () {
        thisObject.isValid(formElement, inputElement, obj);

        // Вызовем toggleButtonState и передадим ей массив полей и кнопку
        thisObject.toggleButtonState(inputList, buttonElement, obj);
      });
    });
  }





  //Добавление обработчиков всем формам
  enableValidation(obj) {

    const formList = Array.from(document.querySelectorAll(obj.formSelector)); //массив форм

    formList.forEach((formElement) => {
      // Для каждой формы вызовем функцию setEventListeners, передав ей элемент формы

      this.setEventListeners(formElement, obj);
    });
  }

  // Функция принимает массив полей

  hasInvalidInput(inputList) {
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

  toggleButtonState(inputList, buttonElement, obj) {
    // Если есть хотя бы один невалидный инпут
    if (this.hasInvalidInput(inputList)) {
      // сделай кнопку неактивной
      this.disableButton(buttonElement, obj)
    } else {
      // иначе сделай кнопку активной
      this.enableButton(buttonElement, obj);
    }
  }

  enableButton(buttonElement, obj) {
    buttonElement.classList.remove(obj.inactiveButtonClass);
    buttonElement.removeAttribute('disabled');
  }

  disableButton(buttonElement, obj) {
    buttonElement.classList.add(obj.inactiveButtonClass)
    buttonElement.setAttribute('disabled', 'disabled');
  }
}







/*
export class FormValidator {

constructor(validationObject) {

  this.enableValidation(validationObject);
}

   isValid(formElement, inputElement, obj) {
    if (!inputElement.validity.valid) {
      // showInputError теперь получает параметром форму, в которой
      // находится проверяемое поле, и само это поле
      this.showInputError(formElement, inputElement, inputElement.validationMessage, obj);
    } else {
      // hideInputError теперь получает параметром форму, в которой
      // находится проверяемое поле, и само это поле
      this.hideInputError(formElement, inputElement, obj);
    }
  }
  
  
  
  //показывает сообщения об ошибках
   showInputError(formElement, inputElement, errorMessage, obj) {
    // Находим элемент ошибки внутри самой функции
    const errorElement = formElement.querySelector(`.${inputElement.id}-error`);
    inputElement.classList.add(obj.inputErrorClass);
    errorElement.textContent = errorMessage;
    errorElement.classList.add(obj.errorClass);
   
  }
  
  
  //скрывает сщщбщения об ошибках
   hideInputError(formElement, inputElement, obj) {
    // Находим элемент ошибки
    const errorElement = formElement.querySelector(`.${inputElement.id}-error`);
    // Остальной код такой же
    inputElement.classList.remove(obj.inputErrorClass);
    errorElement.classList.remove(obj.errorClass);
    errorElement.textContent = '';
  
  }
  
  
  
  
  setEventListeners(formElement, obj) {
    // Найдём все поля формы и сделаем из них массив
    const inputList = Array.from(formElement.querySelectorAll(obj.inputSelector));
    // Найдём в текущей форме кнопку отправки
    const buttonElement = formElement.querySelector(obj.submitButtonSelector);
    this.toggleButtonState(inputList, buttonElement, obj);
    const thisObject = this
    inputList.forEach((inputElement) => {
      inputElement.addEventListener('input', function () {
        thisObject.isValid(formElement, inputElement, obj);
  
        // Вызовем toggleButtonState и передадим ей массив полей и кнопку
        thisObject.toggleButtonState(inputList, buttonElement, obj);
      });
    });
  }
  
  
  
  
  
  //Добавление обработчиков всем формам
  enableValidation(obj) {
  
    const formList = Array.from(document.querySelectorAll(obj.formSelector)); //массив форм
  
    formList.forEach((formElement) => {
      // Для каждой формы вызовем функцию setEventListeners, передав ей элемент формы
  
      this.setEventListeners(formElement, obj);
    });
  }
  
  // Функция принимает массив полей
  
   hasInvalidInput(inputList) {
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
  
   toggleButtonState(inputList, buttonElement, obj) {
    // Если есть хотя бы один невалидный инпут
    if (this.hasInvalidInput(inputList)) {
      // сделай кнопку неактивной
      this.disableButton(buttonElement, obj)
    } else {
      // иначе сделай кнопку активной
      this.enableButton(buttonElement, obj);
    }
  }
  
   enableButton(buttonElement, obj) {
    buttonElement.classList.remove(obj.inactiveButtonClass);
    buttonElement.removeAttribute('disabled');
  }
  
   disableButton(buttonElement, obj) {
      buttonElement.classList.add(obj.inactiveButtonClass)
      buttonElement.setAttribute('disabled', 'disabled');
  }
}*/


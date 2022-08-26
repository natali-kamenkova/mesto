export class FormValidator {
  constructor(validationConfig, formElement) {
    this.formElement = formElement;
    this.validationConfig = validationConfig;
    this.inputList = Array.from(formElement.querySelectorAll(validationConfig.inputSelector));
    this.buttonElement = formElement.querySelector(validationConfig.submitButtonSelector);

    console.log(this.buttonElement)
  }
/*
  _setEventListeners() {
    this.formElement.addEventListener('submit', (evt) => {
      evt.preventDefault();
      console.log('Все получится!!!!')
    })
  }

  enableValidation() {
    this._setEventListeners()
  }*/
 
  

    
  _hasInvalidInput() {
    // проходим по этому массиву методом some
    return this.inputList.some((inputElement) => {
      // Если поле не валидно, колбэк вернёт true
      // Обход массива прекратится и вся функция
      // hasInvalidInput вернёт true
      return !inputElement.validity.valid;
    });
  }

  _toggleButtonState() {
    // Если есть хотя бы один невалидный инпут
    if (this._hasInvalidInput()) {
      // сделай кнопку неактивной
      this._disableButton()
    } else {
      // иначе сделай кнопку активной
      this._enableButton();
    }
  }

  _setEventListeners() {

    this._toggleButtonState();
    
    this.inputList.forEach((inputElement) => {
      inputElement.addEventListener('input', () => {
        this._isValid();
       this._toggleButtonState();
      });
    });
  }

  _isValid() {
    this.inputList.forEach((inputElement) => {
      if (!inputElement.validity.valid) {

        this._showInputError(inputElement, inputElement.validationMessage);
      } else {

        this._hideInputError(inputElement);
      }
    })

  }

  _showInputError(inputElement, errorMessage) {
    // Находим элемент ошибки внутри самой функции
    const errorElement = this.formElement.querySelector(`.${inputElement.id}-error`);
    inputElement.classList.add(this.validationConfig.inputErrorClass);
    errorElement.textContent = errorMessage;
    console.log(errorElement.textContent)
    errorElement.classList.add(this.validationConfig.errorClass);

  }

  _hideInputError(inputElement) {

    const errorElement = this.formElement.querySelector(`.${inputElement.id}-error`);
    inputElement.classList.remove(this.validationConfig.inputErrorClass);
    errorElement.classList.remove(this.validationConfig.errorClass);
    errorElement.textContent = '';

  }

  resetValidation(){
    this.inputList.forEach((inputElement) =>{
      this._hideInputError(inputElement)
    })
  }

  _enableButton() {
    this.buttonElement.classList.remove(this.validationConfig.inactiveButtonClass);
    this.buttonElement.removeAttribute('disabled');
  }

  _disableButton() {
    this.buttonElement.classList.add(this.validationConfig.inactiveButtonClass)
    this.buttonElement.setAttribute('disabled', 'disabled');
  }
  enableValidation() {
     this._setEventListeners(this.formElement)
  };

 







   
        /*                                        
    _isValid(formElement, inputElement, obj) {
      if (!inputElement.validity.valid) {
        // showInputError теперь получает параметром форму, в которой
        // находится проверяемое поле, и само это поле
        this._showInputError(formElement, inputElement, inputElement.validationMessage, obj);
      } else {
        // hideInputError теперь получает параметром форму, в которой
        // находится проверяемое поле, и само это поле
        this._hideInputError(formElement, inputElement, obj);
      }
    }
  
  
  
    //показывает сообщения об ошибках
    _showInputError(formElement, inputElement, errorMessage, obj) {
      // Находим элемент ошибки внутри самой функции
      const errorElement = formElement.querySelector(`.${inputElement.id}-error`);
      inputElement.classList.add(obj.inputErrorClass);
      errorElement.textContent = errorMessage;
      errorElement.classList.add(obj.errorClass);
  
    }
  
  
    //скрывает сщщбщения об ошибках
    _hideInputError(formElement, inputElement, obj) {
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
          thisObject._isValid(formElement, inputElement, obj);
  
          // Вызовем toggleButtonState и передадим ей массив полей и кнопку
          thisObject.toggleButtonState(inputList, buttonElement, obj);
        });
      });
    }
  
  
  
  
    //Добавление обработчиков всем формам
    enableValidation(validationConfig) {
     
      const formList = Array.from(document.querySelectorAll(this.validationConfig.formSelector)); //массив форм
  
      formList.forEach((formElement) => {
        // Для каждой формы вызовем функцию setEventListeners, передав ей элемент формы
  
        this.setEventListeners(formElement, validationConfig);
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
    */
}










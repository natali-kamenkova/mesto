export class FormValidator {
  constructor(validationConfig, formElement) {
    this.formElement = formElement;
    this.validationConfig = validationConfig;
    this.inputList = Array.from(formElement.querySelectorAll(validationConfig.inputSelector));
    this.buttonElement = formElement.querySelector(validationConfig.submitButtonSelector);

  }


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
      this.disableButton()
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
    errorElement.classList.add(this.validationConfig.errorClass);

  }

  _hideInputError(inputElement) {

    const errorElement = this.formElement.querySelector(`.${inputElement.id}-error`);
    inputElement.classList.remove(this.validationConfig.inputErrorClass);
    errorElement.classList.remove(this.validationConfig.errorClass);
    errorElement.textContent = '';

  }

  resetValidation() {
    this.inputList.forEach((inputElement) => {
      this._hideInputError(inputElement)
    })
  }

  _enableButton() {
    this.buttonElement.classList.remove(this.validationConfig.inactiveButtonClass);
    this.buttonElement.removeAttribute('disabled');
  }

  disableButton() {
    this.buttonElement.classList.add(this.validationConfig.inactiveButtonClass)
    this.buttonElement.setAttribute('disabled', 'disabled');
  }
  enableValidation() {
    this._setEventListeners(this.formElement)
  };











}










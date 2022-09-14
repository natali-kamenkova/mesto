import { Popup } from "./Popup.js";

export class PopupWithForm extends Popup {
  constructor(popupSelector, formSelector, submitHandler = null) {
    super(popupSelector);
    this._form = this._popup.querySelector(formSelector);
    this._submitHandler = submitHandler;
  }

  _getInputValues() { 
    const formDataObject = {};
    const inputElements = this._form.querySelectorAll('.popup__input');

    [...inputElements].forEach((input) => {
      formDataObject[input.name] = input.value;
    })
   console.log(formDataObject)
    return formDataObject;
  }

  setEventListeners() {
    this._form.addEventListener('submit', (evt) => {
      evt.preventDefault();
      this._submitHandler(this._getInputValues);
      this.close();
    })
    super.setEventListeners();
  }
  close() {
    this._form.reset();
    super.close();
  }

}
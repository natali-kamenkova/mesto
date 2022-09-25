import { Popup } from "./Popup.js";

export class PopupDelete extends Popup {
  constructor(popupSelector) {
    super(popupSelector);
    this._submitHandlerDelete = null;
    this._popup = document.querySelector(popupSelector)
  }



  setSubmitAction(action) {
    this._submitHandlerDelete = action;
  }

  setEventListeners() {
    super.setEventListeners();
    this._popup.addEventListener('submit', (evt) => {
      evt.preventDefault();
      this._submitHandlerDelete(evt);
      this.close();
    })
  }

 
}
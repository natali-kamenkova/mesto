import { Popup } from "./Popup.js";

export class PopupWithImage extends Popup {
  open({ name, link }) {
    this._link = this._popup.querySelector('.popup-image__img');
    this._link.src = link;
    this._name = this._popup.querySelector('.popup-image__title');
    this._name.textContent = name;
    super.open();
  }
}
<<<<<<< HEAD
  import { Popup } from "./Popup.js";

export class PopupWithImage extends Popup {

=======
import { Popup } from "./Popup.js";

export class PopupWithImage extends Popup{
   open({name, link}){
     this._popup.querySelector('.popup-image').src = link;
     this._popup.querySelector('.popup-image__title').textContent = name;
     super.open();
   }
>>>>>>> proba
}
export class Card {
  constructor(name, link){
    this.name= name;
    this.link = link;
  }
  
  _getTemplate(){
    const cardElement = document.querySelector('#card-template').content.querySelector('.element').cloneNode(true);
    return cardElement;
  }

  _addLikeListener(){
    this._element.querySelector('.element__like-btn').addEventListener('click', function (evt) {
      evt.target.classList.toggle('element__like-btn_active');
    });
  }

  _addRemoveListener(){
    const card = this._element
    this._element.querySelector('.element__reset-btn').addEventListener('click', function () {
      card.remove();
    });
  }

  generateCard(){
    this._element = this._getTemplate();
    this._element.querySelector('.element__name').textContent = this.name;
    this._element.querySelector('.element__image').src = this.link;
   /* this._element.querySelector('.element__like-btn').addEventListener('click', function (evt) {
      evt.target.classList.toggle('element__like-btn_active');
    });*/
   this._addLikeListener();
   this._addRemoveListener();

   /* const card = this._element
    this._element.querySelector('.element__reset-btn').addEventListener('click', function () {
      card.remove();
    });*/


    
    return this._element;
  }
         
}




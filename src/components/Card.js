
export class Card {

  constructor(name, link, selector, openImageCallback, openDeletCallback) {
    this.name = name;
    this.link = link;
    this._template = document.querySelector(selector).content
    this.openImageCallback = openImageCallback;
    //this._handleRemoveCard = this._handleRemoveCard.bind(this)
    this.openDeletCallback = openDeletCallback;
  }


  _getTemplate() {
    const cardElement = this._template.querySelector('.element').cloneNode(true);
    return cardElement;
  }

  _handleLikeCard(evt) {
    evt.target.classList.toggle('element__like-btn_active');
  }
  _handleRemoveCard() {
    this._element.remove()
  }

  _addEventListeners() {
    this._element.querySelector('.element__like-btn').addEventListener('click', this._handleLikeCard);


    this._element.querySelector('.element__reset-btn').addEventListener('click', ()=>{
      this.openDeletCallback()
    } );
      
     
   
    this._element.querySelector('.element__image').addEventListener('click', () => {
      this.openImageCallback(this.name, this.link)
    })
  }



  generateCard() {
    this._element = this._getTemplate();
    this._element.querySelector('.element__name').textContent = this.name;
    this._element.querySelector('.element__image').src = this.link;
    this._element.querySelector('.element__image').alt = this.name;
    this._addEventListeners();
    return this._element;

  }




}




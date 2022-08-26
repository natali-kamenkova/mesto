

export class Card {

  constructor(name, link, openImageCallback) {
    this.name = name;
    this.link = link;
    this.template = document.querySelector('#card-template').content.querySelector('.element');
    this.openImageCallback = openImageCallback;
    
  }


  _getTemplate() {
    const cardElement = this.template.cloneNode(true);
    return cardElement;
  }

  _handleLikeCard(evt) {
    evt.target.classList.toggle('element__like-btn_active');
  }

  

  _addEventListeners(){
    this._element.querySelector('.element__like-btn').addEventListener('click', this._handleLikeCard);

    
    this._element.querySelector('.element__reset-btn').addEventListener('click', () => {
      this._element.remove();
    });
    
    
    this._element.querySelector('.element__image').addEventListener('click', () => {
      this.openImageCallback(this._element)
    })
  }

  

  generateCard() {
    this._element = this._getTemplate();
    
    this._element.querySelector('.element__name').textContent = this.name;
    this._element.querySelector('.element__image').src = this.link;
    this._element.alt = this.name;
    /*this._addLikeListener();
    this._addRemoveListener();*/
    this._addEventListeners();
    return this._element;
  }


  

}




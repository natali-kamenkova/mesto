
export class Card {

  constructor(data, selector, openImageCallback, openDeletCallback) {
    this._data = data
    this.name = data.name;
    this.link = data.link;
    this._id = data.id;
    this._template = document.querySelector(selector).content
    this.openImageCallback = openImageCallback;
    //this._handleRemoveCard = this._handleRemoveCard.bind(this)
    this._openDeletCallback = openDeletCallback;
    //this.handleClickDelete = handleClickDelete;
  }


  _getTemplate() {
    const cardElement = this._template.querySelector('.element').cloneNode(true);
    return cardElement;
  }

  _handleLikeCard(evt) {
    evt.target.classList.toggle('element__like-btn_active');
  }
  handleRemoveCard() {
    this._element.remove()
    this._element = null;
  }

  _addEventListeners() {
    this._element.querySelector('.element__like-btn').addEventListener('click', this._handleLikeCard);


    this._element.querySelector('.element__reset-btn').addEventListener('click', _ => this._handleClickDelete())


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

  _handleClickDelete() {
    this._openDeletCallback(this);
  }

  getId() {
    return this._data._id
  }




}




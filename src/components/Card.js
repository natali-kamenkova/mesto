
export class Card {

  constructor(data, selector, openImageCallback, openDeletCallback, userId, handleLikeClickCallback) {
    this._data = data
    this.name = data.name;
    this.link = data.link;
    this.cardId = data._id;
    this._OwnerId = data.owner._id;
   
    this._template = document.querySelector(selector).content
    this.openImageCallback = openImageCallback;
    this._openDeletCallback = openDeletCallback;
    
    this.userId = userId;
    this._handleLikeClickCallback = handleLikeClickCallback;

  }


  _getTemplate() {
    const cardElement = this._template.querySelector('.element').cloneNode(true);
    return cardElement;
  }


  handleRemoveCard() {
    this._element.remove()
    this._element = null;
  }

  _addEventListeners() {


    this._cardLikeBtn.addEventListener('click', () => {
      this._handleLikeClickCallback(this);

    })

    this._element.querySelector('.element__reset-btn').addEventListener('click', _ => this._handleClickDelete())


    this._element.querySelector('.element__image').addEventListener('click', () => {
      this.openImageCallback(this.name, this.link)
      console.log(this._data)
      console.log(this.userId)
      console.log(this._OwnerId )
    })
  }

  setLikesData(data) {
    this._data.likes = data.likes;
    this._updateLike();
  }


  // возвращает полностью работоспособный и наполненный данными элемент карточки.
  generateCard() {
    this._element = this._getTemplate();
    this._element.querySelector('.element__name').textContent = this.name;
    this._element.querySelector('.element__image').src = this.link;
    this._element.querySelector('.element__image').alt = this.name;
    this._cardLikeBtn = this._element.querySelector('.element__like-btn');
    this._cardLikeCounter = this._element.querySelector('.element__like-counter');
    this._cardLikeCounter.textContent = this._data.likes.length;
    this._addEventListeners();
    this._checkId()
    this._updateLike();
    return this._element;

  }

  _handleClickDelete() {
    this._openDeletCallback(this);
  }

  getId() {
    return this._data._id
  }

  _checkId() {
    if (this._OwnerId === this.userId) {

      this._element.querySelector('.element__reset-btn').classList.add('show')
    }
  }



  isLiked() {
    return this._data.likes.some((item) => {
      return item._id === this.userId;
    })
  }

  _updateLike() {
    this._cardLikeCounter.textContent = this._data.likes.length;

    if (this.isLiked()) {
      this._cardLikeBtn.classList.add('element__like-btn_active');
    } else {
      this._cardLikeBtn.classList.remove('element__like-btn_active');
    }



  }






}




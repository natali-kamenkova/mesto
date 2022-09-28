
export class Card {

  constructor(data, selector, openImageCallback, openDeletCallback, handleLikeClickCallback) {
    this._data = data
    this.name = data.name;
    this.link = data.link;
    this.cardId = data._id;
    this._OwnerId = data.owner._id;
    this._numberOfLikes = data.likes.length
    this._template = document.querySelector(selector).content
    this.openImageCallback = openImageCallback;
    this._openDeletCallback = openDeletCallback;
    this.myId = '7873e3d4966ed095d61ab965'
    this._handleLikeClickCallback= handleLikeClickCallback
  }


  _getTemplate() {
    const cardElement = this._template.querySelector('.element').cloneNode(true);
    return cardElement;
  }

  _handleLikeCard=(evt) =>{
   /* this._upLikes()
   this._setNumberOfLikes()*/
   this._handleLikeClickCallback()
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
      console.log(this._data)
      /*console.log(this._OwnerId)*/
      console.log(this._numberOfLikes)
     /* console.log(this.link)
     this._upLikes()
     console.log(this._numberOfLikes)*/
    })
  }



  generateCard() {
    this._element = this._getTemplate();
    this._element.querySelector('.element__name').textContent = this.name;
    this._element.querySelector('.element__image').src = this.link;
    this._element.querySelector('.element__image').alt = this.name;
    this._addEventListeners();
    this._checkId()
    this._setNumberOfLikes();
    return this._element;

  }

  _handleClickDelete() {
    this._openDeletCallback(this);
  }

  getId() {
    return this._data._id
  }

  _checkId() {
    if (this._OwnerId ===this.myId) {

      this._element.querySelector('.element__reset-btn').classList.add('show')
    }
  }

  _getNumberOfLikes(){
    return this._numberOfLikes
  }

  _setNumberOfLikes(){
    this._element.querySelector('.element__like-counter').textContent = this._getNumberOfLikes()
  }


  _upLikes(){
    this._numberOfLikes += 1;
  }

  _downLikes(){
    this._numberOfLikes-=1;
  }

}




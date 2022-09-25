export class Api {
  constructor(config) {
    this._url = config.url;
    this._headers = config.headers;
  }

  getInitialCards() {
    return fetch(`${this._url}/cards`, {
      headers: this._headers
    })
      .then(function (res) {
        return res.json()
      })
  

  }


  /*getInitialCards() {
    return fetch('https://mesto.nomoreparties.co/v1/cohort-51/cards', {
      headers: {
        authorization: 'c14fd4d2-b83b-4faf-994c-ea33775685d1'
      }
    })
      .then(res => res.json())
      .then((result) => {
        console.log(result);
      });
  }*/

  removeCard(cardId) {
    return fetch(`${this._url}/cards/${cardId}`, {
      method: 'DELETE',
      headers: this._headers
    })
      .then(function (res) {
        return res.json()
      })

  }



}


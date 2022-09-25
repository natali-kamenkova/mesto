export class Api {
  constructor(config) {
    this._url = config.url;
    this._headers = config.headers;
  }

  getInitialCards() {
    return fetch(`${this._url}/cards`, {
      method: 'GET',
      headers: this._headers
    })
      .then(function (res) {
        if (res.ok) {
          return res.json()
        }
        return Promise.reject({ message: 'Ошибка на стороне сервера', res })

      })


  }


  removeCard(cardId) {
    return fetch(`${this._url}/cards/${cardId}`, {
      method: 'DELETE',
      headers: this._headers
    })
      .then(function (res) {
        if (res.ok) {
          return res.json()
        }
        return Promise.reject({ message: 'Ошибка на стороне сервера', res })
      })

  }

  addCard(data){
    return fetch(`${this._url}/cards`, {
      method: 'POST',
      headers: this._headers,
      body: JSON.stringify({
        name: data.name,
        link: data.link
      })
    })
      .then(function (res) {
        if (res.ok) {
          return res.json()
        }
        return Promise.reject({ message: 'Ошибка на стороне сервера', res })
      })

  }



}




export class UserInfo {
  constructor({ profileNameSelector, profileJobSelector }) {
    this._name = document.querySelector(profileNameSelector);
    this._job = document.querySelector(profileJobSelector);
  }

  // возвращает объект с данными пользователя
  getUserInfo() {
    
    return {
      name: this._name.textContent,
      job: this._job.textContent
    }
    
  }

  // принимает новые данные пользователя и добавляет их на страницу.
  setUserInfo(formData){
    
   this._name.textContent = formData.name;
    this._job.textContent= formData.about;
  }
}

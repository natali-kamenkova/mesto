

export class UserInfo {
  constructor({ profileNameSelector, profileJobSelector, profileAvatarSelector }) {
    this._name = document.querySelector(profileNameSelector);
    this._job = document.querySelector(profileJobSelector);
    this._link = document.querySelector(profileAvatarSelector);
  }

  // возвращает объект с данными пользователя
  getUserInfo() {
    
    return {
      name: this._name.textContent,
      job: this._job.textContent,
      link: this._link.src
    }
    
  }

  setUserInfo(formData){
    
   this._name.textContent = formData.name;
    this._job.textContent= formData.about;
  }

  setUserAvatar(formData){
    this._link.src = formData.avatar;
  }


}

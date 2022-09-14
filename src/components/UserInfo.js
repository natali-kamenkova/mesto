

export class UserInfo {
  constructor({ profileNameSelector, profileJobSelector }) {
    this._name = document.querySelector(profileNameSelector);
    this._job = document.querySelector(profileJobSelector);
  }

  getUserInfo() {
    
    return {
      name: this._name.textContent,
      job: this._job.textContent
    }
    
  }

  setUserInfo(formData){
    
   this._name.textContent = formData.name;
    this._job.textContent= formData.job;
  }
}

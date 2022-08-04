console.log('Удачи!!!!!')             //.popup__input_type_error- Красная полоска  |||||| .popup__input-error_active -Надпись
//const forms = Array.from(document.forms);
const profileForm = document.forms.namedItem('dataEditing');

//console.log(profileForm)
/*
profileInputName.addEventListener('input', function(){
  const error = profilePopup.querySelector('.popup__input_type_name-error')
  if(profileInputName.value===''|| !profileInputName.validity.valid){
    profileInputName.classList.add('popup__input_type_error');
    error.classList.add('popup__input-error_active')
  }

})


profileInputJob.addEventListener('input', function(){
  const error = profilePopup.querySelector('.popup__input_type_job-error')
    if(profileInputJob.value===''||!profileInputJob.validity.valid){
    profileInputJob.classList.add('popup__input_type_error');
    error.classList.add('popup__input-error_active')
  }
})*/

function isProfileFormValid() {
  profileInputName.addEventListener('input', function () {
    const error = profilePopup.querySelector('.popup__input_type_name-error')
    if (profileInputName.value === '' || !profileInputName.validity.valid) {
      showInputError(profileForm, profileInputName);
    }
    else {
      hideInputError(profileForm, profileInputName);
    }

  })
  profileInputJob.addEventListener('input', function () {
    const error = profilePopup.querySelector('.popup__input_type_job-error')
    if (profileInputJob.value === '' || !profileInputJob.validity.valid) {
      showInputError(profileForm, profileInputJob)
    }
    else {
      profileInputJob.classList.remove('popup__input_type_error');
      hideInputError(profileForm, profileInputJob);
    }
  })

}
isProfileFormValid()

function showInputError (formElement, inputElement){
  const errorElement = formElement.querySelector(`.${inputElement.id}-error`);
  profileInputName.classList.add('popup__input_type_error');
  errorElement.classList.add('popup__input-error_active');
}

function hideInputError (formElement, inputElement){
  const errorElement = formElement.querySelector(`.${inputElement.id}-error`);
  profileInputName.classList.remove('popup__input_type_error');
  errorElement.classList.remove('popup__input-error_active');
}


/*
function isValid(formElement){
const inputList = Array.from(formElement.querySelectorAll('.popup__input'))
console.log(inputList)
inputList.forEach(function(inputElement){
  const errorElement = formElement.querySelector(`.${inputElement.id}-error`);
  
  console.log(errorElement)
  console.log(inputElement)
inputElement.addEventListener('input', function(){
  
  if(inputElement.value===''|| !inputElement.validity.valid){

    inputElement.classList.add('popup__input_type_error');
    errorElement.classList.add('popup__input-error_active')
  }
  else{
    inputElement.classList.remove('popup__input_type_error');
    errorElement.classList.remove('popup__input-error_active')
  }
})












/*
//принимает форму и поля формы и валид
function isValid(formElement, inputElement) {
  if (!inputElement.validity.valid) {
    // showInputError теперь получает параметром форму, в которой
    // находится проверяемое поле, и само это поле
    showInputError(formElement, inputElement, inputElement.validationMessage);
  } else {
    // hideInputError теперь получает параметром форму, в которой
    // находится проверяемое поле, и само это поле
    hideInputError(formElement, inputElement);
  }
}*/



/*

//показывает сообщения об ошибках
function showInputError(formElement, inputElement, errorMessage) {
  // Находим элемент ошибки внутри самой функции
  const errorElement = formElement.querySelector(`.${inputElement.id}-error`);
  inputElement.classList.add('popup__input_type_error');
  errorElement.textContent = errorMessage;
  errorElement.classList.add('popup__input-error_active');
}


//скрывает сщщбщения об ошибках
function hideInputError(formElement, inputElement) {
  // Находим элемент ошибки
  const errorElement = formElement.querySelector(`.${inputElement.id}-error`);
  // Остальной код такой же
  inputElement.classList.remove('popup__input_type_error');
  errorElement.classList.remove('popup__input-error_active');
  errorElement.textContent = '';
}


//Добавление обработчиков всем полям формы
function setEventListeners(formElement) {
  // Находим все поля внутри формы,
  // сделаем из них массив методом Array.from
  const inputList = Array.from(formElement.querySelectorAll('.popup__input'));

  // Обойдём все элементы полученной коллекции
  inputList.forEach(function (inputElement) {
    // каждому полю добавим обработчик события input
    inputElement.addEventListener('input', function () {
      // Внутри колбэка вызовем isValid,
      // передав ей форму и проверяемый элемент
      isValid(formElement, inputElement);
    });
  });
}



//Добавление обработчиков всем формам
function enableValidation() {
  // Найдём все формы с указанным классом в DOM,
  // сделаем из них массив методом Array.from
  const formList = Array.from(document.querySelectorAll('.popup__form'));

  // Переберём полученную коллекцию
  formList.forEach((formElement) => {
    formElement.addEventListener('submit', (evt) => {
      // У каждой формы отменим стандартное поведение
      evt.preventDefault();
    });

    // Для каждой формы вызовем функцию setEventListeners,
    // передав ей элемент формы
    setEventListeners(formElement);
  });
}

/*
// Вызовем функцию
enableValidation(); */
/*
console.log(Array.from(document.forms))
const tt= Array.from(document.querySelectorAll('.popup__input'));
tt.filter(function(element){
  return element.type ='text'
})
*/
































//const formElement = document.querySelector('.popup__form');
//const formInput = formElement.querySelector('.popup__input');
//const formInput =Array.from(formElement.querySelectorAll('.popup__input'));
//const formError = formElement.querySelector(`.${formInput.id}-error`);

//console.log(formInput)



/*const chowInputError = (element) => {
  element.classList.add('popup__input_type_error');
  // Скрываем сообщение об ошибке
  formError.classList.add('popup__input-error_active');
  formError.textContent = '';
};




const hideInputError = (element) => {
  element.classList.remove('popup__input_type_error');
  // Скрываем сообщение об ошибке
  formError.classList.remove('popup__input-error_active');
  formError.textContent = '';
};




function isValid() {
  if (!formInput.validity.valid) {
    // Если поле не проходит валидацию, покажем ошибку
    showInputError(formInput, formInput.validationMessage);
  } else {
    // Если проходит, скроем
    hideInputError(formInput);
  }
}
console.log(formInput.validity)

 
formElement.addEventListener('submit', function (evt) {
  // Отменим стандартное поведение по сабмиту
  evt.preventDefault();
});



 //Вызовем функцию isValid на каждый ввод символа
formInput.addEventListener('input', isValid); */













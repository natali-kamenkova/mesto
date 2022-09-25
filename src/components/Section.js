export class Section {
  constructor( renderer , containerSelector) {
    //this.items = items;
    this.rendererCallback = renderer;
    this.container = document.querySelector(containerSelector);
  }

  // принимает DOM-элемент и добавляет его в контейнер
  addItem(cardNode) {
    this.container.prepend(cardNode);
  }

  //Отрисовка каждого отдельного элемента
  renderer(cardsArray) {
    cardsArray.forEach(element => {
      this.rendererCallback(element)
    });
  }
}
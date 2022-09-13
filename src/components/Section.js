export class Section {
  constructor({ items, renderer }, containerSelector) {
    this.items = items;
    this.rendererCallback = renderer;
    this.container = document.querySelector(containerSelector);
  }

  // принимает DOM-элемент и добавляет его в контейнер
  addItem(cardNode) {
    this.container.prepend(cardNode);
  }

  //Отрисовка каждого отдельного элемента
  renderer() {
    this.items.forEach(element => {
      this.rendererCallback(element)
    });
  }
}
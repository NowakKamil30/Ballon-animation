class ImgAnimation {
  constructor(selector) {
    this.items = document.querySelectorAll(selector);
    this.randomVariables();
  }
  listenCursorMove = e => {
    const { clientX, clientY } = e;
    const centerX = window.innerWidth / 2;
    const centerY = window.innerHeight / 2;

    const positionX = clientX - centerX;
    const positionY = clientY - centerY;
    this.items.forEach(item => this.moveItem(item, positionX, positionY));
  };
  moveItem(item, positionX, positionY) {
    const ratioX = -item.getAttribute("ratioX");
    const ratioY = -item.getAttribute("ratioY");

    item.style.transform = `translate(${positionX * ratioX}px,${positionY *
      ratioY}px)`;
  }

  randomVariables = () => {
    this.items.forEach(item => {
      const ratioX = Math.random().toFixed(2);
      const ratioY = Math.random().toFixed(2);
      item.setAttribute("ratioX", ratioX);
      item.setAttribute("ratioY", ratioY);

      const itemTop = Math.floor(Math.random() * 70) + 10;
      const itemLeft = Math.floor(Math.random() * 70) + 10;

      item.style.top = `${itemTop}%`;
      item.style.left = `${itemLeft}%`;
      item.style.zIndex = Math.random() >= 0.5 ? 1 : 0;
    });
  };
}

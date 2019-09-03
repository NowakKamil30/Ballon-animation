document.addEventListener("DOMContentLoaded", () => {
  const items = document.querySelectorAll(".ballon-animation__image");
  items.forEach(item => {
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
  document.addEventListener("mousemove", e => {
    const { clientX, clientY } = e;
    const centerX = window.innerWidth / 2;
    const centerY = window.innerHeight / 2;

    items.forEach(item => {
      const ratioX = -item.getAttribute("ratioX");
      const ratioY = -item.getAttribute("ratioY");
      const moveX = clientX - centerX;
      const moveY = clientY - centerY;

      item.style.transform = `translate(${moveX * ratioX}px,${moveY *
        ratioY}px)`;
    });
  });
});

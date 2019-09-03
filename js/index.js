document.addEventListener("DOMContentLoaded", () => {
  const imgAnimation = new ImgAnimation(".ballon-animation__image");

  document.addEventListener("mousemove", imgAnimation.listenCursorMove);
});

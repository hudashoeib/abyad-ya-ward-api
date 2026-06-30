const imgs = document.querySelectorAll(".img-select button[data-id]");
const imgBtns = [...imgs];
let imgId = 1;

imgBtns.forEach((imgItem) => {
  imgItem.addEventListener("click", (event) => {
    event.preventDefault();
    if (!(imgItem instanceof HTMLElement)) return;
    imgId = Number(imgItem.dataset.id || 1);
    slideImage();
  });
});

function slideImage() {
  const firstImage = document.querySelector(".img-showcase img:first-child");
  const showcase = document.querySelector(".img-showcase");
  if (
    !(firstImage instanceof HTMLElement) ||
    !(showcase instanceof HTMLElement)
  ) {
    return;
  }

  const displayWidth = firstImage.clientWidth;

  showcase.style.transform = `translateX(${-(imgId - 1) * displayWidth}px)`;
}

window.addEventListener("resize", slideImage);

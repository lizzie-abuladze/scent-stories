const largeData = [
  {
    id: 1,
    imageUrl: "images/slide1.jpg",
    title: "For the woman who knows herself.",
  },
  {
    id: 2,
    imageUrl: "images/slide2.jpg",
    title: "More than perfume—it's a signature.",
  },
  {
    id: 3,
    imageUrl: "images/slide3.jpg",
    title: "Soft. Bold. Unforgettable.",
  },
  {
    id: 4,
    imageUrl: "images/slide4.jpg",
    title: "Timeless elegance, bottled.",
  },
  {
    id: 5,
    imageUrl: "images/slide5.jpg",
    title: "A fragrance that lingers like a memory.",
  },
  {
    id: 6,
    imageUrl: "images/slide6.jpg",
    title: "Coco Chanel: Where scent meets soul.",
  },
];

const smallData = [
  {
    id: 1,
    imageUrl: "images/small-slide1.jpg",
    title: "For the woman who knows herself.",
  },
  {
    id: 2,
    imageUrl: "images/small-slide2.jpg",
    title: "More than perfume—it's a signature.",
  },
  {
    id: 3,
    imageUrl: "images/small-slide3.jpg",
    title: "Soft. Bold. Unforgettable.",
  },
  {
    id: 4,
    imageUrl: "images/small-slide4.jpg",
    title: "Timeless elegance, bottled.",
  },
  {
    id: 5,
    imageUrl: "images/small-slide5.jpg",
    title: "A fragrance that lingers like a memory.",
  },
  {
    id: 6,
    imageUrl: "images/small-slide6.jpg",
    title: "Coco Chanel: Where scent meets soul.",
  },
];

let currentData = window.matchMedia("(max-width: 768px)").matches
  ? smallData
  : largeData;

window.addEventListener("resize", () => {
  const isSmall = window.matchMedia("(max-width: 768px)").matches;
  currentData = isSmall ? smallData : largeData;
  setSlide();
});

const arrowLeft = document.getElementById("arrow-left");
const arrowRight = document.getElementById("arrow-right");
const sliderContent = document.getElementById("slider-content");
let sliderIndex = 0;

function createDiv() {
  const divEl = document.createElement("div");
  return divEl;
}

function createTitle(item) {
  const titleEl = document.createElement("h2");
  titleEl.innerText = item.title;
  titleEl.classList.add("slider-title");
  return titleEl;
}

function createImgTag(item) {
  const bgImage = document.createElement("div");
  bgImage.style.backgroundImage = `url(${item.imageUrl})`;
  bgImage.classList.add("bg-image");
  return bgImage;
}

function setSlide() {
  sliderContent.innerHTML = "";
  const currentSlide = currentData[sliderIndex];
  const divNewSlide = createDiv();
  const imageNewSlide = createImgTag(currentSlide);
  const titleNewSlide = createTitle(currentSlide);

  divNewSlide.appendChild(imageNewSlide);
  divNewSlide.appendChild(titleNewSlide);
  sliderContent.appendChild(divNewSlide);
}

function arrowClickLeft() {
  sliderIndex = sliderIndex === 0 ? currentData.length - 1 : sliderIndex - 1;
  setSlide();
}

function arrowClickRight() {
  sliderIndex = sliderIndex === currentData.length - 1 ? 0 : sliderIndex + 1;
  setSlide();
}

export function initSlider() {
  setSlide();
  arrowLeft.addEventListener("click", arrowClickLeft);
  arrowRight.addEventListener("click", arrowClickRight);
}

'use strict';

const imagesDB = [
    'https://oir.mobi/uploads/posts/2019-12/1576651579_2-3.jpg',

    'https://oir.mobi/uploads/posts/2019-12/thumbs/1576651622_18-26.jpg',

    'https://oir.mobi/uploads/posts/2019-12/1576651649_25-34.jpg',

    'https://img5.goodfon.ru/wallpaper/nbig/a/2b/zvezdy-kosmos-galaktika.jpg'
];

const slider = new Slider(imagesDB);

const img = document.querySelector(".slider-container>.slide>img");
const [prevBtn, nextBtn] = document.querySelectorAll(
  ".slider-container button"
);

function updateViewSlider() {
  img.setAttribute("src", slider.currentSlide);
}
updateViewSlider();

// function createSlideBtnHandler(dirrection = "next") {
//   slider.currentIndex =
//     slider[dirrection === "next" ? "nextIndex" : "prevIndex"];
//   updateViewSlider();
// }

// prevBtn.addEventListener("click", () => createSlideBtnHandler("prev"));
// nextBtn.addEventListener("click", () => createSlideBtnHandler("next"));

// function createSlideBtnHandler(dirrection = "next") {
//   //colback function - відпрацює після натискання на клік
//   return () => {
//     slider.currentIndex =
//       slider[dirrection === "next" ? "nextIndex" : "prevIndex"];
//     updateViewSlider();
//   };
// }
const createSlideBtnHandler =
  (dirrection = "next") =>
  () => {
    slider.currentIndex =
      slider[dirrection === "next" ? "nextIndex" : "prevIndex"];
    updateViewSlider();
  };

prevBtn.addEventListener("click", createSlideBtnHandler("prev"));
nextBtn.addEventListener("click", createSlideBtnHandler("next"));

// const slider = new Slider(imagesDB);

// const img = document.querySelector(".slider-container>.slide>img");
// const[prevBtn, nextBtn] = document.querySelectorAll(".slider-container button");

// function updateViewSlider(){
//     img.setAttribute("src", slider.currentSlide)
// }
// updateViewSlider();

// const createSlideBtnHandler =
//   (dirrection = "next") =>
//   () => {
//     slider.currentIndex =
//       slider[dirrection === "next" ? "nextIndex" : "prevIndex"];
//     updateViewSlider();
//   };

// prevBtn.addEventListener("click", createSlideBtnHandler("prev"));
  
// nextBtn.addEventListener("click",createSlideBtnHandler ("next"));






const btns = document.querySelectorAll(".wrapper button");

const btnHandler = ({target:{parentElement, dataset:{color}} }) =>{
  parentElement.nextElementSibling.style.color=color;
  parentElement.nextElementSibling.style.display = 'flex';
}

for(const btn of btns){
  btn.addEventListener("click", btnHandler);
}

'use strict';

const RIGHT_ARROW = 37;
const LEFT_ARROW = 39;

const mouseClickArrows = `<style>
   .arrows__wrap {
     position: absolute;
     top: 95px;
     left: 50%;
     margin-left: -56px;
   }
   .arrows__btn {
     background: none;
     border: 2px solid black;
     padding: 5px 20px;
     cursor: pointer;
   }
 </style>
 <button class="arrows__btn"><-</button>
 <button class="arrows__btn">-></button>`;

const mainElement = document.querySelector(`#main`);

const selectSlide = (element) => {
  mainElement.innerHTML = ``;
  mainElement.appendChild(element.cloneNode(true));
};

const screens = Array.from(document.querySelectorAll(`template`)).
map((it) => it.content);

let current = 0;
const select = (index) => {
  index = index < 0 ? screens.length - 1 : index;
  index = index >= screens.length ? 0 : index;
  current = index;
  selectSlide(screens[current]);
};

document.addEventListener(`keydown`, (evt) => {
  switch (evt.keyCode) {
    case RIGHT_ARROW:
      select(current + 1);
      break;
    case LEFT_ARROW:
      select(current - 1);
      break;
  }
});

select(0);

const divElement = document.createElement("div");
divElement.classList.add(`arrows__wrap`);
divElement.innerHTML = mouseClickArrows;

document.body.appendChild(divElement);

const arrowClickLeft = divElement.children[1];
const arrowClickRight = divElement.children[2];

arrowClickLeft.addEventListener("click", () => select(current - 1), false);
arrowClickRight.addEventListener("click", () => select(current + 1), false);


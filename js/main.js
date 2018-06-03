//point11
const templatesId = ['greeting', 'rules', 'game-1', 'game-2', 'game-3', 'stats'];

//point2
const main = document.querySelector('main');

//point3
let screenCount = 0;

const loadTemplate = (templatesId) => {
  const selector = 'template#' + templatesId;
  const currentNode = document.querySelector(selector).content.cloneNode(true);

  main.innerHTML = '';
  main.appendChild(currentNode);
};

//point4
loadTemplate(templatesId[screenCount]);

//point5
const previusScreen = () => {
  if (screenCount > 0) {
    loadTemplate(templatesId[--screenCount]);
  }
};

const nextScreen = () => {
  if (screenCount < templatesId.length -1 ) {
    loadTemplate(templatesId[++screenCount]);
  }
};

const uniKeyCode = (event) => {
  const key = event.keyCode;

  if (key == 37) previusScreen();
  if (key == 39) nextScreen();
};

//pont6
const divElement = document.createElement("div");

divElement.setAttribute("class", "arrows__wrap");

const styleElement = document.createElement("style");

styleElement.innerHTML = ".arrows__wrap {position: absolute;top: 95px;left: 50%;margin-left: -56px;}" +
  ".arrows__btn {background: none;border: 2px solid black;padding: 5px 20px;}";

const createButton = (innerValue, value) => {
  const buttonElement = document.createElement("button");
  buttonElement.setAttribute("class", "arrows__btn");
  buttonElement.setAttribute("onclick", value);
  buttonElement.innerHTML = innerValue;

  return buttonElement;
}

divElement.appendChild(styleElement);
divElement.appendChild(createButton("<-","previusScreen()"));
divElement.appendChild(createButton("->","nextScreen()"));
document.body.appendChild(divElement);

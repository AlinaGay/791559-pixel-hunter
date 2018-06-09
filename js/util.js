// Util.js

const getElementFromTemplate = (template) => {
  const container = document.createElement(`div`);
  container.innerHTML = template;

  return container;
};

const changeScreen = (element) => {
  const mainElement = document.querySelector(`main.central`);
  mainElement.innerHTML = ``;
  mainElement.appendChild(element);
};

export {getElementFromTemplate};
export {changeScreen};

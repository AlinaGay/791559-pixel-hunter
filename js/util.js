// Util.js

export const getElementFromTemplate = (template) => {
  const container = document.createElement(`div`);
  container.innerHTML = template;

return container;
};

const mainElement = document.querySelector(`main.central`);

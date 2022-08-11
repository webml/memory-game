const app = document.querySelector(".app");

window.application = {
  blocks: {},
  screens: {},
  renderScreen: function (screenName) {
    if (window.application.screens[screenName] === undefined) {
      return;
    }

    app.textContent = "";

    window.application.screens[screenName]();
  },
  renderBlock: function (blockName, container, content, className) {
    if (window.application.blocks[blockName] === undefined) {
      console.log("Такой блок не существует");
    }

    window.application.blocks[blockName](container, content, className);
  },
  time: null,

  level: null,

  gameStatus: null,

  gameCards: [],

  choiceCards: [],
};

window.addEventListener("load", (event) => {
  window.application.renderScreen("select-level");
});
/*global app*/

const renderSelectLevelScreen = () => {
    const levelPopup = document.createElement("div");
    levelPopup.classList.add("level-popup");

    window.application.renderBlock(
        "header",
        levelPopup,
        "Выбери сложность",
        "level-popup__header"
    );

    window.application.renderBlock("select-level", levelPopup);

    window.application.renderBlock(
        "active-btn",
        levelPopup,
        "Старт",
        "level-popup__start-btn"
    );

    app.appendChild(levelPopup);
};

window.application.screens["select-level"] = renderSelectLevelScreen;

const renderGameScreen = () => {
    const gameScreen = document.createElement("div");
    gameScreen.classList.add("game-screen");

    window.application.renderBlock("game-bar", gameScreen);

    window.application.renderBlock("cards", gameScreen);

    app.appendChild(gameScreen);
};

window.application.screens["game"] = renderGameScreen;

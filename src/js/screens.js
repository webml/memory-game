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

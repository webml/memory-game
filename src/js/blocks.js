/*global app*/

const renderHeaderBlock = (container, content, className) => {
    const header = document.createElement("h1");
    header.classList.add(className);
    header.textContent = `${content}`;

    container.appendChild(header);
};

window.application.blocks["header"] = renderHeaderBlock;

const renderSelectLevelBlock = (container) => {
    const selectLevel = document.createElement("div");
    selectLevel.classList.add("level-popup__select-level");

    window.application.renderBlock("select-btn", selectLevel, 1);
    window.application.renderBlock("select-btn", selectLevel, 2);
    window.application.renderBlock("select-btn", selectLevel, 3);

    container.appendChild(selectLevel);
};

window.application.blocks["select-level"] = renderSelectLevelBlock;

const renderSelectBtnBlock = (container, content) => {
    const selectBtn = document.createElement("button");
    selectBtn.classList.add("level-popup__select-btn");
    selectBtn.textContent = content;

    selectBtn.addEventListener("click", () => {
        window.application.level = content;

        const selectButtons = container.getElementsByClassName(
            "level-popup__select-btn"
        );

        for (let element of selectButtons) {
            element.classList.remove("level-popup__select-btn_active");
        }

        selectBtn.classList.add("level-popup__select-btn_active");
    });

    container.appendChild(selectBtn);
};

window.application.blocks["select-btn"] = renderSelectBtnBlock;

const renderActiveBtnBlock = (container, content, className) => {
    const activeBtn = document.createElement("button");
    activeBtn.classList.add(className);
    activeBtn.textContent = content;

    activeBtn.addEventListener("click", () => {
        if (content === "Старт") {
            switch (window.application.level) {
                case null: {
                    const error = document.createElement("div");
                    app.appendChild(error);
                    error.textContent = "Сложность не выбрана";
                    error.classList.add("error");
                    setTimeout(() => {
                        app.removeChild(error);
                    }, 1500);

                    break;
                }
                case 1: {
                    console.log("level 1");
                    window.application.level = 6;
                    window.application.renderScreen("game");
                    break;
                }
                case 2: {
                    console.log("level 2");
                    window.application.level = 12;
                    window.application.renderScreen("game");
                    break;
                }
                case 3: {
                    console.log("level 3");
                    window.application.level = 18;
                    window.application.renderScreen("game");
                    break;
                }
            }
        }
    });

    container.appendChild(activeBtn);
};

window.application.blocks["active-btn"] = renderActiveBtnBlock;

const renderGameBarBlock = (container) => {
    const gameBar = document.createElement("div");
    gameBar.classList.add("game-bar");

    window.application.renderBlock("timer", gameBar);

    window.application.renderBlock(
        "active-btn",
        gameBar,
        "Начать заново",
        "game-bar__restart-btn"
    );

    container.appendChild(gameBar);
};

window.application.blocks["game-bar"] = renderGameBarBlock;

const renderTimerBlock = (container) => {
    const timer = document.createElement("div");
    timer.classList.add("game-bar__timer");

    const timerDesc = document.createElement("div");
    timerDesc.classList.add("game-bar__timer-description");
    timer.appendChild(timerDesc);

    const min = document.createElement("p");
    min.textContent = "min";
    timerDesc.appendChild(min);

    const sec = document.createElement("p");
    sec.textContent = "sec";
    timerDesc.appendChild(sec);

    const time = document.createElement("p");
    time.classList.add("game-bar__timer-time");
    time.textContent = window.application.time;
    timer.appendChild(time);
    container.appendChild(timer);
};

window.application.blocks["timer"] = renderTimerBlock;

const renderCardsBlock = (container) => {
    const cards = document.createElement("div");
    cards.classList.add("cards");

    let cardsId = 0;

    do {
        window.application.renderBlock("card", cards, cardsId);
        cardsId++;
    } while (cardsId !== window.application.level);

    container.appendChild(cards);
};

window.application.blocks["cards"] = renderCardsBlock;

const renderCardBlock = (container, content) => {
    const card = document.createElement("img");
    card.src = "./src/img/card_back.png";
    card.classList.add("card");
    card.id = content;

    container.appendChild(card);
};

window.application.blocks["card"] = renderCardBlock;

import { app } from "./app";

const allCards = [
    "static/cards/sa.png",
    "static/cards/sk.png",
    "static/cards/sq.png",
    "static/cards/sj.png",
    "static/cards/s10.png",
    "static/cards/s9.png",
    "static/cards/s8.png",
    "static/cards/s7.png",
    "static/cards/s6.png",
    "static/cards/ha.png",
    "static/cards/hk.png",
    "static/cards/hq.png",
    "static/cards/hj.png",
    "static/cards/h10.png",
    "static/cards/h9.png",
    "static/cards/h8.png",
    "static/cards/h7.png",
    "static/cards/h6.png",
    "static/cards/da.png",
    "static/cards/dk.png",
    "static/cards/dq.png",
    "static/cards/dj.png",
    "static/cards/d10.png",
    "static/cards/d9.png",
    "static/cards/d8.png",
    "static/cards/d7.png",
    "static/cards/d6.png",
    "static/cards/ca.png",
    "static/cards/ck.png",
    "static/cards/cq.png",
    "static/cards/cj.png",
    "static/cards/c10.png",
    "static/cards/c9.png",
    "static/cards/c8.png",
    "static/cards/c7.png",
    "static/cards/c6.png",
];

export const renderHeaderBlock = (container, content, className) => {
    const header = document.createElement("h1");
    header.classList.add(className);
    header.textContent = content;

    container.appendChild(header);
};

window.application.blocks["header"] = renderHeaderBlock;

export const renderSelectLevelBlock = (container) => {
    const selectLevel = document.createElement("div");
    selectLevel.classList.add("level-popup__select-level");

    window.application.renderBlock("select-btn", selectLevel, 1);
    window.application.renderBlock("select-btn", selectLevel, 2);
    window.application.renderBlock("select-btn", selectLevel, 3);

    container.appendChild(selectLevel);
};

window.application.blocks["select-level"] = renderSelectLevelBlock;

export const renderSelectBtnBlock = (container, content) => {
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

export const renderActiveBtnBlock = (container, content, className) => {
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

export const renderGameBarBlock = (container) => {
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

export const renderTimerBlock = (container) => {
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

export const renderCardsBlock = (container) => {
    const cards = document.createElement("div");
    cards.classList.add("cards");

    let cardsId = 0;
    let cardsFront;

    const getRandCard = () => {
        let rand = Math.floor(Math.random() * allCards.length);
        window.application.gameCards.push(allCards[rand]);
        window.application.gameCards.push(allCards[rand]);
    };

    while (window.application.gameCards.length !== window.application.level) {
        getRandCard();
    }

    window.application.gameCards = window.application.gameCards.sort(
        () => Math.random() - 0.5
    );

    while (cardsId !== window.application.level) {
        cardsFront = window.application.gameCards[cardsId];
        window.application.renderBlock("card", cards, cardsId, cardsFront);
        cardsId++;
    }

    cards.addEventListener("click", (card) => {
        if (card.target.id === "") {
            return;
        }

        card.target.src = window.application.gameCards[card.target.id];

        switch (window.application.choiceCards) {
            case null:
                window.application.choiceCards = card.target.src;
                break;

            case card.target.src:
                alert("You win!");
                window.application.choiceCards = null;
                break;

            default:
                alert("You lose!");
                break;
        }
    });

    container.appendChild(cards);
};

window.application.blocks["cards"] = renderCardsBlock;

export const renderCardBlock = (container, cardsId, cardsFront) => {
    const card = document.createElement("img");
    card.src = cardsFront;
    card.classList.add("card");
    card.id = cardsId;

    container.appendChild(card);
};

window.application.blocks["card"] = renderCardBlock;

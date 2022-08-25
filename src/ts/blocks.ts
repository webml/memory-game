import { app } from "./app";

const allCards: string[] = [
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

export const renderHeaderBlock: renderFunction = (
    container,
    content,
    className
) => {
    const header = document.createElement("h1");

    if (className != undefined) {
        header.classList.add(className);
    }

    if (typeof content === "string") {
        header.textContent = content;
    }

    container.appendChild(header);
};

window.application.blocks["header"] = renderHeaderBlock;

export const renderSelectLevelBlock: renderFunction = (container) => {
    const selectLevel = document.createElement("div");
    selectLevel.classList.add("level-popup__select-level");

    window.application.renderBlock("select-btn", selectLevel, 1, undefined, 6);
    window.application.renderBlock("select-btn", selectLevel, 2, undefined, 12);
    window.application.renderBlock("select-btn", selectLevel, 3, undefined, 18);

    container.appendChild(selectLevel);
};

window.application.blocks["select-level"] = renderSelectLevelBlock;

export const renderSelectBtnBlock: renderFunction = (
    container,
    content,
    className = "level-popup__select-btn",
    numberOfCards
) => {
    const selectBtn = document.createElement("button");
    selectBtn.classList.add(className);

    selectBtn.textContent = String(content);

    selectBtn.addEventListener("click", () => {
        if (numberOfCards != undefined) {
            window.application.level = numberOfCards;
        }

        Array.from(
            container.getElementsByClassName("level-popup__select-btn")
        ).forEach((element) =>
            element.classList.remove("level-popup__select-btn_active")
        );

        selectBtn.classList.add("level-popup__select-btn_active");
    });

    container.appendChild(selectBtn);
};

window.application.blocks["select-btn"] = renderSelectBtnBlock;

export const renderActiveBtnBlock: renderFunction = (
    container,
    content,
    className
) => {
    const activeBtn = document.createElement("button");

    if (className != undefined) {
        activeBtn.classList.add(className);
    }

    if (typeof content === "string") {
        activeBtn.textContent = content;
    }

    activeBtn.addEventListener("click", () => {
        if (content === "Старт" && app != null) {
            window.application.level === null
                ? error(app)
                : window.application.renderScreen("game");
        } else {
            window.application.renderScreen("select-level");
        }
    });

    container.appendChild(activeBtn);
};

window.application.blocks["active-btn"] = renderActiveBtnBlock;

export const error: renderFunction = (container) => {
    const error = document.createElement("div");

    container.appendChild(error);
    error.textContent = "Сложность не выбрана";
    error.classList.add("error");
    setTimeout(() => {
        container.removeChild(error);
    }, 1500);
};

export const renderGameBarBlock: renderFunction = (container) => {
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

export const renderTimerBlock: renderFunction = (container) => {
    const timer = document.createElement("div");
    timer.classList.add("game-bar__timer");

    const timerDesc = document.createElement("div");
    timerDesc.classList.add("game-bar__timer-description");
    timer.appendChild(timerDesc);

    const minDesc = document.createElement("p");
    minDesc.textContent = "min";
    timerDesc.appendChild(minDesc);

    const secDesc = document.createElement("p");
    secDesc.textContent = "sec";
    timerDesc.appendChild(secDesc);

    const time = document.createElement("p");
    time.classList.add("game-bar__timer-time");
    time.textContent = window.application.time;
    timer.appendChild(time);
    container.appendChild(timer);

    let sec = 0;
    let min = 0;

    const tick = () => {
        sec++;
        if (sec >= 60) {
            sec = 0;
            min++;
        }
    };

    window.application.time = "00.00";

    const add = () => {
        tick();
        window.application.time =
            (min > 9 ? min : "0" + min) + "." + (sec > 9 ? sec : "0" + sec);
        stopwatch();
    };

    const stopwatch = () => {
        const timer = setTimeout(add, 1000);
        time.textContent = window.application.time;
        window.application.timers.push(timer);
    };

    setTimeout(() => {
        stopwatch();
    }, 5000);
};

window.application.blocks["timer"] = renderTimerBlock;

export const renderCurrentTimeBlock: renderFunction = (
    container,
    className
) => {
    const currentTime = document.createElement("div");
    currentTime.classList.add(`${className}__current-time`);

    const message = document.createElement("p");
    message.textContent = "Затраченное время:";
    message.classList.add(`${className}__time-description`);
    currentTime.appendChild(message);

    const time = document.createElement("p");
    time.textContent = window.application.time;
    time.classList.add(`${className}__time`);
    currentTime.appendChild(time);

    container.appendChild(currentTime);
};

window.application.blocks["current-time"] = renderCurrentTimeBlock;

export const renderCardsBlock: renderFunction = (container) => {
    const cards = document.createElement("div");
    cards.classList.add("cards");

    window.application.gameCards = [];

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
        window.application.renderBlock(
            "card",
            cards,
            undefined,
            undefined,
            undefined,
            cardsId,
            cardsFront
        );
        cardsId++;
    }

    setTimeout(() => {
        cards.addEventListener("click", (e: Event) => {
            const card = e.target as HTMLImageElement;

            if (card.id === "") {
                return;
            }

            if (window.application.choiceCards.id === Number(card.id)) {
                return;
            }

            card.src = window.application.gameCards[Number(card.id)];

            if (window.application.choiceCards.id === null) {
                window.application.choiceCards.id = Number(card.id);
                window.application.choiceCards.src = card.src;
                return;
            }

            if (window.application.choiceCards.src === card.src) {
                window.application.choiceCards.id = null;
                window.application.choiceCards.src = null;
                checkWin();
            } else {
                window.application.choiceCards.id = null;
                window.application.choiceCards.src = null;
                window.application.renderScreen("lose");
            }
        });
    }, 5000);

    container.appendChild(cards);
};

window.application.blocks["cards"] = renderCardsBlock;

export const checkWin = () => {
    let result = true;

    Array.from(document.getElementsByClassName("card")).forEach((card) => {
        if (card.attributes[0].value === "static/card_back.png") {
            result = false;
        }
    });

    if (result === true) {
        window.application.renderScreen("win");
    }
};

export const renderCardBlock: renderFunction = (
    container,
    content,
    className = "card",
    numberOfCards,
    cardsId,
    cardsFront
) => {
    const card = document.createElement("img");

    if (cardsFront != undefined) {
        card.src = cardsFront;
    }

    card.classList.add(className);

    if (cardsId != undefined) {
        card.id = String(cardsId);
    }

    container.appendChild(card);
};

window.application.blocks["card"] = renderCardBlock;

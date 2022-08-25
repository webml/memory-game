/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./src/css/style.css":
/*!***************************!*\
  !*** ./src/css/style.css ***!
  \***************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
// extracted by mini-css-extract-plugin


/***/ }),

/***/ "./src/ts/app.ts":
/*!***********************!*\
  !*** ./src/ts/app.ts ***!
  \***********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "app": () => (/* binding */ app)
/* harmony export */ });
var app = document.querySelector(".app");
window.application = window.application || {
    blocks: {},
    screens: {},
    renderScreen: function (screenName) {
        for (var _i = 0, _a = window.application.timers; _i < _a.length; _i++) {
            var timer = _a[_i];
            clearTimeout(timer);
        }
        window.application.timers = [];
        if (window.application.screens[screenName] === undefined) {
            return;
        }
        if (app != null) {
            app.textContent = "";
        }
        window.application.screens[screenName]();
    },
    renderBlock: function (blockName, container, content, className, numberOfCards, cardsId, cardsFront) {
        if (!window.application.blocks[blockName]) {
            console.log("Такой блок не существует");
        }
        window.application.blocks[blockName](container, content, className, numberOfCards, cardsId, cardsFront);
    },
    time: "00.00",
    timers: [],
    level: null,
    gameCards: [],
    choiceCards: {
        id: null,
        src: null,
    },
};
window.addEventListener("load", function () {
    window.application.renderScreen("select-level");
});


/***/ }),

/***/ "./src/ts/blocks.ts":
/*!**************************!*\
  !*** ./src/ts/blocks.ts ***!
  \**************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "checkWin": () => (/* binding */ checkWin),
/* harmony export */   "error": () => (/* binding */ error),
/* harmony export */   "renderActiveBtnBlock": () => (/* binding */ renderActiveBtnBlock),
/* harmony export */   "renderCardBlock": () => (/* binding */ renderCardBlock),
/* harmony export */   "renderCardsBlock": () => (/* binding */ renderCardsBlock),
/* harmony export */   "renderCurrentTimeBlock": () => (/* binding */ renderCurrentTimeBlock),
/* harmony export */   "renderGameBarBlock": () => (/* binding */ renderGameBarBlock),
/* harmony export */   "renderHeaderBlock": () => (/* binding */ renderHeaderBlock),
/* harmony export */   "renderSelectBtnBlock": () => (/* binding */ renderSelectBtnBlock),
/* harmony export */   "renderSelectLevelBlock": () => (/* binding */ renderSelectLevelBlock),
/* harmony export */   "renderTimerBlock": () => (/* binding */ renderTimerBlock)
/* harmony export */ });
/* harmony import */ var _app__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./app */ "./src/ts/app.ts");

var allCards = [
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
var renderHeaderBlock = function (container, content, className) {
    var header = document.createElement("h1");
    if (className) {
        header.classList.add(className);
    }
    if (typeof content === "string") {
        header.textContent = content;
    }
    container.appendChild(header);
};
window.application.blocks["header"] = renderHeaderBlock;
var renderSelectLevelBlock = function (container) {
    var selectLevel = document.createElement("div");
    selectLevel.classList.add("level-popup__select-level");
    window.application.renderBlock("select-btn", selectLevel, 1, undefined, 6);
    window.application.renderBlock("select-btn", selectLevel, 2, undefined, 12);
    window.application.renderBlock("select-btn", selectLevel, 3, undefined, 18);
    container.appendChild(selectLevel);
};
window.application.blocks["select-level"] = renderSelectLevelBlock;
var renderSelectBtnBlock = function (container, content, className, numberOfCards) {
    if (className === void 0) { className = "level-popup__select-btn"; }
    var selectBtn = document.createElement("button");
    selectBtn.classList.add(className);
    selectBtn.textContent = String(content);
    selectBtn.addEventListener("click", function () {
        if (numberOfCards) {
            window.application.level = numberOfCards;
        }
        var selectButtons = Array.from(container.getElementsByClassName("level-popup__select-btn"));
        selectButtons.forEach(function (element) {
            return element.classList.remove("level-popup__select-btn_active");
        });
        selectBtn.classList.add("level-popup__select-btn_active");
    });
    container.appendChild(selectBtn);
};
window.application.blocks["select-btn"] = renderSelectBtnBlock;
var renderActiveBtnBlock = function (container, content, className) {
    var activeBtn = document.createElement("button");
    if (className) {
        activeBtn.classList.add(className);
    }
    if (typeof content === "string") {
        activeBtn.textContent = content;
    }
    activeBtn.addEventListener("click", function () {
        if (content === "Старт" && _app__WEBPACK_IMPORTED_MODULE_0__.app != null) {
            window.application.level === null
                ? error(_app__WEBPACK_IMPORTED_MODULE_0__.app)
                : window.application.renderScreen("game");
        }
        else {
            window.application.renderScreen("select-level");
        }
    });
    container.appendChild(activeBtn);
};
window.application.blocks["active-btn"] = renderActiveBtnBlock;
var error = function (container) {
    var error = document.createElement("div");
    container.appendChild(error);
    error.textContent = "Сложность не выбрана";
    error.classList.add("error");
    setTimeout(function () {
        container.removeChild(error);
    }, 1500);
};
var renderGameBarBlock = function (container) {
    var gameBar = document.createElement("div");
    gameBar.classList.add("game-bar");
    window.application.renderBlock("timer", gameBar);
    window.application.renderBlock("active-btn", gameBar, "Начать заново", "game-bar__restart-btn");
    container.appendChild(gameBar);
};
window.application.blocks["game-bar"] = renderGameBarBlock;
var renderTimerBlock = function (container) {
    var timer = document.createElement("div");
    timer.classList.add("game-bar__timer");
    var timerDesc = document.createElement("div");
    timerDesc.classList.add("game-bar__timer-description");
    timer.appendChild(timerDesc);
    var minDesc = document.createElement("p");
    minDesc.textContent = "min";
    timerDesc.appendChild(minDesc);
    var secDesc = document.createElement("p");
    secDesc.textContent = "sec";
    timerDesc.appendChild(secDesc);
    var time = document.createElement("p");
    time.classList.add("game-bar__timer-time");
    time.textContent = window.application.time;
    timer.appendChild(time);
    container.appendChild(timer);
    var sec = 0;
    var min = 0;
    var tick = function () {
        sec++;
        if (sec >= 60) {
            sec = 0;
            min++;
        }
    };
    window.application.time = "00.00";
    var add = function () {
        tick();
        window.application.time =
            (min > 9 ? min : "0" + min) + "." + (sec > 9 ? sec : "0" + sec);
        stopwatch();
    };
    var stopwatch = function () {
        var timer = setTimeout(add, 1000);
        time.textContent = window.application.time;
        window.application.timers.push(timer);
    };
    setTimeout(function () {
        stopwatch();
    }, 5000);
};
window.application.blocks["timer"] = renderTimerBlock;
var renderCurrentTimeBlock = function (container, className) {
    var currentTime = document.createElement("div");
    currentTime.classList.add("".concat(className, "__current-time"));
    var message = document.createElement("p");
    message.textContent = "Затраченное время:";
    message.classList.add("".concat(className, "__time-description"));
    currentTime.appendChild(message);
    var time = document.createElement("p");
    time.textContent = window.application.time;
    time.classList.add("".concat(className, "__time"));
    currentTime.appendChild(time);
    container.appendChild(currentTime);
};
window.application.blocks["current-time"] = renderCurrentTimeBlock;
var renderCardsBlock = function (container) {
    var cards = document.createElement("div");
    cards.classList.add("cards");
    window.application.gameCards = [];
    var cardsId = 0;
    var cardsFront;
    var getRandCard = function () {
        var rand = Math.floor(Math.random() * allCards.length);
        window.application.gameCards.push(allCards[rand]);
        window.application.gameCards.push(allCards[rand]);
    };
    while (window.application.gameCards.length !== window.application.level) {
        getRandCard();
    }
    window.application.gameCards = window.application.gameCards.sort(function () { return Math.random() - 0.5; });
    while (cardsId !== window.application.level) {
        cardsFront = window.application.gameCards[cardsId];
        window.application.renderBlock("card", cards, undefined, undefined, undefined, cardsId, cardsFront);
        cardsId++;
    }
    setTimeout(function () {
        cards.addEventListener("click", function (e) {
            var card = e.target;
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
            }
            else {
                window.application.choiceCards.id = null;
                window.application.choiceCards.src = null;
                window.application.renderScreen("lose");
            }
        });
    }, 5000);
    container.appendChild(cards);
};
window.application.blocks["cards"] = renderCardsBlock;
var checkWin = function () {
    var result = true;
    var cards = Array.from(document.getElementsByClassName("card"));
    cards.forEach(function (card) {
        if (card.attributes[0].value === "static/card_back.png") {
            result = false;
        }
    });
    if (result === true) {
        window.application.renderScreen("win");
    }
};
var renderCardBlock = function (container, content, className, numberOfCards, cardsId, cardsFront) {
    if (className === void 0) { className = "card"; }
    var card = document.createElement("img");
    if (cardsFront) {
        card.src = cardsFront;
    }
    card.classList.add(className);
    if (cardsId != undefined) {
        card.id = String(cardsId);
    }
    container.appendChild(card);
};
window.application.blocks["card"] = renderCardBlock;


/***/ }),

/***/ "./src/ts/screens.ts":
/*!***************************!*\
  !*** ./src/ts/screens.ts ***!
  \***************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "renderGameScreen": () => (/* binding */ renderGameScreen),
/* harmony export */   "renderLoseScreen": () => (/* binding */ renderLoseScreen),
/* harmony export */   "renderSelectLevelScreen": () => (/* binding */ renderSelectLevelScreen),
/* harmony export */   "renderWinScreen": () => (/* binding */ renderWinScreen)
/* harmony export */ });
/* harmony import */ var _app__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./app */ "./src/ts/app.ts");

var renderSelectLevelScreen = function () {
    var levelPopup = document.createElement("div");
    levelPopup.classList.add("level-popup");
    window.application.renderBlock("header", levelPopup, "Выбери сложность", "level-popup__header");
    window.application.renderBlock("select-level", levelPopup);
    window.application.renderBlock("active-btn", levelPopup, "Старт", "level-popup__start-btn");
    if (_app__WEBPACK_IMPORTED_MODULE_0__.app != null) {
        _app__WEBPACK_IMPORTED_MODULE_0__.app.appendChild(levelPopup);
    }
};
window.application.screens["select-level"] = renderSelectLevelScreen;
var renderGameScreen = function () {
    var gameScreen = document.createElement("div");
    gameScreen.classList.add("game-screen");
    window.application.time = "00.00";
    window.application.renderBlock("game-bar", gameScreen);
    window.application.renderBlock("cards", gameScreen);
    setTimeout(function () {
        Array.from(document.getElementsByClassName("card")).forEach(function (card) {
            card.attributes[0].value = "static/card_back.png";
        });
    }, 5000);
    if (_app__WEBPACK_IMPORTED_MODULE_0__.app != null) {
        _app__WEBPACK_IMPORTED_MODULE_0__.app.appendChild(gameScreen);
    }
};
window.application.screens["game"] = renderGameScreen;
var renderWinScreen = function () {
    var winPopup = document.createElement("div");
    winPopup.classList.add("win-popup");
    var imgWin = document.createElement("img");
    imgWin.src = "static/celebration.png";
    imgWin.classList.add("win-popup__img");
    winPopup.appendChild(imgWin);
    window.application.renderBlock("header", winPopup, "Вы выиграли!", "win-popup__header");
    window.application.renderBlock("current-time", winPopup, "win-popup");
    window.application.renderBlock("active-btn", winPopup, "Играть снова", "win-popup__restart-btn");
    if (_app__WEBPACK_IMPORTED_MODULE_0__.app != null) {
        _app__WEBPACK_IMPORTED_MODULE_0__.app.appendChild(winPopup);
    }
};
window.application.screens["win"] = renderWinScreen;
var renderLoseScreen = function () {
    var losePopup = document.createElement("div");
    losePopup.classList.add("lose-popup");
    var imgLose = document.createElement("img");
    imgLose.src = "static/dead.png";
    imgLose.classList.add("lose-popup__img");
    losePopup.appendChild(imgLose);
    window.application.renderBlock("header", losePopup, "Вы проиграли!", "lose-popup__header");
    window.application.renderBlock("current-time", losePopup, "lose-popup");
    window.application.renderBlock("active-btn", losePopup, "Играть снова", "lose-popup__restart-btn");
    if (_app__WEBPACK_IMPORTED_MODULE_0__.app != null) {
        _app__WEBPACK_IMPORTED_MODULE_0__.app.appendChild(losePopup);
    }
};
window.application.screens["lose"] = renderLoseScreen;


/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		var cachedModule = __webpack_module_cache__[moduleId];
/******/ 		if (cachedModule !== undefined) {
/******/ 			return cachedModule.exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			// no module.id needed
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId](module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/define property getters */
/******/ 	(() => {
/******/ 		// define getter functions for harmony exports
/******/ 		__webpack_require__.d = (exports, definition) => {
/******/ 			for(var key in definition) {
/******/ 				if(__webpack_require__.o(definition, key) && !__webpack_require__.o(exports, key)) {
/******/ 					Object.defineProperty(exports, key, { enumerable: true, get: definition[key] });
/******/ 				}
/******/ 			}
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/hasOwnProperty shorthand */
/******/ 	(() => {
/******/ 		__webpack_require__.o = (obj, prop) => (Object.prototype.hasOwnProperty.call(obj, prop))
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/make namespace object */
/******/ 	(() => {
/******/ 		// define __esModule on exports
/******/ 		__webpack_require__.r = (exports) => {
/******/ 			if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 				Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 			}
/******/ 			Object.defineProperty(exports, '__esModule', { value: true });
/******/ 		};
/******/ 	})();
/******/ 	
/************************************************************************/
var __webpack_exports__ = {};
// This entry need to be wrapped in an IIFE because it need to be isolated against other modules in the chunk.
(() => {
/*!*************************!*\
  !*** ./src/ts/index.ts ***!
  \*************************/
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _app__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./app */ "./src/ts/app.ts");
/* harmony import */ var _blocks__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./blocks */ "./src/ts/blocks.ts");
/* harmony import */ var _screens__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./screens */ "./src/ts/screens.ts");
/* harmony import */ var _css_style_css__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../css/style.css */ "./src/css/style.css");





})();

/******/ })()
;
//# sourceMappingURL=bundle.js.map
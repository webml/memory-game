const renderHeaderBlock = (container, content, className) => {
  const header = document.createElement("h1");
  header.classList.add(`${className}`);
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
  selectBtn.textContent = `${content}`;

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
  activeBtn.classList.add(`${className}`);
  activeBtn.textContent = `${content}`;

  activeBtn.addEventListener("click", () => {
    if (content === "Старт") {
      if (window.application.level === null) {
        const error = document.createElement("div");
        app.appendChild(error);
        error.textContent = "Сложность не выбрана";
        error.classList.add("error");
        setTimeout(() => {
          app.removeChild(error);
        }, 1500);

        return;
      }

      if (window.application.level === 1) {
        console.log("level 1");
      }

      if (window.application.level === 2) {
        console.log("level 2");
      }

      if (window.application.level === 3) {
        console.log("level 3");
      }
    }
  });

  container.appendChild(activeBtn);
};

window.application.blocks["active-btn"] = renderActiveBtnBlock;

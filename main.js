// finding element
const selectFontSize = document.getElementById("selectFontSize");
const selectBgColor = document.getElementById("selectBgColor");
const resetButton = document.getElementById("resetButton");
const mainElement = document.querySelector("main");


// function define
const setvalues = (fontSize, bgColor) => {
    selectFontSize.value = fontSize;
    selectBgColor.value = bgColor;
    mainElement.style.fontSize = fontSize;
    mainElement.style.backgroundColor = bgColor;
}


// load LocalStorage Value
const initialSetup = () => {
    const bgColor = localStorage.getItem("bgColor");
    const fontSize = localStorage.getItem("fontSize");

    if (bgColor && fontSize) {
        setvalues(fontSize, bgColor);
    }
    if (!bgColor && !fontSize) {
        setvalues("16px", "aqua");
    }
    if (!bgColor && fontSize) {
        setvalues(fontSize, "aqua");
    }
    if (bgColor && !fontSize) {
        setvalues("16px", bgColor);
    }
};



// changeFontSize
const changeFontSize = (event) => {
    const selectedFontSize = event.target.value;
    mainElement.style.fontSize = selectedFontSize;
    localStorage.setItem("fontSize", selectedFontSize);
};


// changeBgColor
const changeBgColor = (event) => {
    const selectedBgColor = event.target.value;
    mainElement.style.backgroundColor = selectedBgColor;
    localStorage.setItem("bgColor", selectedBgColor);
};


// clearLocalStorage
const clearLocalStorage = () => {
    localStorage.removeItem("bgColor");
    localStorage.removeItem("fontSize");
    setvalues("16px", "aqua");
};


// add event listeners
selectFontSize.addEventListener("change", changeFontSize);
selectBgColor.addEventListener("change", changeBgColor);
resetButton.addEventListener("click", clearLocalStorage);

// function call
initialSetup();
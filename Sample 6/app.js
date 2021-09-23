const hideBtn = document.querySelector(".btn");
const loadingText = document.querySelector(".loading-text");

function clickHandler() {
    loadingText.style.display="none";
}

hideBtn.addEventListener("click", clickHandler);
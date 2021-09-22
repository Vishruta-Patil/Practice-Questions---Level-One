const translateInput = document.querySelector(".input-text");
const submitBtn = document.querySelector(".submit-btn");
const outputText = document.querySelector(".output-text");

const apiUrl = "https://api.funtranslations.com/translate/minion.json";

function UpdateUrl(text) {
  return apiUrl + "?text=" + text;
}

function errorHandler(error) {
  outputText.innerText = "error occured " + error;
}

function translateText() {
  fetch(UpdateUrl(translateInput.value))
    .then((res) => {
      if (res.status === 404) {
        outputText.innerText = "page not found";
      }
      return res.json();
    })
    .then((data) => {
      outputText.innerText = data.contents.translated.toUpperCase();
    })
    .catch(errorHandler);
}

submitBtn.addEventListener("click", translateText);

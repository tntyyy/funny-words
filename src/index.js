const vowelsWords = "аяуюоеёэиы".split("");

const substitutions = {
  "а": "я",
  "я": "я",
  "у": "ю",
  "ю": "ю",
  "о": "ё",
  "е": "е",
  "ё": "ё",
  "э": "e",
  "и": "и",
  "ы": "ы"
}

const input = document.querySelector("input");
const btn = document.querySelector("button");

const answerElement = document.querySelector(".answer__text");

const render = (text) => {
  answerElement.textContent = text;
}

const replaceCharacters = (array) => {
  return array.map(element => {
    if (substitutions[element]) {
      return substitutions[element];
    } else {
      return element;
    }
  }).join("");
}

const transformWord = (word) => {
  if (vowelsWords.indexOf(word[0]) !== -1) {
    return `ху${replaceCharacters(word.slice(1).split(""))}`;
  }
  return `ху${replaceCharacters(word.slice(1).split(""))}`;
}

btn.addEventListener("click", (event) => {
  event.preventDefault();
  render(transformWord(input.value));
});
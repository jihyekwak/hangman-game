const quizzes = ["ant", "banana", "cat", "dog", "elephant", "fish", "gorilla", "house", "island"];

const alphabetBtns = Array.from(document.querySelectorAll(".alphabet-btn"));
const startBtn = document.querySelector("#start-btn");
const quizArea = document.querySelector("#quiz-area");

let randomQuiz = null;

console.log(alphabetBtns);

function onAlphabetBtnClick(event) {
    const chosenAlphabetBtn = event.target;
    chosenAlphabetBtn.classList.add("chosen");
    const chosenAlphabet = chosenAlphabetBtn.dataset.value;
    console.log(chosenAlphabet);
}

function gameGenerator() {
    randomQuiz = quizzes[Math.floor(Math.random() * quizzes.length)];
    console.log(randomQuiz);
    return randomQuiz;
}

function onStartBtnClick() {
    gameGenerator();
    for( let i = 0 ; i < randomQuiz.length ; i++ ) {
        const letterBox = document.createElement("div");
        letterBox.id = randomQuiz[i];
        letterBox.classList.add("letter-box")
        quizArea.appendChild(letterBox);
        const letterSpan = document.createElement("span");
        letterSpan.classList.add("hidden");
        letterSpan.innerHTML = randomQuiz[i];
        letterBox.appendChild(letterSpan);
    }
}

alphabetBtns.forEach(alphabetBtn => alphabetBtn.addEventListener("click", onAlphabetBtnClick));
startBtn.addEventListener("click", onStartBtnClick);
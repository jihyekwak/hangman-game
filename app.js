const quizzes = ["ant", "banana", "cat", "dog", "elephant", "fish", "gorilla", "house", "island"];

const alphabetBtns = Array.from(document.querySelectorAll(".alphabet-btn"));
const startBtn = document.querySelector("#start-btn");
const quizArea = document.querySelector("#quiz-area");
// const countArea = document.querySelector("#count-area");

let randomQuiz = null;
let count = 0;
let isPlaying = false;

console.log(alphabetBtns);

function onAlphabetBtnClick(event) {
    if (isPlaying) {
        count += 1;
        const countNumber = document.querySelector("#count");
        countNumber.innerHTML = count;
        const chosenAlphabetBtn = event.target;
        chosenAlphabetBtn.classList.remove("active");
        chosenAlphabetBtn.classList.add("chosen");
        const chosenAlphabet = chosenAlphabetBtn.dataset.value;
        chosenAlphabetBtn.removeEventListener("click", onAlphabetBtnClick);
        console.log(chosenAlphabet);
        if (randomQuiz.includes(chosenAlphabet)) {
            const foundLetter = Array.from(document.querySelectorAll(`#${chosenAlphabet}`));
            foundLetter.forEach(letter => letter.classList.remove("hidden"));
        }
    }
}

function gameGenerator() {
    randomQuiz = quizzes[Math.floor(Math.random() * quizzes.length)];
    console.log(randomQuiz);
    return randomQuiz;
}

function onStartBtnClick() {
    isPlaying = true;
    alphabetBtns.forEach(alphabetBtn => alphabetBtn.addEventListener("click", onAlphabetBtnClick));
    alphabetBtns.forEach(alphabetBtn => alphabetBtn.classList.add("active"));
    const previousQuiz = document.querySelector("#newQuiz");
    if (previousQuiz) {
        previousQuiz.remove();
        alphabetBtns.forEach(alphabetBtn => alphabetBtn.classList.remove("chosen"));
    }
    gameGenerator();
    const newQuiz = document.createElement("div");
    newQuiz.id = "newQuiz";
    quizArea.appendChild(newQuiz); 
    for( let i = 0 ; i < randomQuiz.length ; i++ ) {
        const letterBox = document.createElement("div");
        // letterBox.id = randomQuiz[i];
        letterBox.classList.add("letter-box")
        newQuiz.appendChild(letterBox);
        const letterSpan = document.createElement("span");
        letterSpan.classList.add("hidden");
        letterSpan.id = randomQuiz[i];
        letterSpan.innerHTML = randomQuiz[i];
        letterBox.appendChild(letterSpan);
    }
}


startBtn.addEventListener("click", onStartBtnClick);
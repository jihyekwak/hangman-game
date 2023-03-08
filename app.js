const quizzes = ["ant", "banana", "cat", "dog", "elephant", "fish", "gorilla", "house", "island"];

const alphabetBtns = Array.from(document.querySelectorAll(".alphabet-btn"));
const startBtn = document.querySelector("#start-btn");
const quizArea = document.querySelector("#quiz-area");
// const countArea = document.querySelector("#count-area");

let randomQuiz = null;
let lives = 10;
let isPlaying = false;

console.log(alphabetBtns);

function onAlphabetBtnClick(event) {
    if (isPlaying) {
        const chosenAlphabetBtn = event.target;
        chosenAlphabetBtn.classList.remove("active");
        chosenAlphabetBtn.classList.add("chosen");
        const chosenAlphabet = chosenAlphabetBtn.dataset.value;
        chosenAlphabetBtn.removeEventListener("click", onAlphabetBtnClick);
        console.log(chosenAlphabet);
        if (randomQuiz.includes(chosenAlphabet)) {
            const foundLetter = Array.from(document.querySelectorAll(`#${chosenAlphabet}`));
            foundLetter.forEach(letter => letter.classList.remove("hidden"));
        } else {
            lives = lives - 1;
            const livesNumber = document.querySelector("#count");
            livesNumber.innerHTML = lives;
            console.log(lives);
            checkScore();
        }
    }
}

function gameGenerator() {
    randomQuiz = quizzes[Math.floor(Math.random() * quizzes.length)];
    // console.log(randomQuiz);
    // return randomQuiz;
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

function checkScore() {
    if(lives <= 0) {
        // startBtn.classList.remove("hidden");
        resetGame()
    }
}

function resetGame() {
    const previousQuiz = document.querySelector("#newQuiz");
    if (previousQuiz) {
        previousQuiz.remove();
        alphabetBtns.forEach(alphabetBtn => alphabetBtn.classList.remove("chosen"));
    }
    // alphabetBtns.forEach(alphabetBtn => alphabetBtn.addEventListener("click", onAlphabetBtnClick));
    // alphabetBtns.forEach(alphabetBtn => alphabetBtn.classList.add("active"));
    startBtn.classList.remove("hidden");
    lives = 10;
}

function onStartBtnClick() {
    isPlaying = true;
    resetGame();
    startBtn.classList.add("hidden");
    alphabetBtns.forEach(alphabetBtn => alphabetBtn.addEventListener("click", onAlphabetBtnClick));
    alphabetBtns.forEach(alphabetBtn => alphabetBtn.classList.add("active"));
    // const previousQuiz = document.querySelector("#newQuiz");
    // if (previousQuiz) {
    //     previousQuiz.remove();
    //     alphabetBtns.forEach(alphabetBtn => alphabetBtn.classList.remove("chosen"));
    // }
    gameGenerator();
    // const newQuiz = document.createElement("div");
    // newQuiz.id = "newQuiz";
    // quizArea.appendChild(newQuiz); 
    // for( let i = 0 ; i < randomQuiz.length ; i++ ) {
    //     const letterBox = document.createElement("div");
    //     // letterBox.id = randomQuiz[i];
    //     letterBox.classList.add("letter-box")
    //     newQuiz.appendChild(letterBox);
    //     const letterSpan = document.createElement("span");
    //     letterSpan.classList.add("hidden");
    //     letterSpan.id = randomQuiz[i];
    //     letterSpan.innerHTML = randomQuiz[i];
    //     letterBox.appendChild(letterSpan);
    // }
}

startBtn.addEventListener("click", onStartBtnClick);
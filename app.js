const alphabetBtns = Array.from(document.querySelectorAll(".alphabet-btn"));

console.log(alphabetBtns);

function onAlphabetBtnClick(event) {
    const chosenAlphabetBtn = event.target;
    chosenAlphabetBtn.classList.add("chosen");
    const chosenAlphabet = chosenAlphabetBtn.dataset.value;
    console.log(chosenAlphabet);
}

alphabetBtns.forEach(alphabetBtn => alphabetBtn.addEventListener("click", onAlphabetBtnClick));
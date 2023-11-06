let baseText = document.querySelector(".base-text");
const words = ["design", "frontend", "backend", "testing"];
let currentWordIndex = 0;
let currentLetterIndex = 0;
let changedWord = false;

function updateTextWithNewWord() {
    currentLetterIndex = 0;
    if (currentWordIndex >= words.length) {
        currentWordIndex = 0;
    }
    writeNewWord(words[currentWordIndex]);
}

function writeNewWord(word) {
    if (currentLetterIndex < word.length) {
        baseText.innerHTML += word[currentLetterIndex];
        currentLetterIndex++

        setTimeout(() => writeNewWord(word), 200)
    } else {
        changedWord = true;
        currentLetterIndex = 0;
        currentWordIndex = (currentWordIndex + 1) % words.length;
        setTimeout(deleteLastWord, 500);
    }
}

function deleteLastWord() {
    if (changedWord) {
        let currentText = baseText.innerHTML.trim();

        let lastWordLength = words[(currentWordIndex - 1 + words.length) % words.length].length;
        baseText.innerHTML = currentText.substring(0, currentText.length - lastWordLength);
        
        changedWord = false;
        setTimeout(updateTextWithNewWord, 200);
    }
        

    }


updateTextWithNewWord();
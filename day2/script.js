const inputField = document.querySelector(".input-field");
const cardDisplay = document.querySelector(".card-display");
const contentTypes = document.querySelectorAll(".inner-content-type");
const button = document.querySelector(".button");

contentTypes.forEach((contentType, index)=> {
    contentType.setAttribute("content-type-index", index);
    contentType.addEventListener("click", () => displayText(index));
});

button.addEventListener("click", () => checkIndexInputField())

function displayText(index) {

    const contentMap = {
        0: "Positive content",
        1: "Negative content",
        2: "Neutral content"
    }

    contentTypes.forEach((contentType, i) => {
        contentType.classList.toggle("active", i === index)
        if (i === index) {
            cardDisplay.textContent = contentMap[i];
            
        };
    })
};

function checkIndexInputField() {
    let value = parseInt(inputField.value) - 1;
    
    if (value >= 0 && value < contentTypes.length) {
        displayText(value);
    } else if (value) {
        alert("Index invalid.")
    }

    inputField.value = "";
}


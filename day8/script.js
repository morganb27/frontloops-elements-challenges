let searchButton = document.querySelector(".search-button");
let hideButton = document.querySelector(".hide-button");
let sidebar = document.querySelector(".sidebar");
let overlay = document.querySelector(".overlay");
console.log(searchButton);

searchButton.addEventListener("click", () => handleClickSearchButton());
hideButton.addEventListener("click", () => handleClickHideButton());
overlay.addEventListener("click", () => handleClickHideButton());

function handleClickSearchButton() {
    sidebar.style.display = "flex";
    sidebar.style.width = "350px";
    overlay.style.display = "block";
    setTimeout(() => {
        sidebar.style.transform = "translateX(0)";
        sidebar.style.opacity = 1;
    }, 250); 
    
};

function handleClickHideButton () {
    sidebar.style.transform = "translateX(-100%)";
    sidebar.style.opacity = 0;
    overlay.style.display = "none";
    setTimeout(() => {
        sidebar.style.display = "none";
    }, 250); 
}
const tabs = document.querySelectorAll('button');
const selectDropdown = document.querySelector('select')

function toggleTabs() {
    tabs.forEach((tab, index) => {
        tab.addEventListener('click', () => {
            this.removeActiveClass(tabs);
            this.addActiveClass(tab);
            selectDropdown.selectedIndex = index;
            
        }) 
    })
};

function selectOptions() {
    selectDropdown.addEventListener(("change"), (event) => {
        const selectedIndex = event.target.selectedIndex;
        this.removeActiveClass(tabs);
        this.addActiveClass(tabs[selectedIndex]);
    })
}

function removeActiveClass(elements) {
    elements.forEach((element) => {
        element.classList.remove('active-tabs')
    })
};

function addActiveClass(element) {
    element.classList.add('active-tabs');
}


toggleTabs();
selectOptions();
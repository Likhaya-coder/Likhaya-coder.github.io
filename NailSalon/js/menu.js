const toggle = document.querySelector('#toggle');
const getContainer = document.querySelector('.nav-link .container');
const getLinks = document.querySelector('.nav-link ul');
let toggleNavStatus = false;
let windowWidth = window.innerWidth;
let caltulations = 768;

let toggleClick = function() {
    

    console.log(getContainer);

    if (toggleNavStatus == false) {
        getContainer.style.backgroundColor="#f3f3f3";
        getLinks.style.visibility="visible";
        toggle.classList.toggle('active');
        toggleNavStatus = true;
    } else if (toggleNavStatus == true) {
        getContainer.style.backgroundColor="transparent";
        getLinks.style.visibility="hidden";
        toggle.classList.toggle('active');
        toggleNavStatus = false;
    }
}

console.log(caltulations);
console.log(windowWidth);

if (windowWidth > caltulations) {
    getLinks.style.visibility="visible";
}
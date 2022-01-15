const toggle = document.querySelector('#toggle');
let toggleNavStatus = false;

let toggleClick = function() {
    const getContainer = document.querySelector('.nav-link .container');
    const getLinks = document.querySelector('.nav-link ul');

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

if (getContainer == getContainer.style.hidden) {
    getLinks.style.visibility="visible";
}
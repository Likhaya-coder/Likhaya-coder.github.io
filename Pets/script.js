let menu = false;
let parentMainDiv = document.querySelector(".main-nav");
let navUl = document.querySelector(".main-nav ul");

let menuToggle = function() {
    if (menu == false) {
        parentMainDiv.style.marginBottom="45vh";
        navUl.style.visibility="visible";
        menu = true;
    } else if (menu == true) {
        parentMainDiv.style.marginBottom="0";
        menu = false;
    }
}

onload = function() {
    navUl.style.height="25px";
}


let a = document.querySelector("#FAQs .list__1 a");
let b = document.querySelector("#FAQs .list__2 a");
let c = document.querySelector("#FAQs .list__3 a");
let d = document.querySelector("#FAQs .list__4 a");

let toggleNav__1 = function (e) {
    e.preventDefault();
    let faqButtons = document.querySelector("#FAQs .list__1 a");
    let faqOl = document.querySelector("#FAQs .list__1 ol");

    if (menu == true) {
        faqButtons.style.backgroundColor="rgb(245, 24, 24)";
        faqButtons.style.color="white";
        faqOl.style.visibility="visible";
        faqButtons.style.transition="all ease-in-out 1s";
        faqOl.style.height="auto";
        menu = false;
    } else if (menu == false) {
        faqButtons.style.backgroundColor="white";
        faqButtons.style.color="black";
        faqOl.style.visibility="hidden";
        faqButtons.style.transition="all ease-in-out 1s";
        faqOl.style.height="0";
        menu = true;
    }
}

a.onclick = toggleNav__1;

let toggleNav__2 = function (e) {
    e.preventDefault();
    let faqButtons = document.querySelector(".list__2 a");
    let faqOl = document.querySelector(".list__2 ol");

    if (menu == false) {
        faqButtons.style.cssText="background: linear-gradient(45deg, #f02727 0%, #e6e22b 100%);";
        faqButtons.style.color="white";
        faqOl.style.visibility="visible";
        faqButtons.style.transition = "all ease-in-out 1s";
        faqOl.style.height="auto";
        menu = true;
    } else if (menu == true) {
        faqButtons.style.cssText="background-color: white;";
        faqButtons.style.color="black";
        faqOl.style.visibility="hidden";
        faqOl.style.height="0";
        menu = false;
    }
}

b.onclick = toggleNav__2;


let toggleNav__3 = function (e) {
    e.preventDefault();
    let faqButtons = document.querySelector(".list__3 a");
    let faqOl = document.querySelector(".list__3 ol");

    if (menu == false) {
        faqButtons.style.cssText="background: linear-gradient(45deg, #f02727 0%, #e6e22b 100%);";
        faqButtons.style.color="white";
        faqOl.style.visibility="visible";
        faqButtons.style.transition = "all ease-in-out 1s";
        faqOl.style.height="auto";
        menu = true;
    } else if (menu == true) {
        faqButtons.style.cssText="background-color: white;";
        faqButtons.style.color="black";
        faqOl.style.visibility="hidden";
        faqOl.style.height="0";
        menu = false;
    }
}

c.onclick = toggleNav__3;

let toggleNav__4 = function (e) {
    e.preventDefault();
    let faqButtons = document.querySelector(".list__4 a");
    let faqOl = document.querySelector(".list__4 ol");

    if (menu == false) {
        faqButtons.style.cssText="background: linear-gradient(45deg, #f02727 0%, #e6e22b 100%);";
        faqButtons.style.color="white";
        faqOl.style.visibility="visible";
        faqButtons.style.transition = "all ease-in-out 1s";
        faqOl.style.height="auto";
        menu = true;
    } else if (menu == true) {
        faqButtons.style.cssText="background-color: white;";
        faqButtons.style.color="black";
        faqOl.style.visibility="hidden";
        faqOl.style.height="0";
        menu = false;
    }
}

d.onclick = toggleNav__4;

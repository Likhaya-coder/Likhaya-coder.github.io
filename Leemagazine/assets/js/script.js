let toggleStatus = false;
let getLinks = document.querySelectorAll("#sidebar ul li a");

let toggleNav = function() {
    let getSidebar = document.querySelector("#sidebar");
    let getOverlay = document.querySelector("#sidebar .wrapper");
    
    if (toggleStatus == false) {
        getSidebar.style.cssText = "visibility: visible;";
        getSidebar.style.cssText = "left: 0;";
        getOverlay.style.cssText = "left: 0;";
        toggleStatus = true;
    } else if (toggleStatus == true) {
        getSidebar.style.cssText = "visibility: hidden;";
        getSidebar.style.cssText = "left: -350;";
        getOverlay.style.cssText = "left: -350;";
        toggleStatus = false;
    }
}

let toggleSearch = function() {
    let searchField = document.querySelector("#search__field");
    if (toggleStatus == false) {
        searchField.style.cssText="display: block";
        toggleStatus = true;
    } else if (toggleStatus == true) {
        searchField.style.cssText="display: none";
        toggleStatus = false;
    }
}
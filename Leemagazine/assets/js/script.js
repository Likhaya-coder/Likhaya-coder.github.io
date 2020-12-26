function toggleNav() {
    let sidebar = document.querySelector("#sidebar");
    let toggle = false;

    if (toggle == false) {
        sidebar.style.cssText = "visibility: visible;";
        toggle = true;
    } else if (toggle == true) {
        sidebar.style.cssText = "visibility: hidden;";
        toggle = false;
    }
}

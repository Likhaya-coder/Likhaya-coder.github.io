var sidebar = document.querySelector("#sidebar");
var status = false;

let toggleNav = function() {
    if (status == false) {
        sidebar.style.visibility="visible";
        status = true;
    } else if (status == true) {
        sidebar.style.visibility="hidden";
        status = false;
    }
}

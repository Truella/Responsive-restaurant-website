let dropDown = document.getElementById("drop-down");
let navBar = document.getElementById("nav-bar");
dropDown.addEventListener("click", function(){
    navBar.classList.toggle("hidden")
});
window.addEventListener("resize", function(){
    const vwidth = window.innerWidth;
    const viewHeight = window.innerHeight;
    if (vwidth >= 768) {
        navBar.classList.remove("hidden")
    }
})
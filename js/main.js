
function menu() {
    var mojo = document.getElementById("hamburger"); 
    if (mojo.classList.toggle("change")) {
        document.getElementById("nav-content").style.height = "100%";
    } else {
        document.getElementById("nav-content").style.height = "0";
    }
} 



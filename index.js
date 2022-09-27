

// <!-- --------js toggle menu-------- -->


var navLinks = document.getElementById("navLinks")

var menuIcon = document.getElementById("menuIcon")


function showMenu(){
    navLinks.style.right = "0";
    
    menuIcon.style.display = "none"
}

function hideMenu(){
    navLinks.style.right = "-200px";

    
    menuIcon.style.display = "block"
}
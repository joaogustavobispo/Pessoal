var img = document.getElementsByClassName("pulse")[0];
var sul = document.getElementsByClassName("sul")[0];
var norte = document.getElementsByClassName("norte")[0];

function closeImg() {
    img.style.animation = "explosion 0.7s none";
    setTimeout(() => {
        img.style.display = "none";
        norte.style.display = "none";
        sul.style.display = "flex"
        console.log("Sumiu")
    }, 100);
}

function openImg() {
    norte.style.display = "flex";
    img.style.display = "table"
    sul.style.display = "none"
    img.style.animation = "inplosion 0.7s none";
    setTimeout(() => {
        img.style.animation = "pulse 0.7s infinite"
        img.style.animationDirection = "alternate";
        console.log("Sumiu")
    }, 1200);
}

function opPopup() {
    var popup = document.getElementById("myPopup");
    popup.classList.toggle("show");
}
let menuOpen = false;
document.getElementById("menu-lines").onclick = doMenuThings;

function toggleClose() {
  let lineOne = document.getElementById("line-1");
  let lineTwo = document.getElementById("line-2");
  let lineThree = document.getElementById("line-3");
  if (!menuOpen) {
    lineOne.style.animation = "lineOne 0.5s";
    lineOne.style.animationFillMode = "forwards";
    lineTwo.style.animation = "lineTwo 0.5s";
    lineTwo.style.animationFillMode = "forwards";
    lineThree.style.animation = "lineThree 0.5s";
    lineThree.style.animationFillMode = "forwards";
  } else {
    lineOne.style.animation = "lineOneBack 0.5s";
    lineOne.style.animationFillMode = "forwards";
    lineTwo.style.animation = "lineTwoBack 0.5s";
    lineTwo.style.animationFillMode = "forwards";
    lineThree.style.animation = "lineThreeBack 0.5s";
    lineThree.style.animationFillMode = "forwards";
  }
}
function toggleMenu() {
  let menu = document.getElementById("menu");
  if (!menuOpen) {
    menu.style.display = "flex";
    menu.style.animation = "slideIn 0.5s";
    menu.style.animationFillMode = "forwards";
    menuOpen = true;
  } else {
    menu.style.animation = "slideOut 0.5s";
    menu.style.animationFillMode = "forwards";
    setTimeout(function() {menu.style.display = "none";}, 500);
    menuOpen = false;
  }
}

function doMenuThings() {
  toggleClose();
  toggleMenu();
}

let changeAccess = 0;
function changeText() {

    if (changeAccess == 0) {
        document.querySelector('button').innerText = 'Not yet actually😅'
        changeAccess = 1;
    }
    else {
        document.querySelector('button').innerText = 'WEB DEVELOPER'
        changeAccess = 0;
    }
}
let skillBoxs = document.querySelectorAll(".skill");
skillBoxs.forEach((e) => {
    e.addEventListener("mouseleave", () => {
        e.classList.add("skillNotHover");
    })
})
// ------hamburger section-------------
let hamburger = document.getElementsByClassName('hamburger')
let menu = document.querySelector('.navList');
// menu.style.display='flex';
function openMenu() {
    hamburger[0].style.display = 'none';
    hamburger[1].style.display = 'block'
    menu.style.display = 'flex';
}
// openMenu()
function closeMenu() {
    hamburger[1].style.display = 'none';
    hamburger[0].style.display = 'block'
    menu.style.display = 'none'
}

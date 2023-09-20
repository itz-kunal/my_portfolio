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
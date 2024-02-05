const body = document.querySelector("body")

const btnRed = document.getElementById('red')
const btnBlue = document.getElementById('blue')
const btnGreen = document.getElementById('green')
const btnYellow = document.getElementById('yellow')

btnRed.addEventListener('click', (e) =>{
    body.style.background = e.target.id;
})
btnBlue.addEventListener('click', (e) =>{
    body.style.background = e.target.id;
})
btnGreen.addEventListener('click', (e) =>{
    body.style.background = e.target.id;
})
btnYellow.addEventListener('click', (e) =>{
    body.style.background = e.target.id;
})
const text = document.querySelector('h1')
const start = document.querySelector('#start')
const stop = document.querySelector('#stop')
let changedText

start.addEventListener('click',function () {
    changedText = setTimeout(function () {
        text.style.color = 'red'
        text.innerText = 'Text has been changed!'
    },2000)
})

stop.addEventListener('click',function () {
    // text.innerText = 'Text reset'
    clearTimeout(changedText)
    console.log('stopped')
})
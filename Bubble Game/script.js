const hit = document.getElementById('target');
let rn = 0;
let score = document.getElementById('score');
let curr = 0;
let timer = 6;
let play = true;
const panel = document.getElementById('panel');

function createBubbles() {
    let element = "";

    for (let i = 0; i < 98; i++) {
        makeTargets();
        element += `<div id="bubble">${rn}</div>`;
    }

    panel.innerHTML = element;

}

function makeTargets() {
    rn = Math.floor(Math.random() * 10);
    hit.innerText = `${rn}`;
}


function invokeCounter() {
    const gameOver = setInterval(() => {
        if (timer >= 0) {
            if (timer <= 15) {
                document.getElementById('counter').style.color = 'red';
            }
            document.getElementById('counter').innerText = `${timer}`;
            timer--;
        } else {
            clearInterval(gameOver);
            panel.innerHTML = `<div id="gameover"> Game Over! <br> You Scored : ${score.innerText}</div>`;
            play = false;
        }
    }, 1000);

}


function playGame() {
    document.getElementById('panel').addEventListener('click', (bubble) => {
        // console.log(typeof bubble.target.innerText);
        // console.log(typeof rn);
        if (rn === Number(bubble.target.innerText)) {
            // console.log("Matched");
            curr += 10;
            score.innerText = curr;
        }
        createBubbles();
    });
}


if(play){
    createBubbles();
    invokeCounter();
    makeTargets();
    playGame();
}else{

    console.log('Ran');
    var x = document.createElement("BUTTON");
    var t = document.createTextNode("Click me");
    x.appendChild(t);
    panel.appendChild(x);

    x.addEventListener('click', () =>{
        location.reload();
        timer = 6;
        curr = 0;
        play=true
    })
    // location.reload();
}

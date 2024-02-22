const hit = document.getElementById('target');
let rn = 0;
let score = document.getElementById('score');
let curr = 0;
let timer = 6;
let panel = document.getElementById('panel');

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

            // panel.removeEventListener('click', (bubble) => {
            //     // console.log(typeof bubble.target.innerText);
            //     // console.log(typeof rn);
            //     if (rn === Number(bubble.target.innerText)) {
            //         // console.log("Matched");
            //         curr += 10;
            //         score.innerText = curr;
            //     }
            //     createBubbles();
            // });

            let end = document.createElement('div');
            end.id = "end";
            end.innerHTML = `<h1>Game Over! <br> You Scored : ${score.innerText}</h1>`;
            panel.innerHTML = '';
            panel.appendChild(end);
            clearInterval(gameOver);
            let restart = document.createElement('div');
            restart.innerHTML = `Restart Game`;
            restart.id = 'restartbtn';
            end.appendChild(restart);
            restart.addEventListener('click', () => {
                location.reload();
            })
        }
    }, 1000);

}


function playGame() {
    panel.addEventListener('click', (bubble) => {
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



createBubbles();
invokeCounter();
makeTargets();
playGame();


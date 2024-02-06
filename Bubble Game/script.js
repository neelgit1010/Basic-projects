const hit = document.getElementById('target');
let rn = 0;
let score = document.getElementById('score');

function createBubbles() {
    let element = "";

    for (let i = 0; i < 98; i++) {
        makeTargets();
        element += `<div id="bubble">${rn}</div>`;
    }

    document.getElementById('panel').innerHTML = element

}

function makeTargets() {
    rn = Math.floor(Math.random() * 10);
    hit.innerText = `${rn}`;
}


function invokeCounter() {
    let timer = 25;
    const gameOver = setInterval(() => {
        if (timer >= 0) {
            if (timer <= 15) {
                document.getElementById('counter').style.color = 'red';
            }
            document.getElementById('counter').innerText = `${timer}`;
            timer--;
        } else {
            clearInterval(gameOver);
        }
    }, 1000);

}


document.getElementById('panel').addEventListener('click',(bubble) =>{
    // console.log(typeof bubble.target.innerText);
    // console.log(typeof rn);
    if(rn === Number(bubble.target.innerText)){
        // console.log("Matched");
        

    }else{
        // console.log("Not matched");
    }
    createBubbles();
})


createBubbles();
invokeCounter();
makeTargets();
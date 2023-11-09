var timer = 0;
var score = 0;
var hitNum;
var totalHit = 0;
var correctHit = 0;;



const incrementScore = () => {
    score+= 10;
    document.querySelector("#scoreval").textContent = score;
     
}

const getNewHit = () => {
    const hitInterval = setInterval(function () {
        if(timer > 0) {
            hitNum = Math.floor(Math.random()*10);
            document.querySelector("#hitval").innerHTML = hitNum;
        }else {
            document.querySelector("#hitval").innerHTML = "0";
            clearInterval(hitInterval);
        }
    }, 1000);
}

const makeBubble = () => {
    var clutter = "";

    for (var i = 0; i < 133; i++) {
        var num = Math.floor(Math.random() * 10);
        clutter += `<div class="bubble">${num}</div>`;
    }

    document.querySelector("#panel-bottom").innerHTML = clutter;
}

const resetValues = () => {
    document.querySelector("#hitval").innerHTML = 0;
    document.querySelector("#scoreval").innerHTML = 0;

    totalHit = 0;
    score = 0;
    totalHit = 0;
    correctHit = 0;
}

const gameoverWindow = () => {
    document.querySelector("#panel-bottom").innerHTML = `<div id="gameover-display">
    <h1>GAME OVER !</h1>
    <h2>YOUR SCORE : ${score}</h2>
    <h2>TOTAL HIT : ${totalHit}</h2>
    <h2 id="correct">CORRECT HIT : ${correctHit}</h2>
    <div class="button">
        <button id="playagain-button">PLAY AGAIN</button>
        <button id="quit-button">QUIT</button>
    </div>
    </div>`;    
    
    document.querySelector("#playagain-button").addEventListener("click", function () {
        document.querySelector("#panel-bottom").innerHTML = "";
        playGame();
    });

    document.querySelector("#quit-button").addEventListener("click", function (){
        document.querySelector("#panel-bottom").innerHTML = 
        `<div id="quit-window">
            <h1>THANKS FOR PLAYING</h1>
            <h3>Developed by : ANKIT PUNDIR®</h3>
        </div>`;
    });
}

const runTimer = () => {
    const timeInterval = setInterval(function () {
        if (timer > 0) {
            timer--;
            document.querySelector("#time").textContent = timer;
        }
        else {
            document.querySelector("#panel-bottom").innerHTML = "";
            clearInterval(timeInterval);
            gameoverWindow();
            resetValues();
        }
    }, 1000);
}



const playGame = () => {
    timer = 10;
    makeBubble();
    runTimer();
    getNewHit();
}



document.querySelector("#panel-bottom").addEventListener("click", function (dets) {
    const clicked = Number(dets.target.textContent);
    if(clicked == hitNum){
        correctHit++;
        incrementScore();
        makeBubble();
        getNewHit();
    }
    totalHit++;
});

document.querySelector("#start-game>button").addEventListener("click", function () {
    playGame();
})




var timer = 30;
var score = 0;
var target = 0;
var interval;

function createBubble() {

    var cont = "";
    for (var i = 1; i <= 180; i++) {
        var num = Math.floor(Math.random() * 10);
        cont += `<div class="bubble">${num}</div>`
    }
    document.querySelector(".p-bottom").innerHTML = cont;
}

function runTimer() {
    clearInterval(interval);
    interval = setInterval(function () {
        if (timer > 0) {
            timer--;
            document.querySelector("#Timer").innerHTML = timer;
        }
        else {
            var scr = Number(document.querySelector("#Score").textContent);
            alert(`Your Score is ${scr}`);
            document.querySelector(".p-bottom").innerHTML = `<h1>Game Over!</h1> <br> <div class="again">Play Again</div>`;
            document.querySelector(".again").addEventListener("click", restartGame);
            clearInterval(interval);
        }

    }, 1000);

}

function getTarget() {
    target = Math.floor(Math.random() * 10);
    document.querySelector("#Target").innerHTML = target;
}

function changeScore() {
    score += 10;
    document.querySelector("#Score").innerHTML = score;

}

function restartGame() {
    timer = 30;
    score = 0;
    document.querySelector("#Timer").innerHTML = timer;
    document.querySelector("#Score").innerHTML = score;
    runTimer();
    createBubble();
    getTarget();
}

document.querySelector(".p-bottom").addEventListener("click", function (dets) {
    var clicked = Number(dets.target.textContent);
    if (target === clicked) {
        changeScore();
        createBubble();
        getTarget();
    }

});



runTimer();
createBubble();
getTarget();





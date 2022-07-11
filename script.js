const playerScoreCounter = document.querySelector('.playerScore');
const cpScoreCounter = document.querySelector('.cpScore');
let playerScore = 0;
let cpScore = 0;

const playerImg = document.querySelector('#playerImg');
const cpImg = document.querySelector('#cpImg');

const buttons = document.querySelectorAll('.btn');
let choice = "";
let cpChoice = "";

const winner = document.querySelector(".result");

const moves = {
    "rock": "assetts/rock.png",
    "paper": "assetts/paper.png",
    "scissors": "assetts/scissors.png"
};

buttons.forEach((e) => {
    e.addEventListener("click", function () {
        switch(e.id) {
            case "rock":
                playerImg.src = moves.rock;
                choice = e.id;           
                break;
            case "paper":
                playerImg.src = moves.paper;
                choice = e.id;           
                break;
            case "scissors":
                playerImg.src = moves.scissors;
                choice = e.id;           
                break;
        }
        enemyChoice();
        
    })
});

function enemyChoice() {
    randomChoice = Math.floor(Math.random() * 3);
    enemyMove = Object.keys(moves)[randomChoice];
    switch (enemyMove) {
        case "rock":
            cpImg.src = moves.rock;
            cpChoice = enemyMove;
            break;
        case "paper":
            cpImg.src = moves.paper;
            cpChoice = enemyMove;
            break;
        case "scissors":
            cpImg.src = moves.scissors;
            cpChoice = enemyMove;
            break;   

    }
    checkWin();
};

function checkWin() {
    if (choice === cpChoice) {
        console.log("Draw");
    } else {
        switch (choice) {
            case "rock":
                if (cpChoice === "paper") {
                    cpScore+=1;
                } else {
                    playerScore+=1;
                }
                break;
            case "paper":
                if (cpChoice === "scissors") {
                    cpScore+=1;
                } else {
                    playerScore+=1;
                }
                break;

            case "scissors":
                if (cpChoice === "rock") {
                    cpScore+=1;
                } else {
                    playerScore+=1;
                }
                break;

        }
    }
    playerScoreCounter.innerText = playerScore;
    cpScoreCounter.innerText = cpScore;
    if (playerScore === 5|| cpScore === 5) {
        winCondition();
    }

}

function winCondition() {
    if (cpScore === 5) {
        winner.innerText = "You Lost";

    } else {
        winner.innerText = "You Won";
    }
    cpScore = 0;  
    playerScore = 0;
    cpScoreCounter.innerText = cpScore;
    playerScoreCounter.innerText = cpScore;
    const newTimeout = setTimeout(newGame, 3000);
    
}

function newGame() {
    winner.innerText = '';
}



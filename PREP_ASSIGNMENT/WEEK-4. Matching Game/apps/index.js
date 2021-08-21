const cards = document.querySelectorAll(".item");
const cardColumns = document.querySelector(".card-table")
const startButton = document.querySelector(".start-button");
const restartButton = document.querySelector(".restart-button");
const spaceForFinalImage = document.querySelector(".final-image");
const correctAnswer = document.querySelector(".correct-answer");

let cardImages = [
    '1.png','2.png','3.png','4.png','5.png','6.png','7.png','8.png',
    '1.png','2.png','3.png','4.png','5.png','6.png','7.png','8.png'
];
let remainingTime = document.querySelector(".time-limit");

let RandomNumberIndex = 16;
let remainingCard = 16;
let previousCard;
let currentCard;
let countClick = 0;
let rightAnswer = 0;
let remainingSeconds = 60;
let repeat;

function handleFlipCard(e) {
    e.preventDefault();
    
    currentCard = e.target.parentNode;
    if (countClick % 2 === 0) {
        previousCard = e.target.parentNode;
        currentCard.firstChild.style.display = "none";
        currentCard.lastChild.style.display = "";
    } else if (countClick % 2 === 1) {
        currentCard.firstChild.style.display = "none";
        currentCard.lastChild.style.display = "";
        if (currentCard.lastChild.src === previousCard.lastChild.src) {
            rightAnswer++;
            correctAnswer.textContent = `맞춘 갯수 : ${rightAnswer}개 / 8개`;
            if (rightAnswer === 8) {
                setTimeout(() => {
                    cardColumns.style.display = "none";
                    let finalWinningImage = document.createElement("img");
                    finalWinningImage.setAttribute('src', `./images/pikachu.gif`);
                    spaceForFinalImage.append(finalWinningImage);
                    spaceForFinalImage.style.display = "block";
                    startButton.style.display = "none";
                    restartButton.style.display = "inline";
                    clearInterval(repeat);    
                }, 200);
            }
        } else {
            setTimeout( () => {
                currentCard.firstChild.style.display = "inline";
                currentCard.lastChild.style.display = "none";
                previousCard.firstChild.style.display = "inline";
                previousCard.lastChild.style.display = "none";
            },500)
        }
    } 

    countClick++;
}

function setEachCard(card) {
    if (remainingCard === 0) return;
    let number = Math.floor(Math.random()*RandomNumberIndex);
    let newImage = document.createElement('img');
    newImage.setAttribute('src', `./images/${cardImages[number]}`);
    card.append(newImage);
    card.lastChild.style.display = "none";

    remainingCard--;
    RandomNumberIndex--;
    cardImages.splice(number, 1);
}

function startTimer() {

    repeat = setInterval(() => {
        remainingSeconds--;
        remainingTime.textContent = `제한시간 : ${remainingSeconds}초`;
        if (remainingSeconds === 0) {
            clearInterval(repeat);
            cardColumns.style.display = "none";
            let finalFailedImage = document.createElement("img");
            finalFailedImage.setAttribute('src', `./images/sadpikachu.gif`);
            spaceForFinalImage.append(finalFailedImage);
            spaceForFinalImage.style.display = "block";
            startButton.style.display = "none";
            restartButton.style.display = "inline"; 
        }         
    }, 1000);
}


function handleStartGame(e) {
    e.preventDefault();
    startButton.style.display = "none";
    cards.forEach((card) => {
        setEachCard(card);
        card.addEventListener("click", handleFlipCard, true);
    });
    startTimer();
}

function handleRestartGame(e) {
    e.preventDefault();
    restartButton.style.display = "none";
    spaceForFinalImage.style.display = "none";
    cardColumns.style.display = "table";

    RandomNumberIndex = 16;
    remainingCard = 16;
    countClick = 0;
    rightAnswer = 0;
    remainingSeconds = 60;
    cardImages = [
        '1.png','2.png','3.png','4.png','5.png','6.png','7.png','8.png',
        '1.png','2.png','3.png','4.png','5.png','6.png','7.png','8.png'
    ];

    cards.forEach((card) => {
        card.firstChild.style.display = "inline";
        card.removeChild(card.lastChild);
        setEachCard(card);
        card.addEventListener("click", handleFlipCard, true);
    });

    startTimer();
}

restartButton.addEventListener('click', handleRestartGame);
startButton.addEventListener('click', handleStartGame);


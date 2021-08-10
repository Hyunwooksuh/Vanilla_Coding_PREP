/*
 * import 구문은 수정하지 말고 사용하세요.
 * import를 처음 보신다면, MDN에서 import, export를 검색해보시기 바랍니다.
 *
 * [주의] quiz.json 파일 내용은 수정하지 마세요.
    [json 예시 참고]
 *   {
    "question": "예제 코드의 결과값은 무엇입니까?",
    "choices": ["'number'", "NaN", "'object'", "'string'"],
    "code": "typeof NaN",
    "correctAnswer": 0
     },
 */

import data from "./quiz.json";

const startButton = document.querySelector('#start-button');
const frontPage = document.querySelector('.front-page');
const quizPage = document.querySelector('.quiz-page');
const countAnswerGotten = document.querySelector('.answer-gotten');
const answerRemaining = document.querySelector('.answer-remaining');
const remainingSeconds = document.querySelector('.remaining-seconds');
const titleQuiz = document.querySelector('.quiz-title');
const quizChoices = document.querySelector('.quiz-choice');
const sampleCode = document.querySelector('.sample-code');
const nextQuizButton = document.querySelector('#next-quiz');
const restartButton = document.querySelector('#restart-button');


let currentPageIndex = 0;
let currentPageData = [];
let countAnswerRight = 0;
let answersLeft = 21;
let currentRemainingSeconds;

startButton.addEventListener('click', startQuiz);
nextQuizButton.addEventListener("click", showNextQuiz);

function startQuiz() {
    frontPage.style.display = 'none';
    quizPage.style.display = 'grid';
    showPage(currentPageIndex);
}

function showNextQuiz() {
    sampleCode.firstChild.textContent = "";
    nextQuizButton.style.display = "none";
    currentPageIndex++;
    sampleCode.style.removeProperty("visibility");
    quizChoices.style.removeProperty("visibility");
    remainingSeconds.style.removeProperty("visibility");


    showPage(currentPageIndex);
}

function showPage(currentPageIndex) {
    let alphabetIndex = 'A';
    currentRemainingSeconds = 5;

    currentPageData = data[currentPageIndex];

    showCountDown();

    remainingSeconds.textContent = `Time Limit : 5`;
    titleQuiz.textContent = ` Q. ${currentPageData.question}`;
    countAnswerGotten.textContent = `Point : ${countAnswerRight} / 21`;
    answerRemaining.textContent = `Problems left : ${answersLeft} / 21`;

    if (currentPageData.code !== null) {
        sampleCode.firstChild.textContent = currentPageData.code;
    } else {
        sampleCode.style.visibility = "hidden";
    }

    let tableElements = "";
    for (let i = 0; i < currentPageData.choices.length; i++) {
        let choice = currentPageData.choices[i];
        let tableElement =
            `<tr>
             <td class="index index1">${alphabetIndex}</td>
             <td class="index index2">${choice}</td>
         </tr>`;
        tableElements += tableElement;
        alphabetIndex = String.fromCharCode(alphabetIndex.charCodeAt() + 1);
    }
    quizChoices.innerHTML = tableElements;
    quizChoices.addEventListener('click', compareAnswer);
}

function showCountDown() {

    const writeCountDown = setInterval(()=> {
        --currentRemainingSeconds;
        console.log(currentRemainingSeconds);
        remainingSeconds.textContent = `Time Limit : ${currentRemainingSeconds}`;
        if (currentRemainingSeconds < 0) {
            clearInterval(writeCountDown);
            sampleCode.style.visibility = "hidden";
            quizChoices.style.visibility = "hidden";
            nextQuizButton.style.display = "block";
            remainingSeconds.style.visibility = "hidden";
            answersLeft--;
        } 
    },1000);

}

function compareAnswer(e) {
    let answerChosen = e.target.textContent;
    let correctAnswer = currentPageData.choices[currentPageData.correctAnswer];
    if (answerChosen === correctAnswer) {
        alert("YOU GOT THE RIGHT ANSWER !");
        sampleCode.style.visibility = "hidden";
        quizChoices.style.visibility = "hidden";
        nextQuizButton.style.display = "block";
        remainingSeconds.style.visibility = "hidden";
        countAnswerRight++;
        answersLeft--;
    } else {
        alert(`YOU GOT THE WRONG ANSWER ! THE ANSWER IS : ${correctAnswer} !`);
        sampleCode.style.visibility = "hidden";
        quizChoices.style.visibility = "hidden";
        nextQuizButton.style.display = "block";
        remainingSeconds.style.visibility = "hidden";
        answersLeft--;
    }
    if (answersLeft === 0) {
        titleQuiz.textContent = "You did good job. Press restart button to restart Quiz !";
        countAnswerGotten.textContent = `Point : ${countAnswerRight} / 21`;
        answerRemaining.textContent = `Problems left : ${answersLeft} / 21`;
        sampleCode.style.display = "none";
        quizChoices.style.visibility = "hidden";
        nextQuizButton.style.display = "none";
        restartButton.style.display = "block";
        remainingSeconds.style.visibility = "hidden";

        setTimeout(() => {
            alert("YOU DID GOOD JOB !");
        }, 300);
        restartButton.addEventListener('click', restartQuiz);
    }
}

function restartQuiz() {
    frontPage.style.display = 'flex';
    quizPage.style.display = 'none';
    restartButton.style.display = "none";
    currentPageData = [];
    countAnswerRight = 0;
    answersLeft = 21;

    currentPageIndex = 0;
    showNextQuiz(currentPageIndex);
}
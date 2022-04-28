'use strict';

// console.log(document.querySelector('.message').textContent);
// document.querySelector('.message').textContent = 'Correct!';

// console.log(document.querySelector('.guess').value);

let rightNumber = Math.trunc(Math.random()*20) + 1;
console.log((rightNumber));
let higherScore = 0;
let originalScore = 5;
const labelscore = document.querySelector('.label-score');
const displayMessage = (message) => {document.querySelector('.message').textContent = message;};
document.querySelector('.check').addEventListener('click', function() {
    const guess = Number(document.querySelector('.guess').value);

    if (!guess || guess > 20 || guess < 1) {
        displayMessage('Guess a number between 1 and 20! 👎');
        document.querySelector('.message').style.color = 'red'
    } else if (guess === rightNumber) {
        displayMessage('Good! 👏😃');
        document.querySelector('.number').textContent = rightNumber;
        document.querySelector('body').style.backgroundColor = '#60b347';
        document.querySelector('.number').style.width = '40rem';
        if (originalScore > higherScore) { 
            higherScore = originalScore;
            document.querySelector('.highscore').textContent = originalScore;
        };
        
    } else if (guess > rightNumber) {
        wrongNumber('Lower 👇😏');
        document.querySelector('.message').style.color = '#eee'
    } else if (guess < rightNumber) {
        wrongNumber('Higher 🙄☝️');
        document.querySelector('.message').style.color = '#eee'
    }
    
    function wrongNumber(message) {
        if (originalScore > 1) {
            displayMessage(message);
            countingScore(originalScore -= 1);
        } else {
            displayMessage('you lose 😞');
            countingScore(originalScore -= 1);
            console.log(document.querySelector('.label-score'));
            setTimeout(() => {
              labelscore.classList.add("invisible");
            }, 10);
            document.querySelector('.check').disable = true;
        }
    }

});

document.querySelector('.again').addEventListener('click', function() {
    rightNumber = Math.trunc(Math.random()*20) + 1;
    console.log((rightNumber));
    originalScore = 5;
    if (labelscore.classList.contains("invisible")) {labelscore.classList.remove("invisible")};
    document.querySelector('.check').disabled = false;
    displayMessage('Start guessing...');
    document.querySelector('.number').textContent = '?';
    document.querySelector('body').style.backgroundColor = '#222';
    document.querySelector('.message').style.color = '#eee'
    document.querySelector('.number').style.width = '15rem';
    document.querySelector('.guess').value = '';
    countingScore(originalScore);
});

function countingScore(value) {document.querySelector('.score').textContent = value;};
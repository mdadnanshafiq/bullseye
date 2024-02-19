const home = document.getElementById('home');
const game = document.getElementById('game');
const result = document.getElementById('result');
// ---------------------------------------------
const playBtn = document.getElementById('playBtn');
const playBtn2 = document.getElementById('playBtn2');
let lifeBtn = document.getElementById('lifeBtn');
let scoreBtn = document.getElementById('scoreBtn');
// ----------------------------------------------------
const display = document.getElementById('display');
const finalScore = document.getElementById('finalScore');

const audio = new Audio();


playBtn.addEventListener('click', playNow);
playBtn2.addEventListener('click', playNow);

let score = 0;
let life = 5;

document.addEventListener('keyup', function (e) {
    let key = e.key;
    main(key);
});

function main(key) {
    if (key === 'Enter') {

        removeColor(display.innerText.toLowerCase());
        playNow();


    } else if (key === 'Escape') {
        endGame();
        removeColor(display.innerText.toLowerCase());
        finalScore.innerText = score;
    } else if (key === display.innerText.toLowerCase()) {

        score++;
        scoreBtn.innerText = score;
        removeColor(key);
        display.innerText = random();
        setColor(display.innerText.toLowerCase());
        if (!game.classList.contains('hidden')) {
            audio.src = "audio/success.mp3";
            audio.play();
        }

    } else if (key !== display.innerText.toLowerCase() && !game.classList.contains('hidden')) {

        life--;
        lifeBtn.innerText = life;
        audio.src = "audio/loss.mp3";
        audio.play();
        const artboard = document.getElementById('artboard');

        let lifePercent = life * 20;
        artboard.style.background = `linear-gradient(#FFFFFFB2 ${lifePercent}%, #FF7F7F)`;

        if (lifeBtn.innerText === '0' && !game.classList.contains('hidden')) {
            endGame();
            audio.src = '';
            audio.pause;
            finalScore.innerText = score;
            removeColor(display.innerText.toLowerCase());
            artboard.style.background = `linear-gradient(#FFFFFFB2 100%, #FF7F7F)`;
        }

    } else {
        return;
    }
}



function setColor(elementId) {

    let element = document.getElementById(elementId);
    element.style.backgroundColor = '#FFA500';


}
function removeColor(elementId) {

    let element = document.getElementById(elementId);
    element.style.backgroundColor = '#FFFFFF';


}

function playNow() {

    home.classList.add('hidden');
    result.classList.add('hidden');
    game.classList.remove('hidden');
    display.innerText = random();
    score = 0;
    life = 5;
    scoreBtn.innerText = 0;
    lifeBtn.innerText = 5;
    setColor(display.innerText.toLowerCase());
}

function endGame() {
    audio.src = '';
    home.classList.add('hidden');
    result.classList.remove('hidden');
    game.classList.add('hidden');

}

function random() {
    const atoz = 'qwertyuioplkjhgfdsazxcvbnm';
    const atozSplit = atoz.split('');
    let randomNumber = parseInt(Math.round(Math.random() * 25));
    let randomLetter = atozSplit[randomNumber];
    return randomLetter;
}
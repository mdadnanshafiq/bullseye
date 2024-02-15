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
    } else if (key === display.innerText.toLowerCase()) {
        
        score++;
        scoreBtn.innerText = score;
        removeColor(key);
        display.innerText = random();
        setColor(display.innerText.toLowerCase());
    } else {

        life--;
        lifeBtn.innerText = life;
        if(lifeBtn.innerText === '0'){
            endGame();
            finalScore.innerText = score;
            removeColor(display.innerText.toLowerCase());
        }
        
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
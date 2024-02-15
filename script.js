const home = document.getElementById('home');
const game = document.getElementById('game');
const result = document.getElementById('result');
// ---------------------------------------------
const playBtn = document.getElementById('playBtn');
const playBtn2 = document.getElementById('playBtn2');
const lifeBtn = document.getElementById('lifeBtn');
const scoreBtn = document.getElementById('scoreBtn');
// ----------------------------------------------------
const display = document.getElementById('display');
const finalScore = document.getElementById('finalScore');


playBtn.addEventListener('click', playNow);
playBtn2.addEventListener('click', playNow);


document.addEventListener('keyup', function (e) {
    if (e.key === 'Escape') {
        endGame();
    }
});


document.addEventListener('keyup', function (e) {
    if (e.key === 'Enter') {
        
        display.innerText = random();
        playNow();
        
    }
});



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

    setColor(display.innerText.toLowerCase());
}

function endGame() {
    home.classList.add('hidden');
    result.classList.remove('hidden');
    game.classList.add('hidden');

    removeColor(display.innerText.toLowerCase());

}

function random() {
    const atoz = 'aquickbrownfoxjumpsoverthelazydogs';
    const atozSplit = atoz.split('');
    let randomNumber = parseInt(Math.round(Math.random() * 25));
    let randomLetter = atozSplit[randomNumber];
    return randomLetter;
}
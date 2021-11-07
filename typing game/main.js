window.addEventListener('load' , init )


let time = 6
let score = 0
let isPlaying

const wordInput = document.querySelector('#word-input');
const currentWord = document.querySelector('#current-word');
const scoreDisplay = document.querySelector('#score');
const timeDisplay = document.querySelector('#time');
const message = document.querySelector('#message');
const seconds = document.querySelector('#seconds');
const highscoreDisplay = document.querySelector('#highscore');

const words = [
  'hat',
  'river',
  'lucky',
  'statue',
  'generate',
  'stubborn',
  'cocktail',
  'runaway',
  'joke',
  'developer',
  'establishment',
  'hero',
  'javascript',
  'nutrition',
  'revolver',
  'echo',
  'siblings',
  'investigate',
  'horrendous',
  'symptom',
  'laughter',
  'magic',
  'master',
  'space',
  'definition'
];

function init() {
    showWord(words),
    wordInput.addEventListener('input' , startMach);
    setInterval(countDown, 1000);
    setInterval(checkStatus , 50);
}

function startMach(){
  if(matchWord()){
    isPlaying = true;
    time = 6;
    showWord(words);
    wordInput.value = '';
    score++;
  }

  if (score === -1 ){
    scoreDisplay.innerHTML = 0
  }else{
    scoreDisplay.innerHTML = score;
  }
  
}

function matchWord() {
  if(wordInput.value === currentWord.innerHTML) {
    message.innerHTML = 'Correct';
    return true
  }else{
    message.innerHTML = '';
    return false
  }
}

function showWord(words){
    const randIndex = Math.floor(Math.random() * words.length);
    currentWord.innerHTML = words[randIndex]
}

function countDown() {
  if(time > 0){
    time--
  } else if(time === 0){
    isPlaying = false;
  }
  timeDisplay.innerHTML = time
}

function checkStatus() {
  if(!isPlaying && time === 0 ){
    message.innerHTML = 'Game Over'
    score = -1
  }
}

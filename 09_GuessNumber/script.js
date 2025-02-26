let random = parseInt((Math.random() * 100)+1)

const submit = document.querySelector('#subt'); 
const userInput = document.querySelector('#guessField')
const guesslot = document.querySelector('.guesses');
const lowOrHigh = document.querySelector('.lowOrHi');
const remaining = document.querySelector('.lastResult');

const startOver = document.querySelector('.resultParas');

const p = document.createElement('p');
let preyGuess =[];
let numGuess = 1;

let playGame = true;

if(playGame)
{
    submit.addEventListener('click',function (e)
{
    e.preventDefault();
    const guess = parseInt(userInput.value)
    console.log(guess);
    validateGuess(guess);
})
}


function validateGuess(guess)
{
    if(isNaN(guess))
    {
        alert( 'please enter valid number');
    }
    else if(guess <1)
    {
        alert( 'please enter  number greater than 1');
    }
    else if(guess >100)
    {
     alert( 'please enter number less than 100');
    }
    else{
        preyGuess.push(guess); //to add in array

        if(numGuess === 11)
        {
            displayGuess(guess);
            displayMessage(`Game Over. Random Number was ${random}`)
            endGame();
        }
        else
        {
            displayGuess(guess);
            checkguess(guess);
        }
    }

}

function checkguess(guess)
{
    if(guess===random)
    {
        displayMessage(`Ur Guess is right`)
        endGame();
    }
    else if(guess < random)
    {
        displayMessage(`Number is too Low `)
    }
    else if(guess > random)
    {
        displayMessage(`Number is too high`)
    }
}

function displayGuess(guess)
{
    userInput.value = ``
    guesslot.innerHTML += `${guess}  `;
    numGuess++;
    remaining.innerHTML = `${11-numGuess}`
}

function displayMessage(message)
{
    lowOrHigh.innerHTML = `<h2>${message}</h2>`
}

function endGame()
{
    userInput.value =''
    userInput.setAttribute('disabled','');
    p.classList.add('button')
    p.innerHTML = `<h3 id ="newGame">Start New Game</h3>`
    startOver.appendChild(p)
    playGame = false;
    newGame();
}

function newGame()
{
   const newGamebtn =  document.querySelector('#newGame')
   newGamebtn.addEventListener('click',function(e)
{
    random =  parseInt((Math.random() * 100)+1)
    preyGuess = [];
    numGuess = 1;
    guesslot.innerHTML = '';
    remaining.innerHTML = `${11 - numGuess}`
    userInput.removeAttribute('disabled')
    startOver.removeChild(p);
    playGame = true;

})
}
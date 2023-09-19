const input = document.querySelector('#search');
const button = document.querySelector('#submit');
const computerNumber = Math.floor(Math.random()*30) +1;
console.log(computerNumber);

const remainGuess = document.querySelector('#guess_remain');
const previousGuess = document.querySelector('#guess_previous');
let guessesCount = 5;

button.addEventListener('click', play);

input.addEventListener ('keypress', function(e) {
    if(e.keyCode === 13) {
        play();
    }
})

function play () {
    const userNumber = input.value;
    input.value = '';

    guessesCount--;
    remainGuess.textContent = guessesCount;
    
    previousGuess.textContent += userNumber + ' ';
 

    if (guessesCount === 0) {
        if(Number(userNumber) === computerNumber) {
            victory();
        }
        else {
            Swal.fire({
                title: 'Game Over',
                text: 'The right answer was ' + computerNumber + '.',
                padding: '3em',
                background: '#fff url(/assets/img/lego.jpeg)',
                confirmButtonColor: '#ed2683', 
                heightAuto: false,
                backdrop: `
                  rgba(0,0,123,0.4)
                  left top
                  no-repeat
                `
              })
            const newGame = document.createElement('button');
            const buttonContainer = document.querySelector('.buttonContainer');
            newGame.innerHTML = 'New Game';
            newGame.classList.add('newGame');
            buttonContainer.appendChild(newGame);
            newGame.addEventListener('click', () => {
                window.location.reload();
            })
            input.setAttribute('disabled', '');
            button.setAttribute('disabled', '');
        }
    }
    else {
 
        if(userNumber < 0 || userNumber > 30) {
            Swal.fire({
                icon: 'error',
                title: 'Oops...',
                text: 'Add a number from 1 to 30.',
                confirmButtonColor: '#ed2683',
                heightAuto: false
            })
        }
        else if (isNaN(userNumber)) {
            Swal.fire({
                icon: 'error',
                title: 'Oops...',
                text: 'You should add only numbers.',
                confirmButtonColor: '#ed2683',
                heightAuto: false
            })
        }
        else {
            if (userNumber < computerNumber) {
                Swal.fire({
                    title: "That's too low.",
                    text: 'Try Again!',
                    confirmButtonColor: '#ed2683',
                    heightAuto: false
                })
            }
            else if (userNumber > computerNumber) {
                Swal.fire({
                    title: "That's too high.",
                    text: 'Try Again!',
                    confirmButtonColor: '#ed2683',
                    heightAuto: false
                })
        }
            else {
                victory ();
            
            }
        }
    }
}

function victory () {
    Swal.fire({
        title: 'You got it right!',
        padding: '3em',
        background: '#fff url(/assets/img/lego.jpeg)',
        confirmButtonText: 'Congratulations',
        confirmButtonColor: '#ed2683', 
        heightAuto: false,
        backdrop: `
          rgba(0,0,123,0.4)
          left top
          no-repeat
        `
      })
      const newGame = document.createElement('button');
      const buttonContainer = document.querySelector('.buttonContainer');
      newGame.innerHTML = 'New Game';
      newGame.classList.add('newGame');
      buttonContainer.appendChild(newGame);
      newGame.addEventListener('click', () => {
          window.location.reload();
      })
      input.setAttribute('disabled', '');
      button.setAttribute('disabled', '');
}

let text = 'Can you guess what it is?';
let i = 0;
let speed = 70;

function type() {
    if( i < text.length) {
       document.querySelector('#text').textContent += text.charAt(i);
       i++;
       setTimeout(type, speed);
    }
}

type();

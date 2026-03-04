let userScoreVal = 0;
let compScoreVal = 0;
let userScore = document.querySelector('#user-score');
let compScore = document.querySelector('#comp-score');
let msg = document.querySelector('#msg');
let container = document.querySelector('.msg-container');
let choices = document.querySelectorAll('.choice');

const getComputerChoice = () => {
    const options = ["rock", "paper", "scissors"];
    const randomIdx = Math.floor(Math.random() * 3);
    return options[randomIdx];
}
const playGame = (userChoice) => {
        console.log("playGame called with userChoice:", userChoice);
        const computerChoice = getComputerChoice();
          console.log("playGame called with ComputerChoice:", computerChoice);
    
            if (userChoice === computerChoice) {
             msg.innerHTML = "It's a draw! Play Again!";
             msg.style.backgroundColor = "black";

            } else if   (userChoice === 'rock' && computerChoice === 'scissors' || 
                        userChoice === 'paper' && computerChoice === 'rock' || 
                        userChoice === 'scissors' && computerChoice === 'paper' )  {
                            userScoreVal++;
                            userScore.innerHTML = userScoreVal;
                            msg.innerHTML = "You win!";
                            msg.style.backgroundColor = "green";

                } else {
                    compScoreVal++;
                compScore.innerHTML = compScoreVal;
                msg.innerHTML = "Computer wins!";
                msg.style.backgroundColor = "red";
                 }
                    
}


choices.forEach(choice => {
    choice.addEventListener('click', () => {
        const userChoice = choice.id;
        playGame(userChoice);
    });
});
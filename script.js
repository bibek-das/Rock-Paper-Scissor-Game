let userScore = 0;
let compScore = 0;

const choices = document.querySelectorAll(".choice");

//accessing user and comp score
const userScorePara = document.querySelector("#user-score");
const compScorePara = document.querySelector("#comp-score");
// accessing msg paragraph
const msg = document.querySelector("#msg");


//darw game

const drawGame = () =>{
    console.log("game was draw");
    msg.innerText = "This Round Was Draw. Try again";
    msg.style.backgroundColor = "yellow";
    msg.style.color = "purple";
}


// user win
const showWinner = (userWin, userChoice, compChoice) =>{
    if(userWin){
        userScore++;
        userScorePara.innerText = userScore;
        console.log("You Win!");
        msg.innerText = `You win! Your ${userChoice} beats ${compChoice}`;
        msg.style.backgroundColor = "green";
        msg.style.color = "white";
    }else{
        compScore++;
         compScorePara.innerText = compScore;
        console.log("You Lose.");
        msg.innerText = `You lost. ${compChoice} beats your ${userChoice}`;
        msg.style.backgroundColor = "red";
        msg.style.color = "white";
    }
}

// for computer
const genCompChoice = () => {
  const options = ["rock", "paper", "scissors"];
  const randIdx = Math.floor(Math.random() * 3);
  return options[randIdx];
};

// game conditions
const playGame = (userChoice) =>{
    console.log("user choice = ", userChoice);

    const compChoice = genCompChoice();
    console.log("comp choice = ", compChoice);

    if(userChoice === compChoice){
        drawGame();
    }
    else{
        let userWin = true;
        if(userChoice == "rock"){
            userWin = compChoice === "paper" ? false : true;
        }
        else if(userChoice == "paper"){
            userWin = compChoice === "sciessors" ? false : true;
        }
        else{
            userWin = compChoice === "rock" ? false : true;
        }

        showWinner(userWin, userChoice, compChoice);
    }
}

//user choice
choices.forEach((choice) => {
  choice.addEventListener("click", () => {
    const userChoice = choice.getAttribute("id");
    playGame(userChoice);
  });
});
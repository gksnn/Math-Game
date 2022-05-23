const startResetButton = document.querySelector("#startreset");
const scoreValue = document.querySelector("#scorevalue");
const correctAns = document.querySelector("#correct");
const wrongAns = document.querySelector("#wrong");
const gameOver = document.querySelector("#gameover");
const timeRemaining = document.querySelector("#timeremaining");
const questionBox = document.querySelector("#question");
const timeRemainingValue= document.querySelector(".timeremainingvalue");



let playing = false;
let score;
let timeremaining;
let correctAnswer ;


addEventListener();
//EventListeners
function addEventListener(){
    startResetButton.addEventListener("click",startGame);

}

//Start Game    
function startGame(e){
    if(playing == true){
        location.reload();
    }else{
        playing=true;
        score = 0;
        scoreValue.innerHTML = score;
        timeRemaining.style.display = "block";
        startResetButton.innerHTML ="Reset Game";
        gameOver.style.display ="none";
        startCountDown();
        generateQA();
    }
}

//Clicking on an answer box
for(i=1 ; i<5; i++){
    document.getElementById("box"+i).onclick = 
    function(){
        if(playing == true){
            if(this.innerHTML == correctAnswer){
                score++;
                scoreValue.innerHTML = score;


                    correctAns.style.display="block";
                    wrongAns.style.display="none";
                setTimeout(function(){
                    correctAns.style.display = "block";
                }, 1000);
                    generateQA();
                }else{
                    correctAns.style.display="none";
                    wrongAns.style.display="block";
                    setTimeout(function(){
                    wrongAns.style.display = "block";
                }, 1000);
            }
        }
    }
}





//Time countdown
function startCountDown(){
    let timeremaining = 10;
      action =setInterval(function(){
        timeremaining -= 1

        timeRemainingValue.innerHTML = timeremaining;
        if(timeremaining == 0){
            stopCountDown();
            //show score 
            gameOver.style.display="block"
            gameOver.innerHTML ="<p>GAME OVER!</p><p>YOUR SCORE İS: " +score + "<p>"
            //hide countdown
            timeRemaining.style.display = "none";
            correctAns.style.display = "none";
            wrongAns.style.display = "none";
            playing = false;
            startResetButton.innerHTML ="Start Game"
            
        }
    },1000)
}

//Stop Count Down
function stopCountDown(){
    clearInterval(action);
}


//Generate question and multiple answers
function generateQA(){
    let x = Math.round(Math.random()*9)+1;
    let y = Math.round(Math.random()*9)+1;
    correctAnswer = x*y;

    questionBox.innerHTML= x + "x" + y;
    
    let correctPosition = Math.round(Math.random()*3)+1;
 
    document.getElementById("box"+correctPosition).innerHTML =correctAnswer;//fill one box with correct answer
    let answer = [correctAnswer];
    for(i=1; i<5 ; i++){
        if(i !== correctPosition){
            let wrongAnswer;
            do{
                 wrongAnswer = (Math.round(Math.random()*9)+1) * (Math.round(Math.random()*9)+1);// wrong answer
                
            }while(answer.indexOf(wrongAnswer)>-1)

            document.getElementById("box" + i).innerHTML = wrongAnswer;

                    answer.push(wrongAnswer);
                    
        } 
    }
}




document.addEventListener("DOMContentLoaded", function() {
    let buttons = document.getElementsByTagName("button");

    for (let button of buttons) {
        button.addEventListener("click", function(){
            if (this.getAttribute("data-type") === "submit"){
                alert ("You clicked Submit!");
            } else {
                let gametype = this.getAttribute("data-type");
                runGame(gameType);
            }
        });
    }

    runGame("addition");
});


function runGame(gameType) {
 let num1 = Math.floor (Math.random() * 25 + 1);
 let num2 = Math.floor (Math.random() * 25 + 1);

 if(gameType === "addition"){
    displayAddtionQuestion (num1, num2);
 } else {
     alert(`Unkown game type: ${gamestype}`);
     throw `Unkown game type: ${gamestype}: aborting`;
 }
}

function checkAnswer () {

}

function calculateCorrectrAnswer() {

}

function incrementScore() {

}

function incrementWrongAnswer (operand1, operand2) {
    document.getElementById("operand1").textContent=operand1;
    document.getElementById("operator").textContent="+";
    document.getElementById("operand2").textContent=operand2;
}

function displayAddtionQuestion () {

}

function displaySubtractQuestion () {
    
}

function displayMultiplyQuestion () {
    
}
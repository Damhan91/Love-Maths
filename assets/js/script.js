document.addEventListener("DOMContentLoaded", function() {
    let buttons = document.getElementsByTagName("button");

    for (let button of buttons) {
        button.addEventListener("click", function(){
            if (this.getAttribute("data-type") === "submit"){
                alert ("You clicked Submit!");
            } else {
                let gametype = this.getAttribute("data-type");
                alert(`You clicked ${gametype}`);
            }
        });
    }
});


function runGame() {
 let num1 = Math.floor (Math.random() * 25 + 1);
 let num2 = Math.floor (Math.random() * 25 + 1);
}

function checkAnswer () {

}

function calculateCorrectrAnswer() {

}

function incrementScore() {

}

function incrementWrongAnswer () {

}

function displayAddtionQuestion () {

}

function displaySubtractQuestion () {
    
}

function displayMultiplyQuestion () {
    
}
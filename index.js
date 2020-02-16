//generate dice of both players

function rollDice() {

  var randomNumber1 = Math.floor(Math.random() * 6) + 1; //random 1-6
  var randomDiceImage1 = "dice" + randomNumber1 + ".png"; //dice1.png - dice6.png
  var randomImageSource1 = "images/" + randomDiceImage1; //images/dice1.png - images/dice6.png
  var diceP1 = document.querySelectorAll("img")[0];
  diceP1.setAttribute("src", randomImageSource1); //change dice image player1

  var randomNumber2 = Math.floor(Math.random() * 6) + 1; //random 1-6
  var randomDiceImage2 = "dice" + randomNumber2 + ".png"; //dice1.png - dice6.png
  var randomImageSource2 = "images/" + randomDiceImage2; //images/dice1.png - images/dice6.png
  var diceP2 = document.querySelectorAll("img")[1];
  diceP2.setAttribute("src", randomImageSource2); //change dice image player2

  //if each player wins

  if (randomNumber1 > randomNumber2) {
    document.querySelector(".dice-1 p").innerHTML = "PLAYER ONE WINS!";
    document.querySelector(".dice-2 p").innerHTML = "PLAYER TWO LOSES..";
  } else if (randomNumber2 > randomNumber1) {
    document.querySelector(".dice-2 p").innerHTML = "PLAYER TWO WINS!";
    document.querySelector(".dice-1 p").innerHTML = "PLAYER ONE LOSES..";
  } else {
    document.querySelector(".dice-2 p").innerHTML = "IT'S A DRAW!";
    document.querySelector(".dice-1 p").innerHTML = "IT'S A DRAW!";
  }

};
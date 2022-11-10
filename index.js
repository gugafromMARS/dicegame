var randomNumber1 = Math.floor(Math.random() * 6) + 1;

if (randomNumber1 === 1) {
    document.querySelectorAll("img")[0].src = "images/dice1.png";
} else if (randomNumber1 === 2) {
    document.querySelectorAll("img")[0].src = "images/dice2.png";
} else if (randomNumber1 === 3) {
    document.querySelectorAll("img")[0].src = "images/dice3.png";
} else if (randomNumber1 === 4) {
    document.querySelectorAll("img")[0].src = "images/dice4.png";
} else if (randomNumber1 === 5) {
    document.querySelectorAll("img")[0].src = "images/dice5.png";
} else {
    document.querySelectorAll("img")[0].src = "images/dice6.png";
}

var randomNumber2 = Math.floor(Math.random() * 6) + 1;

if (randomNumber2 === 1) {
    document.querySelectorAll("img")[1].src = "images/dice1.png";
} else if (randomNumber2 === 2) {
    document.querySelectorAll("img")[1].src = "images/dice2.png";
} else if (randomNumber2 === 3) {
    document.querySelectorAll("img")[1].src = "images/dice3.png";
} else if (randomNumber2 === 4) {
    document.querySelectorAll("img")[1].src = "images/dice4.png";
} else if (randomNumber2 === 5) {
    document.querySelectorAll("img")[1].src = "images/dice5.png";
} else {
    document.querySelectorAll("img")[1].src = "images/dice6.png";
}


if (randomNumber1 > randomNumber2) {
    document.querySelector("h2").innerHTML = "Player 1 win, congrats!"
} else if (randomNumber1 < randomNumber2) {
    document.querySelector("h2").innerHTML = "Player 2 win, congrats!"
} else if (randomNumber1 === randomNumber2) {
    document.querySelector("h2").innerHTML = "Draw!"
}



/*  feito pela ANGELA YU
var randomNumber1 = Math.floor(Math.random() * 6) + 1;

var randomImageSource = "image/dice" + randomNumber1 + ".png";

document.querySelectorAll("img")[0].setAttribute("src", randomImageSource);

var randomNumber2 = Math.floor(Math.random() * 6) + 1;

var randomImageSource2 = "image/dice" + randomNumber2 + ".png";

document.querySelectorAll("img")[1].setAttribute("src", randomImageSource2);

if (randomImageSource > randomImageSource2) {
    document.querySelector("h2").innerHTML = "Player 1 win, congrats!";
} else if {
    document.querySelector("h2").innerHTML = "Player 2 win, congrats!";
} else {
    document.querySelector("h2").innerHTML = "DRAW!";
}

*/
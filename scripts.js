const images = ["images/dice1.png", "images/dice2.png", "images/dice3.png", "images/dice4.png", "images/dice5.png", "images/dice6.png"];

let dice1 = Math.floor(Math.random() * 6);
let dice2 = Math.floor(Math.random() * 6);

const displayText = document.querySelector("h1");
const dice1Image = document.querySelector("#dice1");
const dice2Image = document.querySelector("#dice2");

if (dice1 > dice2) {
    displayText.textContent = "🎉Player 1 wins!";
}else if (dice1 < dice2) {
    displayText.textContent = "Player 2 wins!🎉";
}else {
    displayText.textContent = "It's a tie!";
}

dice1Image.setAttribute("src", images[dice1]);
dice2Image.setAttribute("src", images[dice2]);

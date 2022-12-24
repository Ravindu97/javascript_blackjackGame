let sum = 0;
let cards = []; // array ordered list of items
let hasBlackJack = false;
let isAlive = false;
let message = "";

let messageEl = document.getElementById("message-el");
let sumEl = document.getElementById("sum-el");
let cardsEl = document.querySelector("#cards-el");

let playerEl = document.getElementById("player-el");

let player = {
  name: "Per",
  chips: 145,
};

playerEl.textContent = player.name + ": $" + player.chips;

function startGame() {
  isAlive = true;
  let firstCard = getRandomCard();
  let secondCard = getRandomCard();
  cards = [firstCard, secondCard];
  sum = firstCard + secondCard;

  renderGame();
}

function renderGame() {
  sumEl.textContent = "Sum: " + sum;
  cardsEl.textContent = "Cards: ";

  for (let i = 0; i < cards.length; i++) {
    cardsEl.textContent += cards[i] + " ";
  }

  if (sum <= 20) {
    message = "Do you want to draw a new card?";
  } else if (sum === 21) {
    message = "You've got Blackjack!";
    hasBlackJack = true;
  } else {
    message = "You're out of the game!";
    isAlive = false;
  }
  messageEl.textContent = message;
}

function newCard() {
  if (isAlive === true && hasBlackJack === false) {
    let newCard = getRandomCard();
    sum += newCard;
    cards.push(newCard);
    renderGame();
  }
}

function getRandomCard() {
  let randomNumber = Math.floor(Math.random() * 13) + 1;
  console.log(randomNumber);
  if (randomNumber > 10) {
    return 10;
  } else if (randomNumber === 1) {
    return 1;
  } else {
    return randomNumber;
  }
}

function reset() {
  sum = 0;
  cards = [];
  renderGame();
}

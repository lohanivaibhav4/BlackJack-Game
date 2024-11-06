let firstCard = 15;
let secondCard = 6;
let newCard = 5;
let sum = firstCard + secondCard ;
let hasBlackJack = false
let isAlive = true
let message = ""
let messEl = document.getElementById("message-el")
let sumEl = document.querySelector("#sum")
let cardEl = document.getElementById("cards")


function startGame(){
    renderGame()
}

function renderGame(){

    cardEl.textContent ="Cards :- " + firstCard +" " + secondCard
    sumEl.textContent = "Sum :- " + sum

    if (sum < 21) {
        message = "Do you want to draw a new card? 🙂"
        
    } else if (sum === 21) {
        message = "Wohoo! You've got Blackjack! 🥳"
        hasBlackJack = true
        
    
    } else {
        message = "You're out of the game! 😭"
        isAlive = false
    }
    
    messEl.textContent = message;
}
function newCards(){
    sum += newCard;
    sumEl.textContent = "Sum :- " + sum
    cardEl.textContent = "Cards :- " + firstCard +" " + secondCard + " " + newCard
    renderGame();
}
function resetGame(){
    
}


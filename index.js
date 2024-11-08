let cards = [];
let sum = 0 ;
let hasBlackJack = false
let isAlive = false;
let message = ""
let messEl = document.getElementById("message-el")
let sumEl = document.querySelector("#sum")
let cardEl = document.getElementById("cards")

let player = {
    name: "Player",
    chips: 100
}

let playerEl = getElementById("player-el")
playerEl.textContent = player.name + ": Rs." +player.chips


function startGame(){
    isAlive = true;
    hasBlackJack = false;
    let firstCard = getRandomCard();
    let secondCard = getRandomCard();
    cards = [firstCard, secondCard];
    sum = firstCard + secondCard;
    renderGame()
}

function renderGame(){

    cardEl.textContent = "Cards: "

    for(let i =0; i<cards.length;i++)
    {
        cardEl.textContent += " " + cards[i]
    }
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
    if(isAlive === true && hasBlackJack ===false)
    {
        let newCard = getRandomCard();
        sum += newCard;
        cards.push(newCard);
        renderGame();
    }
    else
    {
        messEl.textContent = "Invalid Action !";
    }
}
function resetGame(){
    
}
function getRandomCard(){
    let num = Math.floor(Math.random() * 13) + 1 ;
    if(num === 1) return 11;
    else if (num >=11 ) return 10;
    else return num;
}


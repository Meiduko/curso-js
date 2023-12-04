var gameTable;
var endGame;
var endGameButton;
var selectedCard
var selectedCharacter
var selectedCards = [];
var selectedCharacters = [];
var cards = {
    0: ['./img/picachu.png', './img/bulbasur.png', './img/eeve.png'],
    1: ['./img/goku.png', './img/vegeta.png', './img/goten.png'],
    2: ['./img/mario.png', './img/luigi.png', './img/toad.webp'],
}
function getRandomInt(max){
    return Math.floor(Math.random() * max)
}
//Fill form w/ user data
function fillForm(){
    document.getElementById('avatarImg').src = avatarImg;
    document.getElementById('nick').value = nick;
}
//Create room
function createRoom(){
    gameTable = document.getElementById('game');
    let items = "";
    const totalCards = parseInt(size) * parseInt(size);
    const totalPairs = parseInt(size) * parseInt(size) / 2;
    const keysToRemove = {}; // Almacena las claves de las cartas usadas
    const keys = Object.keys(cards)
    let usedKeys = 0; 
    while (usedKeys < totalPairs) {
        var key = getRandomInt(keys.length)
        if (!keysToRemove[key]) {
            keysToRemove[key] = [];
        }
        // Check for cards in current key
        if (cards[key].length > 0) {
            const randomObject = getRandomInt(cards[key].length);

            // Agregar la carta al tablero
            items += `<div class="cardContainer">
            <img class="card" src="./img/carta.webp" alt="" >
            <img class="character hidden" src="${cards[key][randomObject]}" height="225px" alt="">
            </div>`;
            items += `<div class="cardContainer">
            <img class="card" src="./img/carta.webp" alt="" >
            <img class="character hidden" src="${cards[key][randomObject]}" height="225px" alt="">
            </div>`;

            // Delete generated cards
            keysToRemove[key].push(randomObject);
            cards[key].splice(randomObject, 1);
            usedKeys += 1    
        }
    }    
    items = shuffleCards(items);
    gameTable.innerHTML = items;
    endGame = document.getElementById('endGame');
    endGameButton = endGame.querySelector('button');
    endGameButton.addEventListener('click', startGame);
}
// shuffleCards
function shuffleCards(cards) {
    const cardsArray = cards.split('</div>').filter(item => item.trim() !== '');
    for (let i = cardsArray.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [cardsArray[i], cardsArray[j]] = [cardsArray[j], cardsArray[i]];
    }
    return cardsArray.join('</div>');
    console.log(cardsArray)
}
//Start playing
function startGame(){
    endGame.style.zIndex = '1';
    endGameButton.innerText += ' again';
    let cards = document.getElementsByClassName('card');
    let characters = document.getElementsByClassName('character');
    setTimeout(() => {
        for (let card of cards){
            card.classList.add('hidden')
        }
        for (let character of characters){
            character.classList.remove('hidden');
        }
    }, 100);
    setTimeout(() => {
        for (let card of cards){
            card.classList.remove('hidden')
        }
        for (let character of characters){
            character.classList.add('hidden');
        }
    }, 1500);
    for (let card of cards){
        card.addEventListener('click',showCard)
    }
    for (let character of characters){
        character.addEventListener('click',hideCard);
    }
};
//Show cards 1 by 1
function showCard(event){
    selectedCard = event.target;
    selectedCards.push(selectedCard);
    selectedCharacter = event.target.nextElementSibling;
    selectedCharacters.push(selectedCharacter);
    selectedCard.classList.add('hidden');
    selectedCharacter.classList.remove('hidden');
    setInterval(checkPairs, 1500)
}
function hideCard(event){
    let selectedCharacter = event.target;
    let selectedCard = event.target.previousElementSibling;
    selectedCard.classList.remove('hidden');
    selectedCharacter.classList.add('hidden');
    selectedCards = [];
    selectedCharacters = [];
    score.value = parseInt(score.value)-1
}
//check pairs
function checkPairs(){
    if (selectedCards.length == 2){
        if (selectedCharacters[0].src == selectedCharacters[1].src){
            score.value = parseInt(score.value)+1
            selectedCharacters = [];
            selectedCards = [];
        }else{
            for (let card of selectedCards){
                card.classList.remove('hidden');
                selectedCards = [];
            }
            for (let character of selectedCharacters){
                character.classList.add('hidden');
                selectedCharacters = [];
            }   
            score.value = parseInt(score.value)-1
        }
    }
}

getUserData();
fillForm();
createRoom();

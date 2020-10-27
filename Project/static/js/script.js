
let Example ;
console.log(Example)

//Challenge 1

function ageInDays(){
    var birthYear = prompt("Enter Birth Year?")
    var totalDays = (2020 - birthYear) * 365
    var h1 = document.createElement('h1')
    var textAnswer = document.createTextNode('You are ' +totalDays+' days old')
    h1.setAttribute('id','ageInDays')
    h1.appendChild(textAnswer)
    document.getElementById('flex-box-result').appendChild(h1)
}

function reset(){
    document.getElementById('ageInDays').remove();
}


//Challenge 2
function generateCat(){
    var image = document.createElement('img');
    var div = document.getElementById('flex-cat-gen')
    image.src = "http://thecatapi.com/api/images/get?format=src&type=gif&size=small"
    div.appendChild(image)
}

//Challenge 3
function rpsGame(yourChoice){
    console.log(yourChoice)
    var humanChoice, botChoice;
    humanChoice = yourChoice.id
    botChoice = numberToChoice(randToRpsInt())

    result= decideWinner(humanChoice,botChoice); // [0 ,1 ] human Lost | bot won
    console.log(result)
    message = finalMessage(result) //You Won/lost/tied & color {"message": "you Won" ,"color" : "Green" }
    console.log(message)
    rpsFrontEnd(yourChoice.id,botChoice,message)//replace the div
}

function randToRpsInt(){
    return Math.floor(Math.random(0,1,2)*3)
}

function numberToChoice(number){
    return ['stone','paper','scissors'][number]
}

function decideWinner(yourChoice,computerChoice){
    var rpsDataBase = {
        'stone' :{
            'scissors':1,
            'stone':0.5,
            'paper':0
        },
        'paper':{
            'stone': 1,
            'paper' : 0.5,
            'scissors' : 0,
        },
        'scissors':{
            'paper': 1,
            'scissors' : 0.5,
            'stone' : 0
        }
    }

    var yourScore = rpsDataBase[yourChoice][computerChoice]
    var computerScore = rpsDataBase[computerChoice][yourChoice]
    return [yourScore , computerScore]
}

function finalMessage(result){
    if(result[0]>result[1]){
        return {
            "message" : "You Won",
            "color" : "green"
        }
    }
    else if(result[1]>result[0]) {
        return{
            "message" :'You Lost',
            "color":"red"
        }
    }
    else{
        return{
            "message" :'You Tied',
            "color":"yello"
        }
    }

}

function rpsFrontEnd(humanImageChoice,botImageChoice,finalMessage){
    var imagesDatabase = {
        'stone' : document.getElementById('stone').src,
        'paper' : document.getElementById('paper').src,
        'scissors' : document.getElementById('scissors').src
    }

    document.getElementById('stone').remove()
    document.getElementById('paper').remove()
    document.getElementById('scissors').remove()

    var humanDiv = document.createElement('div')
    var botDiv = document.createElement('div')
    var messageDiv = document.createElement('div')
    messageDiv.innerHTML = "<h1 style='color:" +finalMessage['color'] +"; font-size: 60px; padding : 30px;'>"+finalMessage['message']+"</h1>"
    botDiv.innerHTML = "<img src='" + imagesDatabase[botImageChoice]+"' height=150 width=150 style='box-shadow:0px 10px 50px rgba(243,38,24,1)'>"
    humanDiv.innerHTML = "<img src='" + imagesDatabase[humanImageChoice]+"' height=150 width=150 style='box-shadow:0px 10px 50px rgba(37,50,233,1)'>"
    document.getElementById('flex-box-rps-div').appendChild(humanDiv)
    document.getElementById('flex-box-rps-div').appendChild(messageDiv)
    document.getElementById('flex-box-rps-div').appendChild(botDiv)
}


//Challenge 4
var all_buttons = document.getElementsByTagName('button')

var copyAllButtons = []

for(let i=0;i<all_buttons.length ;i++){
    copyAllButtons.push(all_buttons[i].classList[1])
}



function buttonColorChange(buttonThingy){
    if(buttonThingy.value === 'red'){
        buttonRed()
    }
    else if (buttonThingy.value === 'green'){
        buttonGreen()
    }
    else if (buttonThingy.value === 'reset'){
        buttonReset()
    }
    else if(buttonThingy.value === 'random'){
        buttonRandom();
    }

}

function buttonRed(){
    for(var i=0;i<all_buttons.length ;i++){
        all_buttons[i].classList.remove(all_buttons[i].classList[1])
        all_buttons[i].classList.add('btn-danger')
    }   
}

function buttonGreen(){
    for(var i=0;i<all_buttons.length ;i++){
        all_buttons[i].classList.remove(all_buttons[i].classList[1])
        all_buttons[i].classList.add('btn-success')
    }   
}

function buttonRandom(){
    for(var i=0;i<all_buttons.length ;i++){
        all_buttons[i].classList.remove(all_buttons[i].classList[1])
        var randomClassData = randomClass()
        all_buttons[i].classList.add(randomClassData)
    }   
}

function randomClass(){
    return copyAllButtons[Math.floor(Math.random(all_buttons.length)*7)]
}

function buttonReset(){
    for(var i=0;i<all_buttons.length ;i++){
        all_buttons[i].classList.remove(all_buttons[i].classList[1])
        
        all_buttons[i].classList.add(copyAllButtons[i])
    }   
}

//Challenge 5

let blackJackGame = {
    'you':{
        "scorespan":"#your-blackjack-result",
        "div":"#your-box",
        "score":0
    },
    'dealer':{
        "scorespan":"#dealer-blackjack-result",
        "div":"#dealer-box",
        "score":0
    },
    "cards":['2','3','4','5','6','7','8','9','A','K','Q','J'],
    "cardsMap":{'2':2,'3':3,'4':4,'5':5,'6':6,'7':7,'8':8,'9':9,'A':[1,11],'K':10,'Q':10,'J':10},
    'wins' : 0,
    'losses' : 0,
    'draws' : 0,
    'isStand' : false, //stand mode activated
    'turnsOver' : false, // all turns over we can click deal
}

const YOU = blackJackGame['you']
const DEALER = blackJackGame['dealer']

const hitSound = new Audio('static/sounds/swish.m4a')
const winSound = new Audio('static/sounds/cash.mp3')
const lostSound = new Audio('static/sounds/aww.mp3')

document.querySelector('#blackjack-hit-button').addEventListener('click',blackJackHit);
document.querySelector('#blackjack-stand-button').addEventListener('click',blackJackStand);
document.querySelector('#blackjack-deal-button').addEventListener('click',blackJackDeal);

var result = 0;

function blackJackHit(){
    if(blackJackGame['isStand'] === false){
        let card = randomCard()
        showCard(YOU,card);
        updateScore(YOU,card)
        showScore(YOU)
    }
}

function sleep(ms){
    return new Promise(resolve => setTimeout(resolve,ms))
}


async function blackJackStand(){
    blackJackGame['isStand'] = true;
    while(DEALER['score'] < 15 && (blackJackGame['isStand'] === true)){
        let card = randomCard()
        showCard(DEALER,card);
        updateScore(DEALER , card)
        showScore(DEALER)
        await sleep(10000)
    }
    //if(DEALER['score']>15){
        showResult(computeWinner())
        blackJackGame['turnsOver'] = true;
    //}
}

function showCard(activePlayer,card){
    if(activePlayer['score'] <= 21){
        let cardImage = document.createElement('img')
        //`static/images/${card}.png`
        cardImage.src = 'static/images/'+card+'.png';
        document.querySelector(activePlayer['div']).appendChild(cardImage)
        hitSound.play()
    }
}

function updateScore(activePlayer,card){
    //If adding 11 keeps me below 21 add 11 Otherwise add 1
    console.log(blackJackGame['cardsMap'][card].length)
    console.log([card])
    if(blackJackGame['cardsMap'][card].length > 1){
        
        if ((blackJackGame['cardsMap'][card] + activePlayer['score']) <= 21){
            activePlayer['score'] += blackJackGame['cardsMap'][card][1];    
        }
        else{
            activePlayer['score'] += blackJackGame['cardsMap'][card][0];    
        }
    }else{
        activePlayer['score'] += blackJackGame['cardsMap'][card];
    }
}

function showScore(activePlayer){
    if(activePlayer['score'] > 21){
        document.querySelector(activePlayer['scorespan']).textContent = "Bust!.."
        document.querySelector(activePlayer['scorespan']).style.color = 'red'
    }
    else{
        document.querySelector(activePlayer['scorespan']).textContent = activePlayer['score']
    }
}

//Computer winner & Looser
function computeWinner(){
    let winner;
    if(YOU['score'] <= 21){
        if(YOU['score'] > DEALER['score'] || (DEALER['score'] > 21)){
            console.log('You Win!..')
            blackJackGame['wins']++;
            winner = YOU
        }else if(YOU['score'] < DEALER['score']){
            console.log("you lost!...")
            blackJackGame['losses']++;
            winner = DEALER
        }
        else if(YOU['score'] === DEALER['score']){
            console.log('Tied!...')
            blackJackGame['draws']++;
        }
    }else if(YOU['score'] > 21 && DEALER['score']<= 21){
        console.log('You Loast!...')
        blackJackGame['losses']++;
        winner = DEALER
    }
    else if(YOU['score'] > 21 && DEALER['score'] > 21){
        console.log('YOU Drew!...')
        blackJackGame['draws']++;

    }
    console.log('Winner '+ winner )
    return winner
}

function randomCard(){
    let card_no = blackJackGame['cards'][(Math.floor( Math.random()*12))]
    console.log(card_no)
    return card_no;
}

function blackJackDeal(){
    if (blackJackGame['turnsOver']){
    //showResult(computeWinner())
        blackJackGame['isStand'] = false
        let yourImages = document.querySelector('#your-box').querySelectorAll('img')
        let dealerImages = document.querySelector('#dealer-box').querySelectorAll('img')
        console.log(yourImages)
        for(let i=0;i<yourImages.length ; i++){
            yourImages[i].remove()
        }
        for(let i=0;i<dealerImages.length ; i++){
            dealerImages[i].remove()
        }

        YOU['score'] = 0
        DEALER['score'] = 0

        document.querySelector('#your-blackjack-result').textContent = 0;
        document.querySelector('#your-blackjack-result').style = "#ffffff"
        document.querySelector('#dealer-blackjack-result').textContent = 0;
        document.querySelector('#dealer-blackjack-result').style = "white"
        document.querySelector('#blackjack-result').textContent = "Let's play"
        document.querySelector('#blackjack-result').style.color = 'black'
        blackJackGame['turnsOver'] = false
    }
}

function showResult(winner){
    if(blackJackGame['turnsOver'] === true){
        let message, messageColor;
    if( winner === YOU){
        message = 'You Won!....'
        messageColor = 'green'
        winSound.play()
    }
    else if(winner === DEALER){
        message = 'You Lost!...'
        messageColor = 'red'
        lostSound.play();
    }
    else {
        message = "You Drew!.."
        messageColor = 'black'
    }

    document.querySelector('#blackjack-result').textContent = message
    document.querySelector('#blackjack-result').style.color = messageColor
    document.querySelector('#wins').textContent = blackJackGame['wins']
    document.querySelector('#loses').textContent = blackJackGame['losses']
    document.querySelector('draw').textContent = blackJackGame['draws']

    }
    
}
const BOARD = document.querySelector('.board');
const VisibleClassName = "visible";
const VICTORY = document.querySelector('.victory');
const START_BUTTON = document.querySelector('.StartButton');

const TIME__FLIP = 600;

const ELEMENTS = [ '👑', '🎓', '🧤', '🧥', '🧦', '👗'];


const QUANTITY_CARD = 12;

let VISIBLE_CARD = [];

START_BUTTON.addEventListener('click', startGame);

function startGame(){
    [BOARD, VICTORY].forEach(node => node.innerHTML = '');
    const CARD_VALUE = generateArray(ELEMENTS, QUANTITY_CARD);

    CARD_VALUE.forEach(Render);
}

function generateArray(emojis, quantityCard){
    const randomArr = [];
    const elementCount = {};

    for(const emoji of emojis){
        elementCount[emoji] = 0;
    }
    while (randomArr.length < quantityCard){
        const index = Math.floor(Math.random() * emojis.length);
        const element = emojis[index];

        if(elementCount[element] < 2){
            randomArr.push(elementCount[element]);
            elementCount[element]++;
        }
    }
    return randomArr;
}

function Render(emoji){

    const card = document.createElement('div');
    card.classList.add('card')

    const card__item = document.createElement('div');
    card__item.classList.add('card__item');

    const card__front = document.createElement('div');
    card__front.classList.add('card__front');

    const card__back = document.createElement('div');
    card__back.classList.add('card__back');

    card__front.textContent = '?';
    card__back.textContent = emoji;

    
    card__item.appendChild(card__front);
    card__item.appendChild(card__back);

    card.appendChild(card__item);

    card.addEventListener('click', () =>{
        cardClick(card);
    });

    BOARD.appendChild(card);
}


function cardClick(card){
    card.classList.add(VisibleClassName);
    

    
}


//Variables de los elementos de dado
let diceOne = document.getElementsByClassName('one');
let diceTwo = document.getElementsByClassName('two');

//Variable del titulo
let title = document.querySelector('h1');


//funcion para crear nuevo numero aleatorio
function newNumDice() {
    return Math.floor(Math.random() * 7);
}


//funciones para que cambien la cara del dado
function oneDice(dice) {
    let oneRow = dice[0].getElementsByClassName('rowOne')[0];
    let twoRow = dice[0].getElementsByClassName('rowTwo')[0];
    let threeRow = dice[0].getElementsByClassName('rowThree')[0];

    oneRow.getElementsByClassName('pointOne')[0].style.visibility = 'hidden';
    oneRow.getElementsByClassName('pointTwo')[0].style.visibility = 'hidden';
    oneRow.getElementsByClassName('pointThree')[0].style.visibility = 'hidden';

    twoRow.getElementsByClassName('pointFour')[0].style.visibility = 'hidden';
    twoRow.getElementsByClassName('pointFive')[0].style.visibility = 'visible';
    twoRow.getElementsByClassName('pointSix')[0].style.visibility = 'hidden';

    threeRow.getElementsByClassName('pointSeven')[0].style.visibility = 'hidden';
    threeRow.getElementsByClassName('pointEight')[0].style.visibility = 'hidden';
    threeRow.getElementsByClassName('pointNine')[0].style.visibility = 'hidden';
}


function twoDice(dice) {
    let oneRow = dice[0].getElementsByClassName('rowOne')[0];
    let twoRow = dice[0].getElementsByClassName('rowTwo')[0];
    let threeRow = dice[0].getElementsByClassName('rowThree')[0];

    oneRow.getElementsByClassName('pointOne')[0].style.visibility = 'hidden';
    oneRow.getElementsByClassName('pointTwo')[0].style.visibility = 'hidden';
    oneRow.getElementsByClassName('pointThree')[0].style.visibility = 'visible';

    twoRow.getElementsByClassName('pointFour')[0].style.visibility = 'hidden';
    twoRow.getElementsByClassName('pointFive')[0].style.visibility = 'hidden';
    twoRow.getElementsByClassName('pointSix')[0].style.visibility = 'hidden';

    threeRow.getElementsByClassName('pointSeven')[0].style.visibility = 'visible';
    threeRow.getElementsByClassName('pointEight')[0].style.visibility = 'hidden';
    threeRow.getElementsByClassName('pointNine')[0].style.visibility = 'hidden';
}

function threeDice(dice) {
    let oneRow = dice[0].getElementsByClassName('rowOne')[0];
    let twoRow = dice[0].getElementsByClassName('rowTwo')[0];
    let threeRow = dice[0].getElementsByClassName('rowThree')[0];

    oneRow.getElementsByClassName('pointOne')[0].style.visibility = 'hidden';
    oneRow.getElementsByClassName('pointTwo')[0].style.visibility = 'hidden';
    oneRow.getElementsByClassName('pointThree')[0].style.visibility = 'visible';

    twoRow.getElementsByClassName('pointFour')[0].style.visibility = 'hidden';
    twoRow.getElementsByClassName('pointFive')[0].style.visibility = 'visible';
    twoRow.getElementsByClassName('pointSix')[0].style.visibility = 'hidden';

    threeRow.getElementsByClassName('pointSeven')[0].style.visibility = 'visible';
    threeRow.getElementsByClassName('pointEight')[0].style.visibility = 'hidden';
    threeRow.getElementsByClassName('pointNine')[0].style.visibility = 'hidden';
}

function fourDice(dice) {
    let oneRow = dice[0].getElementsByClassName('rowOne')[0];
    let twoRow = dice[0].getElementsByClassName('rowTwo')[0];
    let threeRow = dice[0].getElementsByClassName('rowThree')[0];

    oneRow.getElementsByClassName('pointOne')[0].style.visibility = 'visible';
    oneRow.getElementsByClassName('pointTwo')[0].style.visibility = 'hidden';
    oneRow.getElementsByClassName('pointThree')[0].style.visibility = 'visible';

    twoRow.getElementsByClassName('pointFour')[0].style.visibility = 'hidden';
    twoRow.getElementsByClassName('pointFive')[0].style.visibility = 'hidden';
    twoRow.getElementsByClassName('pointSix')[0].style.visibility = 'hidden';

    threeRow.getElementsByClassName('pointSeven')[0].style.visibility = 'visible';
    threeRow.getElementsByClassName('pointEight')[0].style.visibility = 'hidden';
    threeRow.getElementsByClassName('pointNine')[0].style.visibility = 'visible';
}

function fiveDice(dice) {
    let oneRow = dice[0].getElementsByClassName('rowOne')[0];
    let twoRow = dice[0].getElementsByClassName('rowTwo')[0];
    let threeRow = dice[0].getElementsByClassName('rowThree')[0];

    oneRow.getElementsByClassName('pointOne')[0].style.visibility = 'visible';
    oneRow.getElementsByClassName('pointTwo')[0].style.visibility = 'hidden';
    oneRow.getElementsByClassName('pointThree')[0].style.visibility = 'visible';

    twoRow.getElementsByClassName('pointFour')[0].style.visibility = 'hidden';
    twoRow.getElementsByClassName('pointFive')[0].style.visibility = 'visible';
    twoRow.getElementsByClassName('pointSix')[0].style.visibility = 'hidden';

    threeRow.getElementsByClassName('pointSeven')[0].style.visibility = 'visible';
    threeRow.getElementsByClassName('pointEight')[0].style.visibility = 'hidden';
    threeRow.getElementsByClassName('pointNine')[0].style.visibility = 'visible';
}


function sixDice(dice) {
    let oneRow = dice[0].getElementsByClassName('rowOne')[0];
    let twoRow = dice[0].getElementsByClassName('rowTwo')[0];
    let threeRow = dice[0].getElementsByClassName('rowThree')[0];

    oneRow.getElementsByClassName('pointOne')[0].style.visibility = 'visible';
    oneRow.getElementsByClassName('pointTwo')[0].style.visibility = 'hidden';
    oneRow.getElementsByClassName('pointThree')[0].style.visibility = 'visible';

    twoRow.getElementsByClassName('pointFour')[0].style.visibility = 'visible';
    twoRow.getElementsByClassName('pointFive')[0].style.visibility = 'hidden';
    twoRow.getElementsByClassName('pointSix')[0].style.visibility = 'visible';

    threeRow.getElementsByClassName('pointSeven')[0].style.visibility = 'visible';
    threeRow.getElementsByClassName('pointEight')[0].style.visibility = 'hidden';
    threeRow.getElementsByClassName('pointNine')[0].style.visibility = 'visible';
}

// variable que contiene primer num random
let numberDice = newNumDice();

// condiciones para ver que num random toca para llamar la funcion que asigne la carilla del dado
if (numberDice == 0) {
    oneDice(diceOne);
} else if (numberDice == 1) {
    oneDice(diceOne);
}else if (numberDice == 2) {
    twoDice(diceOne);
}else if (numberDice == 3) {
    threeDice(diceOne);
}else if (numberDice == 4) {
    fourDice(diceOne);
}else if (numberDice == 5) {
    fiveDice(diceOne);
}else if (numberDice == 6) {
    sixDice(diceOne);
}

// segunda variable de num random
let numberDiceTwo = newNumDice();


if (numberDiceTwo == 0) {
    oneDice(diceTwo);
} else if (numberDiceTwo == 1) {
    oneDice(diceTwo);
}else if (numberDiceTwo == 2) {
    twoDice(diceTwo);
}else if (numberDiceTwo == 3) {
    threeDice(diceTwo);
}else if (numberDiceTwo == 4) {
    fourDice(diceTwo);
}else if (numberDiceTwo == 5) {
    fiveDice(diceTwo);
}else if (numberDiceTwo == 6) {
    sixDice(diceTwo);
}



if (numberDice > numberDiceTwo) {
    console.log('Jugador 1 ganó!');
    title.textContent = 'Jugador 1 ganó';
} else if (numberDice < numberDiceTwo) {
    console.log('Jugador 2 ganó!')
    title.textContent = 'Jugador 2 ganó';
} else {
    console.log('Han empatado ;p')
    title.textContent = 'Han empatado, refresca de nuevo';
}






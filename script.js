//Variables de los elementos de dado
let diceOne = document.getElementsByClassName('one');
let diceTwo = document.getElementsByClassName('two');

//Variable del titulo
let title = document.querySelector('h1');

//Variable de numero de dado
let numDice = Math.floor(Math.random() * 8);

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






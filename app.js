//Selectors for inputs and roll buttons
let d4Amount = document.querySelector('#d4amount');
let d4Button = document.querySelector('#d4button');
let d6Amount = document.querySelector('#d6amount');
let d6Button = document.querySelector('#d6button');
let d8Amount = document.querySelector('#d8amount');
let d8Button = document.querySelector('#d8button');
let d10Amount = document.querySelector('#d10amount');
let d10Button = document.querySelector('#d10button');
let d12Amount = document.querySelector('#d12amount');
let d12Button = document.querySelector('#d12button');
let d20Amount = document.querySelector('#d20amount');
let d20Button = document.querySelector('#d20button');
let d100Amount = document.querySelector('#d100amount');
let d100Button = document.querySelector('#d100button');
let clearButton = document.querySelector('#clear-results');

//Arrays and box for results and calculations
let diceResults = document.getElementById('dice-results');
let diceArray = [];
let totalArray = [];
let sum = 0;

//Dice roll generator
function getRandomNumber(min, max) {
    min = Math.ceil(min);
    max = Math.floor(max);
    return result = Math.floor(Math.random() * (max - min + 1)) + min;
}

//Add together current dice roll
function sumUp() {
    for (let i = 0; i < totalArray.length; i++) {
        sum += totalArray[i] << 0;
    }
}

//Inserts dice rolls into an array for display and calculation
function updateArrays() {
    diceArray += result + ' ';
    totalArray.push(result);
}

//Display results to user and clear arrays for next roll
function displayResults() {
    diceArray += "<br>";
    sumUp();
    diceResults.innerHTML = diceArray + "Total: " + sum;
    totalArray = [];
    sum = 0;
}

//Dice roll events for each type of dice
d4Button.onclick = () => {
    diceArray += d4Amount.value + "d4: ";
    for (let i = 0; i < d4Amount.value; i++) {
        getRandomNumber(1, 4);
        updateArrays();
    }
    displayResults();
};

d6Button.onclick = () => {
    diceArray += d6Amount.value + "d6: ";
    for (let i = 0; i < d6Amount.value; i++) {
        getRandomNumber(1, 6);
        updateArrays();
    }
    displayResults();
};

d8Button.onclick = () => {
    diceArray += d8Amount.value + "d8: ";
    for (let i = 0; i < d8Amount.value; i++) {
        getRandomNumber(1, 8);
        updateArrays();
    }
    displayResults();
};

d10Button.onclick = () => {
    diceArray += d10Amount.value + "d10: ";
    for (let i = 0; i < d10Amount.value; i++) {
        getRandomNumber(1, 10);
        updateArrays();
    }
    displayResults();
};

d12Button.onclick = () => {
    diceArray += d12Amount.value + "d12: ";
    for (let i = 0; i < d12Amount.value; i++) {
        getRandomNumber(1, 12);
        updateArrays();
    }
    displayResults();
};

d20Button.onclick = () => {
    diceArray += d20Amount.value + "d20: ";
    for (let i = 0; i < d20Amount.value; i++) {
        getRandomNumber(1, 20);
        updateArrays();
    }
    displayResults();
};

d100Button.onclick = () => {
    diceArray += d100Amount.value + "d100: ";
    for (let i = 0; i < d100Amount.value; i++) {
        getRandomNumber(1, 100);
        updateArrays();
    }
    displayResults();
};

//Clear the results table
clearButton.onclick = () => {
    diceArray = [];
    diceResults.innerHTML = diceArray;
}
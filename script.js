console.log('New Week, New Problem')
// Switch Operators

person = {
    name: 'Tolu',
    gender: ''
}

switch (person.gender) {     // The Condition stays in the parenthesis
    // In here will be the outcome of every case there is

    case 'Female':
        console.log('Female')
        break;
    case 'Male':
        console.log('Male')
        break;
    case 'Hermaphrodite':
        console.log('Hermaphrodite')
        break;
    default:
        console.log('Non Human')
}

// Ternary Operators

// condition ? ifTrue : ifFalse 

// Truthy and Falsy Values

let soup = 'Chicken Noodle Soup'
let response = soup ? 'Yes, we have soup' : 'Sorry, no soup today';
console.log(response);

let isCustomerBanned = false;
let soupAccess = isCustomerBanned
 ? 'sorry, no soup for you'
 : soup ?
 `Yes, we have ${soup} today.` 
 : 'sorry, no soup for today'
console.log(soupAccess);

let testScore = 79;
let myGrade = 
    testScore > 89 ? 'A' 
    : testScore > 79 ? 'B'
    : testScore > 69 ? 'C'
    : testScore > 59 ? 'D'
    :'F'
console.log(`my test grade is a ${myGrade}`);

let playerOne = 'rock';
let computer = 'scissors'

let result =
    playerOne === computer
        ?'Its a tie'
        :playerOne === 'rock' && computer === 'paper'
        ?'Computer wins!'
        :playerOne === 'paper' && computer === 'scissors'
        ?'Computer wins'
        :playerOne === 'scissors' && computer === 'rock'
        ?'computer wins!'
        :'player One wins!'
console.log(result);

const fruit = 'Apple';

switch (fruit) {
    case 'Banana':
        console.log('Banana');
        break;
    case 'Appl':
            console.log('Apple');
        break;
    case 'Orange':
        console.log('Orange');
        break;

    default:
        console.log('This is not a fruit');
}

const age = 18;
const canVote = (age >= 18) ? 'Eligible ✅' : 'Not Eligible ❌'
console.log(canVote);


// LOOPS

// For loops

for (let i = 3; i < 9; i++) {
    console.log(i)
}

for (let kanaz = 2; kanaz < 30; kanaz++) {
    console.log(kanaz);
}

// While loops

let b = 0;
while (b < 8) {
    console.log(b)
    b++;
}


const arr = [1, 2, 3];
arr[2] = arr[0] + arr[1];
console.log(arr);


let x = 3;
let y = 7;

let answer = y > x ? x : y;
console.log(answer);




const p = 10;
const q = 10;
const r = 10;

if (p == q == r ) {
    console.log('yes');
} else {
    console.log('No');
}


// The reason why it's saying no is because it's expected to return a boolean attribute which can not be equal to a number.

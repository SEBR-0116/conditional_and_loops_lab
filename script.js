/*
//## 1 - Weather Report
let temperature = 50
if (temperature > 75) {
    console.log('it is warm');
} else {
    console.log('it it cold')
}


//## 2  - Team Player
let players = ['John', 'Johnny', 'Jack', 'Joe', 'Joseph', 'James', 'Jim', 'Jedward', 'Jedediah']
if (players.length >= 9) {
    console.log('Play ball!')
} else {
    console.log('not enough players')
}


//## 3  - Grade Assigner
const grade = 100

if (grade >= 90) {
    console.log('A')
} else if (grade <= 89 && grade >= 80) {
    console.log('B')
} else if (grade <= 79 && grade >= 70) {
    console.log('C')
} else if (grade <= 69 && grade >= 65) {
    console.log('D')
} else if (grade < 65) {
        console.log('F')
} else {
    console.log('Please enter a valid grade')
}
*/

//##  4 - ATM Function
let checkingAccount = 1000
let savingsAccount = 2000
let actionType = "withdraw"

switch(actionType) {
    case 'withdraw':
        checkingAccount -=100;
        console.log('Withdrawal completed.');
        break;
    case 'deposit':
        checkingAccount +=100;
        console.log('Deposit completed.');
        break;
    case 'transfer':
        checkingAccount -=100;
        savingsAccount +=100;
        console.log('Transfer completed.');
        break;
}
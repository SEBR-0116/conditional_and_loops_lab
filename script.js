//Project 1: Weather Report
let temperature = 30;

if (temperature >= 75) {
    console.log('it is warm')
} else {
console.log('it is cold')
}

//Project 2: Team Player
const team = ['Mary', 'Joe', 'Susan', 'Kenneth', 'Alex', 'Dylan', 'Jamie', 'Madison', 'Dan']

if (team.length >=9) {
    console.log("Play ball!")
} else {
    console.log("not enough players")    
}

//Project 3: Grade Assigner
let grade = 99

if (grade > 90) {
    console.log('A');
} else if (grade <= 89 && grades >=80){
    console.log('B');
} else if (grade <= 79 && grades >=70){
    console.log('C');
} else if (grade <= 69 && grades >=65){
    console.log('D');    
} else if (grade < 65){
    console.log('Fail'); 
} else {
    console.log('Please enter a valid grade')
}

//Project 4: ATM Function
let checkingAccount = 1000.00
let savingsAccount = 1000.00
const actionType = ['Withdraw', 'Deposit', 'Transfer']

switch(actionType[1]) {
    case 'Withdraw':
      console.log(`Checking Account: $${checkingAccount - 100}`);
      console.log(`Savings Account: $${savingsAccount}`);
      break;
    case 'Deposit':
      console.log(`Checking Account: $ ${checkingAccount + 100.00}`);
      console.log(`Savings Account: $${savingsAccount}`);
      break;
    case 'Transfer':
        console.log(`Checking Account: $ ${checkingAccount - 100.00}`);
        console.log(`Savings Account: $${savingsAccount + 100.00}`);
      break;
    default:
      console.log('Error: Invalid Entry');
  }

//Project: High Five!
for (let i = 0; i <= 50; i+=5) {
    console.log(i)}

//Project 6: It's Hip to Loop Squares
for (let i = 0; i <= 10; i++) {
    console.log(i**2)}


//Project 7: FFF Foods
const food = ['tacos', 'burritos', 'pizza', 'soup', 'pasta', 'Fries', 'Fajita', ]

for(let i = 0; i < food.length; i++) {
    if (food[i].charAt(0) == 'f' || food[i].charAt(0) == 'F'){
    console.log(food[i])
    }
  }

//Bonus 8 - Even and Odd Numbers
for(let i = 20; i <= 40; i+=2) {
    console.log(i)}
for (let i = 21; i <= 50; i+=2) {
    console.log(i)}

//Bonus 9 - FizzBuzz!
for(let i = 1; i <= 30; i++) {
    if ([i%3] === 0) && (i%5) === 0 {
        console.log("FizzBuzz");
    }else if([i%3]) === 0 {
    console.log("Fizz");
    }else if(i%5 === 0) {
        cocnsole.log("Buzz");
    }else{
        console.log(i)
    }
}
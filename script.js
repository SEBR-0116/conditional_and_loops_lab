//1 - Weather Report
let temperature = 100;
if (temperature > 75) {
  console.log("It is warm");
} else {
  console.log("It is cold");
}

//2 - Team Player
let softballTeam = ["Alice", "Bob", "Calvin", "kevin", "Jack", "Daisy", "Uder", "Hirry", "Milky"];

if (softballTeam.length >= 9) {
  console.log("Play ball!");
} else {
  console.log("Not enough players");
}

//3 - Grade Assigner -
let numericGrade = 100;
if (typeof numericGrade === 'number') {
  if (numericGrade >= 90) {
    console.log("A");
  } else if (numericGrade >= 80 && numericGrade <= 89) {
    console.log("B");
  } else if (numericGrade >= 70 && numericGrade <= 79) {
    console.log("C");
  } else if (numericGrade >= 65 && numericGrade <= 69) {
    console.log("D");
  } else if (numericGrade < 65) {
    console.log("Failing mark");
  } else {
    console.log("Please enter a valid grade");
  }
} else {
  console.log("Please enter a valid grade");
}

//4 - ATM Function
let checkingAccount = 1200;
let savingsAccount = 1300;
let actionType = ["Transfer","Withdraw","Deposit"]; 
switch (actionType[0]) {
  case "Withdraw":
    checkingAccount -= 100;
    console.log("Withdrawn $100 from the checking account.");
    break;
  
  case "Deposit":
    savingsAccount += 100;
    console.log("Deposited $100 into the savings account.");
    break;

  case "Transfer":
    checkingAccount -= 100;
    savingsAccount += 100;
    console.log("Transferred $100 from checking to savings.");
    break;

  default:
    console.log("Invalid action type. Choose Withdraw, Deposit, or Transfer.");
}

//5 - High Five!
for (let i = 0; i <= 50; i += 5) {
    console.log(i)
}


//6 - Its Hip to Loop Squares

for (let i = 0; i <= 10; i++) {
    
    console.log(i * i)
}

//7 - F F F Foods
// Create an array of foods
let foods = ["Apple", "Banana", "Orange", "Milk", "Fried", "Fish", "meat"];


for (let i = 0; i < foods.length; i++) {
  
  if (foods[i].charAt(0).toUpperCase() === 'F') {
    console.log(foods[i]);
  }
}

//Bonus 8 - Even and Odd Numbers
//even
for (let i = 20; i <= 40; i += 2) {
  console.log(i);
}
//odd
for (let i = 21; i <= 40; i += 2) {
  console.log(i);
}

//Bonus 9 - FizzBuzz!
for (let i = 1; i <= 30; i++) {
    if (i % 3 === 0 && i % 5 === 0) {
      console.log("FizzBuzz");
    } else if (i % 3 === 0) {
      console.log("Fizz");
    } else if (i % 5 === 0) {
      console.log("Buzz");
    } else {
      console.log(i);
    }
  }
  

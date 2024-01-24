//prompt 1 
let Temperature = 72; 

if (Temperature > 75) {
  console.log("It is warm!");
} else {
  console.log("It is cold.");
}
//prompt 2
let softballTeam = ["Alice", "Bob", "Charlie", "Diana", "Eve", "Frank", "Grace", "Henry", "Iris"];

if (softballTeam.length >= 9) {
  console.log("Play ball!");
} else {
  console.log("Not enough players!");
}
//prompt 3
let grade = 88
if (grade <=100 && grade >=90) {
  console.log('You have an A!')
} else if (grade < 90 && grade >= 80) {
  console.log('You have a B!')
} else if (grade < 80 && grade >= 70) {
  console.log('You have a C.')
} else if (grade < 70 && grade >= 65) {
  console.log('You have a D')
} else if (grade <= 64 && grade >= 0) {
  console.log('Failing Mark')
} else if (isNaN(NaN))
console.log('Please enter a valid grade')
//prompt 4
let checkingAccount = 500;
let savingsAccount = 1000;
let actionType = "Transfer";

switch (actionType) {
  case "Withdraw":
    checkingAccount -= 100;     console.log("$100 withdrawn from checking account.");
    console.log("Updated balances: Checking - $", checkingAccount, "Savings - $", savingsAccount);
    break;

  case "Deposit":
    checkingAccount += 100;     console.log("$100 deposited to checking account.");
    console.log("Updated balances: Checking - $", checkingAccount, "Savings - $", savingsAccount);
    break;

  case "Transfer":
    savingsAccount += 100;     checkingAccount -= 100;
    console.log("$100 transferred from checking to savings account.");
    console.log("Updated balances: Checking - $", checkingAccount, "Savings - $", savingsAccount)
}
//prompt 5
for (let i = 0; i <= 50; i += 5) {
 console.log(i);
}
//prompt 6
for (let i=0; i<=10; i++) {
    console.log(i**2)
}
//prompt 7 
let foods = ["Fries", "Pizza", "Salad", "Fish", "Tacos", "Burrito", "Falafel"];

for (let i = 0; i < foods.length; i++) {
 if (foods[i].charAt(0) === "F") {
   console.log(foods[i]);
 }
}
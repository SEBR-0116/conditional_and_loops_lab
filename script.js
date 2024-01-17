//1 - Weather Report

//  let Temperature = 88;

//  if (Temperature > 75){
//      console.log("it is warm");
//  }
//  else { 
//      console.log("it is cold");
//  }
//end of Weather Report 

//2 - Team Player

// let softballTeam = ["Alex", "Bob", "Charlie", "David", "Eve", "Frank", "Grace", "Henry", "Mark"];

// if (softballTeam.length >= 9) {
//     console.log("Play ball!");
// } 
//     else {
//         console.log("Not enough players");
// }
//end of Team Player

//3 - Grade Assinger -

let grade = 77

// if(isNaN(grade)){
//     console.log("Please enter a valid number")
// }
// else if (grade >= 90){
//     console.log("A")
// }
// else if (grade >= 80 && grade <= 89){
//     console.log("B")
// }
// else if (grade >= 70 && grade <= 79){
//     console.log("C")
// }
// else if (grade >=65 && grade <= 69) {
//     console.log("D")
// }
// else if (grade <= 64){
//     console.log("F")
// }
//end of Grade Assinger

//4 - ATM Function

let checkingAccount = 1000;
let savingsAccount = 500;
let actionType = "withdraw";

switch (actionType) {
    case "withdraw":
        checkingAccount = checkingAccount - 100;
        console.log("Action type: " + actionType);
        console.log("Your checking account balance is " + checkingAccount);
        console.log("Your savings account balance is " + savingsAccount);
        break;
    case "deposit":
        checkingAccount = checkingAccount + 100;
        console.log("Action type: " + actionType);
        console.log("Your checking account balance is " + checkingAccount);
        console.log("Your savings account balance is " + savingsAccount);
        break;
    case "transfer":
        checkingAccount = checkingAccount - 100;
        savingsAccount = savingsAccount + 100;
        console.log("Action type: " + actionType);
        console.log("Your checking account balance is " + checkingAccount);
        console.log("Your savings account balance is " + savingsAccount);
        break;
}
//end of ATM Function


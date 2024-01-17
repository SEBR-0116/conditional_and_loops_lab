//Weather Report
/*let Tempurature = 0;
if(Tempurature >= 75) {
    console.log(`it is warm, ${Tempurature} degrees to be precise`)
}
else {
    console.log(`it is cold, ${Tempurature} degrees to be precise`)
}
*/
//Team Player
/*let softballTeam = ["Who", "What", "I Don't Know", "Why", "Because", "Tomorrow", "Today", "Nobody", "I Don't Care"];
if(softballTeam.length >= 9) {
    console.log(`Play ball!     with ${softballTeam.length} players`)
}
else {
    console.log(`not enough players     ${(9 - softballTeam.length)} players short`)
}
*/
//Grade Assigner
/*let grade = 100;
if(grade > 100 || grade < 0) {
    console.log(`Please enter a valid grade(0-100)`)
}
else if(grade >= 90) {
    console.log(`A`)
}
else if(grade >= 80) {
    console.log(`B`)
}
else if(grade >= 70) {
    console.log(`C`)
}
else if(grade >= 65) {
    console.log(`D`)
}
else if(grade >= 0) {
    console.log(`F`)
}
else {
    console.log(`Please enter a valid grade(number value 0-100)`)
}
*/
//ATM Function
/*let checkingAccount = 250;
let savingsAccount = 1000;
let actionType = 1;
switch(actionType) {
    case 1:
        //Withdraw checking
        checkingAccount = checkingAccount - 100;
        console.log(`Withdraw from checking account`)
        console.log(`Checking: ${checkingAccount} Savings: ${savingsAccount}`)
        break;
    case 2:
        //Withdraw savings
        savingsAccount = savingsAccount - 100;
        console.log(`Withdraw from savings account`)
        console.log(`Checking: ${checkingAccount} Savings: ${savingsAccount}`)
        break;
    case 3:
        //Deposit checking
        checkingAccount = checkingAccount + 100;
        console.log(`Deposit to checking account`)
        console.log(`Checking: ${checkingAccount} Savings: ${savingsAccount}`)
        break;
    case 4: 
        //Deposit savings
        savingsAccount = savingsAccount + 100;
        console.log(`Deposit to savings account`)
        console.log(`Checking: ${checkingAccount} Savings: ${savingsAccount}`)
        break;
    case 5:
        //Transfer checking to savings
        checkingAccount = checkingAccount - 100;
        savingsAccount = savingsAccount + 100;
        console.log(`Transfer money from checking to savings`)
        console.log(`Checking: ${checkingAccount} Savings: ${savingsAccount}`)
        break;
    case 6:
        //Transfer savings to checking
        savingAccout = savingsAccount - 100;
        checkingAccount = checkingAccount + 100;
        console.log(`Transfer money from savings to checking`)
        console.log(`Checking: ${checkingAccount} Savings: ${savingsAccount}`)
        break;
    default:
        console.log(`Please enter a valid account action, ie 1-6`)
}
*/
//High Five!
/*let num = 0;
for(let i = 0; i < 50; i++) {
    console.log(num);
    num = num + 5;
}
*/
//It's Hip to Loop Squares
for(let i = 0; i < 10; i++) {
    console.log((i ** 2));
}
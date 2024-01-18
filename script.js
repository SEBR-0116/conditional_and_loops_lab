//Prompt 1 - Weather Report
//Create a variable called Temperature and set a number to its value, then create a conditional that measures this temperature. If the temperature is above 75, log "it is warm" to your console. If not, log "it is cold"
let temperature = 35;

if (temperature > 75) {
    console.log("It is warm");
} else {
    console.log("It is cold");
}

//Prompt 2 - Team Player
//Create an array of names for your softball team. Then run a conditional to test the length of the array. If the array's length is 9 or more, log "Play ball!" to the console. If it is less than 9, log "not enough players" to the console.
let softballTeam = ['Tanya', 'Nikki', 'Rosie', 'May'];
if (softballTeam.length > 9) {
    console.log('Play Ball');
} else if (softballTeam.length < 9) {
    console.log('Not enough players');
} else {
    console.log('check your code!');
}

//Prompt 3 - Grade Assigner
//Create an if/else if/else conditional that takes in a numeric grade and assigns it a letter value, logging the letter to your console. If a grade is a 90 or above, it returns an A. If it is between 80 and 89, the student recieves a B. 70-79 will give you a C. From 65 to 69 gives a D, and below a 65 returns a Failing mark. Finally, you should have a catching message that returns "Please enter a valid grade" if the inputed value is not a number
let studentNumGrade = 75;
let studentLetterGrade;
if (studentNumGrade >= 90) {
    studentLetterGrade = "A";
    console.log(`Student scored ${studentNumGrade} points. They'll receive a ${studentLetterGrade} for the class`);
} else if (studentNumGrade < 90 && studentNumGrade > 79) {
  studentLetterGrade = "B";
  console.log(`Student scored ${studentNumGrade} points. They'll receive a ${studentLetterGrade} for the class`);
} else if (studentNumGrade < 80 && studentNumGrade > 69) {
  studentLetterGrade = "C";
  console.log(`Student scored ${studentNumGrade} points. They'll receive a ${studentLetterGrade} for the class`);
} else if (studentNumGrade < 70 && studentNumGrade > 64) {
  studentLetterGrade = "D";
  console.log(`Student scored ${studentNumGrade} points. They'll receive a ${studentLetterGrade} for the class`);
} else if (studentNumGrade < 65) {
  console.log(`Student did not score enough points. They'll receive a 'Failing Mark' for the class`);
} else {
  console.log("Please enter a valid grade");
}

//Prompt 4 - ATM Function
//Create 3 values, a checkingAccount, a savingsAccount, and an action type, then assign each account to have any amount of $$$ in it. Then, make a switch statement that has at least 3 different actions: Withdraw, Deposit, and Transfer. If you have a case of Withdraw, subtract $100 from one of your accounts. If your case is Deposit, add $100 to an account. If you choose Transfer, take away 100 from one account and add it to the other.
let checkingAccount = 1000;
let savingsAccount = 500;
let actionType = 'transfer';
switch (actionType) {
  case 'withdraw':
    // subtract $100 from one of your accounts;
    checkingAccount -=100;
    console.log(`You withdrew $100 from your checking account. Your new balance is ${checkingAccount}`);
    break;
  case 'deposit':
    //add $100 to an account;
    savingsAccount +=100;
    console.log(`You added $100 to your savings account. Your new balance is ${savingsAccount}`);
    break;
  case 'transfer':
    //take away 100 from one account and add it to the other;
    savingsAccount -=100;
    checkingAccount +=100;
    console.log(`You've moved $100 from your savings account to your checking account. Your new balance in savings is ${savingsAccount}. Checking account balance is now ${checkingAccount}`);
    break;
}
//Prompt 5 - High Five
//Create a for loop that starts at 0, ends at 50, and logs a number that increases by 5 each time it is run.

for (let i = 0; i<=50; i+=5) {
  console.log(i);
}

//Prompt 6 - Hip to Loop Squares
//Run a For Loop that starts at 0, ends at 10, and logs each number squared (your answer should be 0, 1, 4, 9, 25....)
for (let i = 0; i<=10; i++) {
  console.log(i**2);
}

//prompt 7 -- FFF Foods
//Create an array of foods, then loop through them. Run a conditional in your loop with the charAt[0] method so that you are only logging to your console foods that start with the letter F

let food = ['fish','lettuce', 'farro'];
for (let i = 0; i<food.length; i++) {
  if () {
    console.log();
  }
}

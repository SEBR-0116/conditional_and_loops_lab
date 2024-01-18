let Temperature = 80;
if (Temperature > 75) {
    console.log("It is warm");
} else {
    console.log("It is cold")
}

let softballTeamName =["Bill", "John", "Jim", "Tony", "Sam", "Caleb", "Carl", "Phil", "Lance"]
if (softballTeamName.length>=9){
    console.log("Play ball!")
} else{
    console.log("Not enough players")
}


let grade = 88;
if ((numericGrade)){
    console.log("Please enter a valid grade");
if (numericGrade >= 90) {
    console.log("A");
} else if (numericGrade >=80) {
    console.log("B");
} else if (numericGrade >= 70) {
    console.log("C");
} else if (numericGrade >=60) {
    console.log("D");
} else {
    console.log("Failing mark");
}
}

let checkingAccount = 2000.00
let savingsAccount = 3000.00
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


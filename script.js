// #1 Weather Report
let temperature= 65
//console.log(temperature)

if (temperature > 75) {
    //console.log("It is warm!")
} else {
    //console.log("It is cold!")
}

// #2 Team Player

let blackStarNames = ["Ayew", "Jordan", "Kudus", "Christian", "Ameyo", "MK", "Selom", "Udo"]

if (blackStarNames >= 9) {
    //console.log("Play Ball!")
} else {
    //console.log("Not Enough Player!")
}

//#3 Grade Assigner

let studentGrade= 70

if (studentGrade >= 90) {
    console.log("A");
} else if (studentGrade >= 80 && studentGrade <= 89) {
    console.log("B");
} else if (studentGrade >= 70 && studentGrade <= 79) {
    console.log("C") ;
} else if (studentGrade >= 65 && studentGrade <= 69) {
    console.log("D") ;
} else if (gstudentGrade < 65) {
    console.log("Failing mark");
} else {
    console.log("Please enter a valid grade");
}

// #4 ATM Function 

let checkingAccount = 10000
let savingsAccount = 5000

let actionType = "Deposit"

switch(actionType) {
    case 'Withdraw':
        checkingAccount =-100
     // console.log("Withdraw $100 from checking account.");
      break;
    case 'Deposit':
        savingsAccount =+100
    //  console.log("Deposit $100 to savings account.");
      break;
    case 'Transfer':
        checkingAccount -= 100;
        savingsAccount += 100;
     // console.log("Transfer succesful");
      break;
    default:
      //console.log("Invalid action type");
  }

// #5 HIgh Five!!

for (let i = 0; i <= 50; i += 5) {
   // console.log(i);
  }

// #6 Its Hip to loop squares

for (let i = 0; i <= 10; i ++) {
    //console.log(i * i);
  }

// #7 F F F Foods

let foods = ["Creme Brulée", "Crêpes", "Ice Cream", "Apple", "Fish", "Orange", "Sushi", "Grapes"];

//for (let i = 0; i < foods.length; i++)
   // if (foods[i].charAt(0).toUpperCase() === 'F') {
       // console.log(foods[i]) }

       

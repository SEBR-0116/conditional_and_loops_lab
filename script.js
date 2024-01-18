// 1.
let temperature = 12;

// if (temperature > 75) {
//   console.log("it is warm")
// } else {
//   console.log("it is cold")
// }

temperature > 75 ? console.log("it is warm") : console.log("it is cold")

// 2.
let teamArr = ['rico', 'max', 'nick', 'fred']
if (teamArr.length > 9) {
  console.log('Play ball!')
} else if (teamArr.length < 9) {
  console.log('not enough players')
}

// 3.
let grade;
if (grade > 90) {
  return 'A';
} else if (grade >= 80 && grade <= 89) {
  return 'B';
} else if (grade >= 70 && grade <= 79) {
  return 'C';
} else if (grade >= 65 && grade <= 69) {
  return 'D';
} else if (grade < 65) {
  return 'F'
} else {
  return 'Please enter a valid grade'
}

// 4.

let checkingAccount = 10000;
let savingAccount = 500000;
let action;

switch (action) {
  case 'withdraw':
    checkingAccount -= 100;
    break;
  case 'deposit':
    checkingAccount += 100;
    break;
  case 'transfer':
    checkingAccount -= 100;
    savingAccount += 100;
    break;
  default: 
    console.log('Select an action')
}

// 5.
for (let i = 0; i <= 50; i += 5) {
  console.log(i);
}

// 6. 
for (let i = 0; i <= 10; i++) {
  console.log(i * i);
}

// 7.
const foods = ["Fish", "Apple", "Fries", "Banana", "Falafel", "Orange", "Feta"];

// for (let i = 0; i < foods.length; i++) {
//   if (foods[i].charAt(0) === 'F') {
//     console.log(foods[i]);
//   }
// }



//Originally completed in CodePen

//1: Weather Report
let temperature = 10
if (temperature > 75) {
    console.log('it is warm')
} else {
    //console.log('it is cold')
}

//2: Team Player
let team = ['Nancy', 'Bess', 'George']
if (team.length >= 9) {
    console.log("Play ball!")
} else {
    //console.log("Not enough players")
}

//3: Grade Assigner
let grade = 98
if (grade >=90 && grade <=100) {
    //console.log("A")
} else if (grade >=80 && grade <=89) {
    console.log("B")
} else if (grade >=70 && grade <=79) {
    console.log("C")
} else if (grade >=65 && grade <=69) {
    console.log("D")
} else if (grade >100 || grade <1) {
    console.log("Please input valid grade")
}

//4: ATM Function ****
let checkingAccount = 500
let savingsAccount = 1000
const banking = 'transfer'

switch(banking) {
  case 'withdraw':
    console.log(`Withdraw $100 from checking; checking balance is now $${checkingAccount - 100}`)
    break
  case 'deposit':
    console.log(`Deposit $100 to checking; checking balance is now $${checkingAccount + 100}`)
    break
  case 'transfer':
    //console.log(`Transfer $100 to checking; checking balance is now $${checkingAccount + 100}`)
    break        
}

//5: High Five
// -> used 5 instead of 50 for smaller test
for (let i = 0; i <= 5; i++) {
   //console.log(i*5)
}

//6: Hip to Loop a Square
// -> used 10 instead of 50 for smaller test
for (let i = 0; i <=10; i++) {
    //console.log(i ** 2)
}

//7: F F F Foods
let foods = ['fried eggs', 'bacon', 'pancakes', 'waffles', 'french toast']
for (let i=0; i<foods.length; i++) {
  if (foods[i].charAt(0) == 'f') {
    //console.log(foods[i])
  }  
}

//8: Bonus - Even & Odd
// -> run btwn 20 & 30 instead of 40 for smaller test
//Evens:
for (let i=20; i<=30; i+=2) {
  //console.log(i)
}
//Odds:
for (let i=21; i<=30; i+=2) {
  //console.log(i)
}

//9: Bonus - FizzBuzz
// -> Longer Version; bc the only things divisible by both 5 & 3 are also divisible by 15, see the Shorter Version
for (let i=1; i<=30; i++) {
  if (i % 3 == 0 && i % 5 == 0) {
    //console.log(i + " FizzBuzz")
  } else if (i % 3 == 0 && i % 5 !== 0) {
    //console.log(i + " Fizz")
  }  else if (i % 5 == 0 && i % 3 !== 0) {
    //console.log(i + " Buzz")
  }
}
// -> Shorter Version
//   -> also found this shorter verison for console logging during If...Else
for (let i=1; i<=30; i++) {
  //if (i % 15 == 0) console.log(i + " FizzBuzz")
  //else if (i % 3 == 0) console.log(i + " Fizz")
  //else if (i % 5 == 0) console.log(i + " Buzz")
}
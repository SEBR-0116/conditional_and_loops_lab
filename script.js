//Prompt 1
let temperature = 50
 if (temperature > 75) {
    console.log('it is warm')
 } else {
    console.log('it is cold')
 }

 //Prompt 2 
 let softballTeam = ['Steve', 'Bob', 'Cindy', 'Jeff', 'Robin']
 if (softballTeam.length >= 9 ) {
    console.log('Play ball!')
 } else if (softballTeam.length < 9) {
    console.log('not enough players')
 }

 //Prompt 3
 let grade = 'bad'
 if (grade >= 90) {
    console.log('A')
 } else if (grade < 90 && grade >= 80) {
    console.log('B')
 } else if (grade < 80 && grade >= 70) {
    console.log('C')
 } else if (grade < 70 && grade >= 65) {
    console.log('D')
 } else if (grade < 65) {
    console.log('Failing')
 } else {
    console.log('Please enter a valid grade')
 }

 //Prompt 4
 let checkingAccount = 500
 let savingsAccount = 2000
 const action = 'withdraw'
 switch (action) {
    case 'withdraw':
        console.log(checkingAccount - 100 || savingsAccount -100);
         break;
    case 'deposit':
        console.log(checkingsAccount + 100 || savingsAccount + 100);
        break;
    case 'transfer':
        console.log(checkingsAccount - 100 && savingsAccount + 100)
 }

 //Prompt 5
 for (let i = 0; i <= 50; i += 5) {
    console.log(i)
 }

 //Prompt 6
 for (let i = 0; i <= 10; i++) {
   console.log(i * i)
 }
 
  //Prompt 7
  const foods = ['Pizza', 'Burger', 'Pie', 'Fries', 'Soup', 'Fish']
  for (let i = 0; i < foods.length; i++) {
   if (foods[i].charAt(0).toUpperCase() === 'F') {
      console.log(foods[i])
   }
  }

  //Bonus 8
  for (let i = 20; i <= 40; i +=2) {
   console.log(i)
  }

//   for (let i = 21; i <=42; i +=2) {
//    console.log(i)
//   }

  //Bonus 9
for (let i = 1; i <= 30; i++) {
   if (i % 3 === 0 && i % 5 === 0) {
      console.log(i + "FizzBuzz")
   } else if (i % 3 === 0) {
      console.log(i + "Fizz")
   } else if (i % 5 === 0) {
      console.log(i + "Buzz")
   } else {
      console.log(i)
   }
}
//1-Weather Report
let temperature = 21
if(temperature > 75) {
    console.log("It is warm")
} else {
    console.log("It is cold")
}

//2-Team Player
softballTeam = ['panthers','eagles','bears','hawks','tigers']
console.log(softballTeam.length)
if(softballTeam.length >= 9) {
    console.log ("Play ball!")
} else {
    console.log ("not enough players")
}

//3-Grade Assigner
let myGrade = 85
if(myGrade >= 90) {
    console.log ("A")
} else if (80 <= myGrade <= 89) {
    console.log ("B")
} else if (70 <= myGrade <= 79) {
    console.log ("C")
} else if (65 <= myGrade <= 69) {
    console.log ("D")
} else if (myGrade < 65) {
    console.log ("F")
} else {
    console.log ("Please enter a valid grade")
}

//4-ATM Function
let checkingAccount = 800
let savingsAccount = 8000
let actionType = "Transfer"

switch(actionType) {
    case'Withdraw':
    console.log(checkingAccount - 100)
    break;
    case'Deposit':
    console.log(checkingAccount + 100)
    break;
    case'Transfer':
    console.log(checkingAccount - 100, savingsAccount + 100)
}

//5-High Five!
for(let i=0; i<=50; i+=5) {
    console.log(i)
}

//6-Its Hip to Loop Squares
for (let i=0; i<=10; i++) {
    console.log(i**2)
} 

//7-FFF Foods
food = ['sushi', 'pasta', 'hashbrown', 'french fries', 'tacos','ramen','dumblings']
for(let i=0; i<food.length; i++){
    if(food[i].charAt(1)=== "a") {
   console.log(food[i])}
}

//8-Even and Odd Numbers
for (i=20; i <= 40; i+=2) {
    console.log(i)
}
for (i=20; i <40; i+=2) {
    console.log(i+1)
}

//9-FizzBuzz - unsure of the answer
for (i=1; i<=30; i++) {
    if (i%3 == 0) {
        console.log ("Fizz")
    } else if (i%5 ==0) {
        console.log ("Buzz")
    } else if (i%3 ==0 && i%5 ==0) {
        console.log ("FizzBuzz")
    } 
}
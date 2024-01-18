// Conditionals and loops lab

// 1- Weather report
let temperature = 27
if(temperature >= 75){
    console.log("it is warm");
}else if (temperature < 75){
    console.log("it is cold");
} else {
    console.log("Please submit temperature data")
}


// 2- Team player
team = ['Charlotte','Jeff','Amy','Julio','Jacob','Weny','Han','Shawn','Amit','Leo']
if(team.length >= 9){
    console.log("Play Ball!")
} else {
    console.log("Not enough players")
}


// 3- Grade Assigner
let grade = 85
if(grade >= 90){
   console.log("A")
} else if (grade <90 && grade >=80){
    console.log("B")
} else if (grade <80 && grade >=70){
    console.log("C")
} else if (grade <70 && grade >=60){
    control.log("D")
}else{
    control.log("F")
}


// 4- ATM function    //*could use some feedback on this one
customer_info {
let checkingAccount = 1700
let savingsAccount = 5000
let totalFunds = checkingAccount + savingsAccount
let annualIterestRate = savingsAccount * 0.05
}

switch(customer_info) {
    //case - what we are testing
    //action - what we are doing
    //break 
    case 'Withdraw':
        customer_info.checkingAccount - 100
        break;
    case 'Deposit':
        customer_info.checkingAccount - 100
        break;
    case 'transfer':
        customer_info.checkingAccount - 100 && customer_info.savingsAccount + 100
        break;
    default:
        console.log('please choose an operation')
}

//- High five
for (let i = 0; i <= 50; i= i + 5 ) {
    console.log(i)
}


//6- Its Hip to Loop Squares
 for (let i = 0; i <= 10; i++) {
     console.log(i**2)
 }

//7- FFFFoods           *
foods = ['clementine','orange','nectarine','blood orange','grapefruit','lemon','lime']
for(let i = 0; i < foods.length; i++)
    if(foods[i].charAt(0) == 'f'){
    console.log(foods[i]);
    } else {
        console.log("No F words here")
    }



//1
let temperature = 75;

temperature > 75 ? console.log("it is warm") : console.log("it is cold");

//2
let team = ["jordan", "lane", "lani", "andrew", "quinn", "cassidy", "drew"];

team.length >= 9
  ? console.log("Play ball!")
  : console.log("not enough players");

//3
let grade = 75;

if (grade >= 90) {
  console.log("A");
} else if (grade >= 80) {
  console.log("B");
} else if (grade >= 70) {
  console.log("C");
} else if (grade >= 65) {
  console.log("D");
} else if (grade < 65) {
  console.log("Failing");
} else console.log("Please enter a valid grade");

//4
let checkingAccount = 1000;
let savingsAccount = 2000;
let action = "Transfer";

switch (action) {
  case "Withdraw":
    console.log(`Your new savings balance is ${savingsAccount - 100}`);
    break;
  case "Deposit":
    console.log(`Your new savings balance is ${savingsAccount + 100}`);
    break;
  case "Transfer":
    console.log(`Your new savings balance is ${savingsAccount - 100}
    , and your checking account balance is now ${checkingAccount + 100}`
    );
    break;
}

//5
for (let i = 0; i <= 50; i += 5) {
  console.log(i);
}

//6
for (let i = 0; i <= 10; i++) {
  console.log(i**2);
}

//7
foods = ["fettucine", "apples", "sausage", "blueberry", "french fries"];

for (let i = 0; i < foods.length; i++) {
  if (foods[i][0] == "f") {
    console.log(foods[i]);
  }
}

//8
for (let i = 20; i <= 40; i++) {
  if (i % 2 == 0) {
    console.log(i, "even");
  } else console.log(i, "odd");
}

//9
for (let i = 0; i <= 30; i++) {
  if (i % 3 == 0 && i % 5 == 0) {
    console.log(i, "FizzBuzz");
  } else if (i % 3 == 0 && i % 5 !== 0) {
    console.log(i, "Fizz");
  } else if (i % 5 == 0 && i % 3 !== 0) {
    console.log(i, "Buzz");
  }
}

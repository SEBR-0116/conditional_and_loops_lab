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
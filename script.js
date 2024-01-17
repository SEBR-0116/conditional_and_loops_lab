//Weather Report
/*let Tempurature = 0;
if(Tempurature >= 75) {
    console.log(`it is warm, ${Tempurature} degrees to be precise`)
}
else {
    console.log(`it is cold, ${Tempurature} degrees to be precise`)
}
*/
//Team Player
/*let softballTeam = ["Who", "What", "I Don't Know", "Why", "Because", "Tomorrow", "Today", "Nobody", "I Don't Care"];
if(softballTeam.length >= 9) {
    console.log(`Play ball!     with ${softballTeam.length} players`)
}
else {
    console.log(`not enough players     ${(9 - softballTeam.length)} players short`)
}
*/
//Grade Assigner
let grade = 100;
if(grade > 100 || grade < 0) {
    console.log(`Please enter a valid grade(0-100)`)
}
else if(grade >= 90) {
    console.log(`A`)
}
else if(grade >= 80) {
    console.log(`B`)
}
else if(grade >= 70) {
    console.log(`C`)
}
else if(grade >= 65) {
    console.log(`D`)
}
else if(grade >= 0) {
    console.log(`F`)
}
else {
    console.log(`Please enter a valid grade(number value 0-100)`)
}
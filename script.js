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

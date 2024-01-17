// let temperature = 65

// temperature > 75 ? console.log('it is warm') : console.log("is is cold")

                          //**********
                          //Team Player 

//let softballTeam = ['Mario','Andrew','Moe','Sergio','Miguel','David','Nick','Mark','Diego']

/*using Ternary Operator
softballTeam.length >= 9 ? console.log('Play ball!') :  console.log('not enough players')
*/

/* using if/else

if (softballTeam.length >= 9 ){
 console.log('Play ball!')

} else{
console.log('not enough players')
} 

*/ 
                                 //**********
                             /* 3-GRADE ASSIGNER */

const readline = require('readline').createInterface({
  input: process.stdin,
  output: process.stdout
});

readline.question('Enter your grade  ', grade => {
    if ( grade  >= 90 ){
       console.log('A') 
    } else if ( grade >=80 ){
        console.log('B')
    }
    else if ( grade >=79){
        console.log('c')
    }
   else if (grade >= 69 ){
    console.log('D')
   }
   else if (grade < 65){
    console.log('F')
    
   }
   else {
    console.log('Please enter a valid grade')
   }
   readline.close();
})




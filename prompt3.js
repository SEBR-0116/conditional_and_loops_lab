let grade = 90;

if (grade < 65 ) {
    console.log('Fail')
} else if (grade < 70 && grade > 64) {
    console.log('D')
} else if (grade < 80 && grade > 69) {
    console.log('C')
} else if (grade <90 && grade > 79) {
    console.log('B')
} else if (grade >89) {
    console.log('A')
} else {
    console.log('Please enter a valid grade')
}
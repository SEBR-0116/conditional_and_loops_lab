let grade = 90

if (grade >= 90) {
    console.log('Wow! you got an A!')
} else if (grade <= 89 && grade >= 80) {
    console.log('you got a B')
} else if (grade <= 79 && grade >= 70) {
    console.log('you got a C')
} else if (grade <= 69 && grade >= 65) {
    console.log('you got a D')
} else if (grade < 65) {
    console.log('Sorry, you failed...')
} else {
    console.log('Please enter a valid grade!')
}
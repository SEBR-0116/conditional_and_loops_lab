let numericGrade = 40
let letterGrade

if (numericGrade>=90)
{
    letterGrade="A"
    console.log(`You have got an ${letterGrade} grade`)
}
else if (numericGrade>=80 && numericGrade<=89)
{
    letterGrade="B"
    console.log(`You have got an ${letterGrade} grade`)
}
else if (numericGrade>=70 && numericGrade<=79)
{
    letterGrade="C"
    console.log(`You have got an ${letterGrade} grade`)
}
else if (numericGrade>=65 && numericGrade<=69)
{
    letterGrade="D"
    console.log(`You have got an ${letterGrade} grade`)
}
else if(numericGrade<65)
{
    console.log(`You have failed!`)
}
else if (!(Number.isInteger(numericGrade)))
{
    console.log(`Please enter a valid grade`)
}
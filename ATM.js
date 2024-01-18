let checkingsAccount = 90
let savingsAccount = 7600
let action = 'transferToChecking'

switch(action) {
    case 'withdraw': 
    checkingsAccount = checkingsAccount - 100
    console.log(`Checkings: ${checkingsAccount}
    Savings: ${savingsAccount}
    `)
    break;

    case 'deposit': 
    checkingsAccount = checkingsAccount - 100
    + 100
    console.log(`Checkings: ${checkingsAccount}
    Savings: ${savingsAccount}
    `)
    break;

    case 'transferToSavings':
        checkingsAccount = checkingsAccount - 100 
        savingsAccount = savingsAccount + 100
    console.log(`Checkings: ${checkingsAccount}
    Savings: ${savingsAccount}
    `)
    break

    case 'transferToChecking': 
    savingsAccount = savingsAccount - 100
    checkingsAccount = checkingsAccount + 100
    console.log(`Checkings: ${checkingsAccount}
    Savings: ${savingsAccount}
    `)
    break

    default:
    console.log('invalid action')

}

let checkingAccount = 50555
let savingsAccount = 54515
const action = `Withdraw`

switch(action)
{
    case 'Withdraw':
        checkingAccount = checkingAccount-100
        savingsAccount = savingsAccount-100
        console.log(`Your Checking account balance is ${checkingAccount} and Your Saving Account balance is ${savingsAccount}`)
        break
    case 'Deposit':
        checkingAccount = checkingAccount+100
        savingsAccount = savingsAccount+100
        console.log(`Your Checking account balance is ${checkingAccount} and Your Saving Account balance is ${savingsAccount}`)
        break
    case 'Tarnsfer': 
        checkingAccount = checkingAccount-100
        savingsAccount = savingsAccount+100
        console.log(`Your Checking account balance is ${checkingAccount} and Your Saving Account balance is ${savingsAccount}`)
        break

}
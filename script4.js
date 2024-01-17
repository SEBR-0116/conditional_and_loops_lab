let checkingAccount = 190.00
let savingsAccount = 90.00
let action = "Transfer"

const displayBalance = () => {
    console.log(`Checking Account: $${checkingAccount}`)
    console.log(`Savings Account: $${savingsAccount}`)
}

switch (action) {
    case "Withdraw":
        if (checkingAccount >= 100) {
            checkingAccount -= 100
            console.log("$100 were withdrawed from checking account")
            displayBalance()
        } else if (savingsAccount >= 100) {
            savingsAccount -= 100
            console.log("$100 were withdrawed from savings account")
            displayBalance()
        } else {
            console.log("INSUFFICIENT FUNDS:")
            displayBalance()
        }
        break
    case "Deposit":
        checkingAccount += 100
        console.log('$100 have been deposited into checking account')
        displayBalance()
        break
    case "Transfer":
        if (checkingAccount >= 100) {
            checkingAccount -= 100
            savingsAccount += 100
            console.log('$100 were sent from checking account to savings account')
            displayBalance()
        } else if (savingsAccount >= 100) {
            savingsAccount -= 100
            checkingAccount += 100
            console.log('$100 were sent from savings account to checking account')
            displayBalance()
        } else {
            console.log("INSUFFICIENT FUNDS:")
            displayBalance()
        }
        break
}
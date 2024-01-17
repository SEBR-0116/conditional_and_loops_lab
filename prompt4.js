let checkingAccount = 3000;
let savingsAccount = 60000;
let actionType = 'Transfer';

switch(actionType) {
    case 'Withdraw':
        checkingAccount = checkingAccount-100;
        break;
    case 'Deposit': 
        savingsAccount = savingsAccount+100;
        break;
    case 'Transfer':
        checkingAccount = checkingAccount-100;
        savingsAccount = savingsAccount+100;
        break;
}
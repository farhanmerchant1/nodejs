var readline = require('readline');

var opt1;
var wht_amt;
var dep_amt;
var trf_amt;
var cur_bal= 1000;
cur_bal = parseInt(cur_bal);
// console.log("Welcome Muhammad Farhan");
// console.log(`Your current balance is ${cur_bal}`);
// console.log("Please select number from the menu");
// console.log("1. Check Balance");
// console.log("2. Cash Withdrawal");
// console.log("3. Cash Deposit");
// console.log("4. Transfer Funds");

function Withdraw(wht_amt) {
    const readline = require('readline');
    const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});
    rl.question('Please enter your amount to withdraw : ', (wht_amt) => {
        wht_amt = parseInt(wht_amt);
        console.log(`Amount Entered: ${wht_amt}`);
        console.log(cur_bal)
        if (wht_amt>cur_bal)
            {   console.log("Insufficient funds, Please try again later");
                console.log(`Your current balance is ${cur_bal}`);
                rl.close();
                getUserInput(opt1);


            }
       
            else if (wht_amt<=cur_bal){
                console.log("Transaction Sucessful");
                cur_bal=cur_bal-wht_amt;
                console.log(`Your current balance is ${cur_bal}`);
                rl.close();
                getUserInput(opt1);

            }
           
    });
}

function Deposit(dep_amt) {
    const readline = require('readline');
    const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});
    rl.question('Please enter your amount to deposit between (1000-2000) : ', (dep_amt) => {
        dep_amt = parseInt(dep_amt);
        console.log(`Your current balance is ${cur_bal}`);
        console.log(`Amount Entered: ${dep_amt}`);
        console.log(cur_bal)
        if (dep_amt>=1000 && dep_amt<=2000)
            {   console.log("Transaction sucessful");
                cur_bal=(cur_bal+dep_amt);
                console.log(`Your current balance is ${cur_bal}`);
                rl.close();
                getUserInput(opt1);
            }
       
            else {
                console.log("Invalid amount entered");
                console.log(`Your current balance is ${cur_bal}`);
                rl.close();
                getUserInput(opt1);
            }
           
    });
}

function Transfer(trf_amt) {
    const readline = require('readline');
    const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});
    rl.question('Please enter your amount to Transfer between (1000-2000) : ', (trf_amt) => {
        trf_amt = parseInt(trf_amt);
        console.log(`Your current balance is ${cur_bal}`);
        console.log(`Amount Entered: ${trf_amt}`);
        console.log(cur_bal)
        if (trf_amt>=1000 && trf_amt<=2000)
            {  
                if (cur_bal>=trf_amt){
                console.log("Transfer sucessful");
                cur_bal=(trf_amt-cur_bal);
                console.log(`Your current balance is ${cur_bal}`);
                rl.close();
                getUserInput(opt1);
                }
                else{
                    console.log("Insufficient Balance");
                    rl.close();
                    getUserInput(opt1);
                }
            }
       
            else {
                console.log("Invalid amount entered");
                console.log(`Your current balance is ${cur_bal}`);
                rl.close();
                getUserInput(opt1);
            }
           
    });
}

function getUserInput(opt1) {
    const readline = require('readline');
    const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});
console.log("------------------------------------");
console.log("Welcome Muhammad Farhan");
console.log(`Your current balance is ${cur_bal}`);
console.log("Please select number from the menu");
console.log("1. Check Balance");
console.log("2. Cash Withdrawal");
console.log("3. Cash Deposit");
console.log("4. Transfer Funds");
console.log("5. Exit");
console.log("------------------------------------");

    rl.question('Please select an option: ', (opt1) => {
        opt1 = parseInt(opt1);
        //console.log(`Option selected: ${opt1}`);
        if (opt1 == 1) {
            console.log("Option Selected: Check Balance");
            console.log(`Your current balance is ${cur_bal}`);
            rl.close();
            getUserInput(opt1);
        } else if (opt1==2)
        {
            console.log("Option Selected: Cash Withdrawal");
            console.log(`Your current balance is ${cur_bal}`);
            rl.close();
            Withdraw(2500);
           
        }
        else if (opt1==3)
        {
            console.log("Option Selected: Cash Deposit");
            rl.close();
            Deposit(1500);
        }else if (opt1==4)
        {
            console.log("Option Selected: Funds Transfer");
            rl.close();
            Transfer(1500);
           
        }
        else if (opt1==5)
        {
            console.log("Option Selected: Exit");
            console.log("Thanks you for using our services. Take Care");
            rl.close();
                       
        }else
        {
            console.log("Invalid Option");
             rl.close();
        }
    });
}








getUserInput(opt1);
//Withdraw(wht_amt);
//Deposit(dep_amt);
/*
Design a cash register drawer function checkCashRegister() that accepts 
 purchase price as the first argument (price),
 payment as the second argument (cash),
 and cash-in-drawer (cid) as the third argument.

cid is a 2D array listing available currency.

The checkCashRegister() function should always return an object with a status key and a change key.

Return {status: "INSUFFICIENT_FUNDS", change: []} if cash-in-drawer is less than the change due, or if you cannot return the exact change.

Return {status: "CLOSED", change: [...]} with cash-in-drawer as the value for the key change if it is equal to the change due.

Otherwise, return {status: "OPEN", change: [...]}, with the change due in coins and bills, sorted in highest to lowest order, as the value of the change key.

Penny	$0.01 (PENNY)
Nickel	$0.05 (NICKEL)
Dime	$0.1 (DIME)
Quarter	$0.25 (QUARTER)
Dollar	$1 (ONE)
Five Dollars	$5 (FIVE)
Ten Dollars	$10 (TEN)
Twenty Dollars	$20 (TWENTY)
One-hundred Dollars	$100 (ONE HUNDRED)

*/

const denomination = {
    "PENNY": 1,
    "NICKEL": 5,
    "DIME": 10,
    "QUARTER": 25,
    "DOLLAR": 100,
    "FIVE": 500,
    "TEN": 1000,
    "TWENTY": 2000,
    "ONE HUNDRED": 10000
};

function checkCashRegister(price, cash, cid) {
    // Convert to integers:
    let change = cash * 100 - price * 100;
    let availableCash = 0;
    let result = [];
    // Going through cash register and adding available cash:
    for (let elem of cid) {
        // Adding cash in pennies (integer):
        availableCash += elem[1]*100;
    }
    // If there's not enough available cash to give back change:
    if (change > availableCash) {
        return {status: "INSUFFICIENT_FUNDS", change: []};
    } else if (change === availableCash) {
        return {status: "CLOSED", change: cid}
    } else {
        cid = cid.reverse();
        for (const elem of cid) {
            let cashRegister = [elem[0], 0];
            elem[1] = elem[1] * 100;
            while (change >= denomination[elem[0]] && elem[1] > 0) {
                change -= denomination[elem[0]];
                elem[1] -= denomination[elem[0]];
                cashRegister[1] += denomination[elem[0]]/100;
            }
            if (cashRegister[1] > 0) {
                result.push(cashRegister);
            }
        }
        if (change > 0) {
            return {status: "INSUFFICIENT_FUNDS", change: []};
        }
        return {status: "OPEN", change: result};
    }
  }
  
  checkCashRegister(19.5, 20, [["PENNY", 1.01], ["NICKEL", 2.05], ["DIME", 3.1], ["QUARTER", 4.25], ["ONE", 90], ["FIVE", 55], ["TEN", 20], ["TWENTY", 60], ["ONE HUNDRED", 100]]);
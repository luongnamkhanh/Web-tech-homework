function checkCashRegister(price, cash, cid) {
  let change = cash - price;
    let changeArr = [];
    let total = 0;
    let status = "";
    let currency = [
        { name: "ONE HUNDRED", value: 100.0 },
        { name: "TWENTY", value: 20.0 },
        { name: "TEN", value: 10.0 },
        { name: "FIVE", value: 5.0 },
        { name: "ONE", value: 1.0 },
        { name: "QUARTER", value: 0.25 },
        { name: "DIME", value: 0.1 },
        { name: "NICKEL", value: 0.05 },
        { name: "PENNY", value: 0.01 }
    ];

    for (let i = 0; i < cid.length; i++) {
        total += cid[i][1];
    }

    if (total < change) {
        status = "INSUFFICIENT_FUNDS";
        return { status: status, change: changeArr };
    } else if (total === change) {
        status = "CLOSED";
        return { status: status, change: cid };
    }

    for (let i = 0; i < currency.length; i++) {
        let value = 0;
        while (change >= currency[i].value && cid[cid.length-1-i][1] > 0) {
            change -= currency[i].value;
            cid[cid.length-1-i][1] -= currency[i].value;
            value += currency[i].value;
            change = Math.round(change * 100) / 100;
        }
        if (value > 0) {
            changeArr.push([currency[i].name, value]);
        }
    }
    if(change > 0){
        status = "INSUFFICIENT_FUNDS";
        return { status: status, change: [] };
    }
    status = "OPEN";
    return { status: status, change: changeArr };

}

checkCashRegister(19.5, 20, [["PENNY", 1.01], ["NICKEL", 2.05], ["DIME", 3.1], ["QUARTER", 4.25], ["ONE", 90], ["FIVE", 55], ["TEN", 20], ["TWENTY", 60], ["ONE HUNDRED", 100]]);
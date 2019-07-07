function checkCashRegister(price, cash, cid) {
  const convert = {
    PENNY: 0.01,
    NICKEL: 0.05,
    DIME: 0.1,
    QUARTER: 0.25,
    ONE: 1,
    FIVE: 5,
    TEN: 10,
    TWENTY: 20,
    "ONE HUNDRED": 100
  };
  var response = {};
  response.change = [];

  let totalOnHand = [];

  let owed = cash - price;
  for (let i = cid.length - 1; i >= 0; i--) {
    let currency = cid[i][0];
    let inDrawerAmount = cid[i][1];
    let multipleInDrawer = inDrawerAmount / convert[currency];
    let multiply = 0;
    if (convert[currency] <= owed && multipleInDrawer > 0) {
      while (convert[currency] <= owed && multipleInDrawer > 0) {
        owed = owed - convert[currency];
        owed = Math.round(owed * 100) / 100;
        multipleInDrawer--;
        multiply++;
      }
      totalOnHand.push(multipleInDrawer);
      response.change.push([currency, convert[currency] * multiply]);
    }
  }

  const allZero = num => {
    return num === 0;
  };

  if (owed > 0) {
    response.status = "INSUFFICIENT_FUNDS";
    response.change = [];
  } else if (totalOnHand.every(allZero)) {
    response.change = cid;
    response.status = "CLOSED";
  } else {
    response.status = "OPEN";
  }

  return response;
}

export const getCurrentItemValue = (userHolding) => {
  return userHolding.ltp * userHolding.quantity;
};

export const getInvestmentItemValue = (userHolding) => {
  return userHolding.avgPrice * userHolding.quantity;
};

export const getTotalCurrentValue = (userHoldings) => {
  let totalCurrentValue = 0;
  userHoldings.forEach((holding) => {
    totalCurrentValue += holding.ltp * holding.quantity;
  });
  return totalCurrentValue;
};

export const getTotalInvestmentValue = (userHoldings) => {
  let totalCurrentValue = 0;
  userHoldings.forEach((holding) => {
    totalCurrentValue += holding.avgPrice * holding.quantity;
  });
  return totalCurrentValue;
};

export const getTodaysPNLValue = (userHoldings) => {
  let todaysPNL = 0;
  userHoldings.forEach((holding) => {
    todaysPNL += (holding.close - holding.ltp) * holding.quantity;
  });
  return todaysPNL.toFixed(1);
};

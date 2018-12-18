function calculateTip() {

  // get our bill amount and tip percent input values
  const billAmount = Number(document.getElementById('billAmount').value);
  const tipPercent = Number(document.getElementById('tipPercent').value);

  // do the calculations
  const tip = (billAmount*(tipPercent/100)).toFixed(2);
  const total = (billAmount+Number(tip)).toFixed(2);

  // update the tip and total to results
  document.getElementById('tipAmount').innerHTML = `$ ${tip}`;
  document.getElementById('totalAmount').innerHTML = `$ ${total}`;
}
var depositButtonSavings = document.getElementById('depositButton-savings');
var withdrawButtonSavings = document.getElementById('withdrawButton-savings');
var depositButtonChecking = document.getElementById('depositButton-checking');
var withdrawButtonChecking = document.getElementById('withdrawButton-checking');
var inputBarSavings = document.getElementById('inputBar-savings');
var inputBarChecking = document.getElementById('inputBar-checking');
var displaySavingsBalance = document.getElementById('savings-balance');
var displayCheckingBalance = document.getElementById('checking-balance');

var savingsInput;
var checkingInput;

var savingsBalance = 0;
var checkingBalance = 0;

var depositSavings = function() {

  savingsBalance;
  savingsInput = parseFloat(inputBarSavings.value, 10);

  if (isNaN(savingsInput)) {
    return;
  } else {
    newBalance = savingsBalance + savingsInput;
    displaySavingsBalance.innerHTML = '$' + newBalance.toFixed(2);
  }
  savingsBalance = newBalance;
  inputBarSavings.value = "";
}

depositButtonSavings.addEventListener('click', depositSavings);

var depositChecking = function() {

  checkingBalance;
  checkingInput = parseFloat(inputBarChecking.value, 10);

  if (isNaN(checkingInput)) {
    return;
  } else {
    newBalance = checkingBalance + checkingInput;
    displayCheckingBalance.innerHTML = '$' + newBalance.toFixed(2);
  }
  checkingBalance = newBalance;
  inputBarChecking.value = "";
}

depositButtonChecking.addEventListener('click', depositChecking);

var withdrawSavings = function() {

  savingsBalance;
  checkingBalance;
  savingsInput = parseFloat(inputBarSavings.value, 10);

  if (isNaN(savingsInput)) {
    return;
  } else if (savingsInput <= savingsBalance) {
    newBalance = savingsBalance - savingsInput;
    displaySavingsBalance.innerHTML = '$' + newBalance.toFixed(2);
  } else if (savingsInput <= (savingsBalance + checkingBalance)) {
    newBalance = 0;
    checkingBalance = (checkingBalance + (savingsBalance - savingsInput));
    displaySavingsBalance.innerHTML = '$' + newBalance.toFixed(2);
    displayCheckingBalance.innerHTML = '$' + checkingBalance.toFixed(2);
  } else {
    newBalance = savingsBalance;
    displaySavingsBalance.innerHTML = '$' + newBalance.toFixed(2);
    insufficientFunds();
  }
  savingsBalance = newBalance;
  inputBarSavings.value = "";
  inputBarChecking.value = "";
}

withdrawButtonSavings.addEventListener('click', withdrawSavings);

var withdrawChecking = function() {

  checkingBalance;
  savingsBalance;
  checkingInput = parseFloat(inputBarChecking.value, 10);

  if (isNaN(checkingInput)) {
    return;
  } else if (checkingInput <= checkingBalance) {
    newBalance = checkingBalance - checkingInput;
    displayCheckingBalance.innerHTML = '$' + newBalance.toFixed(2);
  } else if (checkingInput <= (checkingBalance + savingsBalance)) {
    newBalance = 0;
    savingsBalance = (savingsBalance + (checkingBalance - checkingInput));
    displayCheckingBalance.innerHTML = '$' + newBalance.toFixed(2);
    displaySavingsBalance.innerHTML = '$' + savingsBalance.toFixed(2);
  } else {
    newBalance = checkingBalance;
    displayCheckingBalance.innerHTML = '$' + newBalance.toFixed(2);
    insufficientFunds();
  }
  checkingBalance = newBalance;
  inputBarChecking.value = "";
  inputBarSavings.value = "";
  }

withdrawButtonChecking.addEventListener('click', withdrawChecking);

var clearAll = function() {
  displayCheckingBalance.style.color = 'white';
  displaySavingsBalance.style.color = 'white';
  document.getElementById('insufficient-funds').innerHTML = "";
}

var insufficientFunds = function() {
  displayCheckingBalance.style.color = 'rgb(255, 0, 56)';
  displaySavingsBalance.style.color = 'rgb(255, 0, 56)';
  document.getElementById('insufficient-funds').innerHTML = 'INSUFFICIENT FUNDS!';
  setTimeout(clearAll, 3000);
}

const prices = document.querySelectorAll(".price-input");
const btn = document.querySelector("#check-btn");
const showResult = document.querySelector("#result");

btn.addEventListener("click", clickHandler);

function clickHandler() {
  validateInputs();
}

function validateInputs() {
  var cp = Number(prices[0].value);
  var stockq = Number(prices[1].value);
  var sp = Number(prices[2].value);

  if (cp <= 0 || stockq <= 0 || sp <= 0) {
    showResult.innerText = "Fill valid Inputs..";
  } else if (cp > sp) {
    var loss = Math.abs(((cp - sp) * stockq).toFixed(3));
    var lossPer = Math.abs((((cp - sp) * 100) / cp).toFixed(3));
    showResult.innerText =
      "You are in Loss!\nYour total loss is:" +
      loss +
      "\nYour loss  percentage is: " +
      lossPer +
      "%  .\n But don't worry keep Pateince..";
  } else if (sp > cp) {
    var profit = Math.abs(((sp - cp) * stockq).toFixed(3));
    var profitPer = Math.abs((((sp - cp) * 100) / cp).toFixed(3));
    showResult.innerText = `Great you are  in Profit!\nYour total Profit is:${profit}\nYour profit percentage is: ${profitPer}%  \n Party to banti hai`;
  } else {
    showResult.innerText = "No Profit No Loss ";
  }
}

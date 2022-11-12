const initialPrice = document.querySelector("#initial-price");
const stockQuantity = document.querySelector("#stocks-quantity");
const currentPrice = document.querySelector("#current-price");
const output = document.querySelector("#output");

const calculateProfitLossBtn = document.querySelector("#calculate-profit-loss");

function showMessage(message, flag = 0) {
  output.style.color = "black";
  output.innerText = message;

  if (flag !== 2) {
    if (flag === 1) {
      output.style.color = "green";
    } else {
      output.style.color = "red";
    }
  }
}

function calculateProfitLoss(initial, stocks, current) {
  var flag = 0;
  if (initial < current) {
    const profit = (current - initial) * stocks;
    const profitPercentage = (profit / initial) * 100;
    flag++;
    showMessage(
      `Hey, the profit is ${profit} and the percent is ${profitPercentage}%`,
      flag
    );
  } else if (initial > current) {
    const loss = (initial - current) * stocks;
    const lossPercentage = (loss / initial) * 100;
    showMessage(
      `Hey, the loss is ${loss} and the percent is ${lossPercentage}%`,
      flag
    );
  } else {
    flag = 2;
    showMessage("no pain no gain and no gain, no pain!", flag);
  }
}

function clickEventHandler() {
  const ip = initialPrice.value;
  const qnty = stockQuantity.value;
  const cur = currentPrice.value;
  if (ip !== "" || qnty !== "" || qnty != "") {
    calculateProfitLoss(Number(ip), Number(qnty), Number(cur));
  } else {
    showMessage("Invalid Input!");
  }
}

calculateProfitLossBtn.addEventListener("click", clickEventHandler);

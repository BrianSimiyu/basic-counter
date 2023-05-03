function calculate() {
  const startCount =
    parseFloat(document.getElementById("start-count").value) || 0;
  const fiveHundredEuro =
    parseFloat(document.getElementById("500-euro").value) * 500 || 0;
  const twoHundredEuro =
    parseFloat(document.getElementById("200-euro").value) * 200 || 0;
  const hundredEuro =
    parseFloat(document.getElementById("100-euro").value) * 100 || 0;
  const fiftyEuro =
    parseFloat(document.getElementById("50-euro").value) * 50 || 0;
  const twentyEuro =
    parseFloat(document.getElementById("20-euro").value) * 20 || 0;
  const tenEuro =
    parseFloat(document.getElementById("10-euro").value) * 10 || 0;
  const fiveEuro = parseFloat(document.getElementById("5-euro").value) * 5 || 0;
  const twoEuro = parseFloat(document.getElementById("2-euro").value) * 2 || 0;
  const oneEuro = parseFloat(document.getElementById("1-euro").value) || 0;
  const fiftyCent =
    parseFloat(document.getElementById("50-cent").value) * 0.5 || 0;
  const twentyCent =
    parseFloat(document.getElementById("20-cent").value) * 0.2 || 0;
  const tenCent =
    parseFloat(document.getElementById("10-cent").value) * 0.1 || 0;
  const fiveCent =
    parseFloat(document.getElementById("5-cent").value) * 0.05 || 0;

  const totalCash =
    fiveHundredEuro +
    twoHundredEuro +
    hundredEuro +
    fiftyEuro +
    twentyEuro +
    tenEuro +
    fiveEuro +
    twoEuro +
    oneEuro +
    fiftyCent +
    twentyCent +
    tenCent +
    fiveCent;
  const cashMinusStartCount = totalCash - startCount;

  document.getElementById("total-cash").textContent = totalCash.toFixed(2);
  document.getElementById("cash-minus-start-count").textContent =
    cashMinusStartCount.toFixed(2);
}
function reset() {
  document.querySelectorAll("input[type=number]").forEach((el) => {
    el.value = "";
  });

  document.getElementById("total-cash").textContent = "0";
  document.getElementById("cash-minus-start-count").textContent = "0";
}

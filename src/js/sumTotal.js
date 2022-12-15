export function SumTotal(elm) {
  let sum = 0;
  elm.forEach((element) => {
    sum += element.currentPrice;
  });
  document.getElementById("sumTotal").innerText = sum;
}

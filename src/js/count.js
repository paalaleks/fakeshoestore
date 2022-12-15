function Count() {
  const inc = document.getElementById("inc");
  const dec = document.getElementById("dec");
  const display = document.getElementById("totalClicks");

  let count = 1;

  inc.addEventListener("click", increase);
  dec.addEventListener("click", decrease);

  function increase() {
    count++;
    display.innerText = count;
  }
  function decrease() {
    if (count > 0) {
      count--;
      display.innerText = count;
    }
  }
}

export default Count;

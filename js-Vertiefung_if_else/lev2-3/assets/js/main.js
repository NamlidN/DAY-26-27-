function rechner(event) {
  event.preventDefault();
  let input = document.getElementById("input").value;
  let a = input - 27;

  if (a >= 27) {
    a = a * 2;
    console.log(a)
  }
}

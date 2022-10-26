let green = '0';
let red = '0';
let blue = '0';


function changeBackgroundG(value) {
  let body = document.getElementById("b");
  body.style.backgroundColor = 'rgb('+ red + ","+ green +"," +blue +")" ;
 green = value;

}
function changeBackgroundR(value) {
  let body = document.getElementById("b");
  body.style.backgroundColor = 'rgb('+ red + ","+ green +"," +blue +")" ;
  red = value;

}
function changeBackgroundB(value) {
  let body = document.getElementById("b");
  body.style.backgroundColor = 'rgb('+ red + ","+ green +"," +blue +")" ;
  blue = value;
}

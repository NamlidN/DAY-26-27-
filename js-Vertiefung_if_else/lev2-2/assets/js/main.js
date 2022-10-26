// function game(event) {
//   event.preventDefault();
//   let age1 = parseInt(document.getElementById("age1").value);
//   let height1 = parseInt(document.getElementById("height1").value);
//   let name1 = document.getElementById("name1").value;
//   let age2 = parseInt(document.getElementById("age2").value);
//   let height2 = parseInt(document.getElementById("height2").value);
//   let name2 = document.getElementById("name2").value;
//   let ahn1 = age1* 5 + height1
//   console.log(ahn1 +" "+ name1)
//    let ahn2 = age2* 5 + height2
//   console.log(ahn2 +" "+ name2)
//   if (ahn2 >= ahn1) {
//     document.getElementById('out').innerHTML = 'WINNER '+ ahn2 +" "+ name2

//   } else if (ahn2 <= ahn1) {
//     document.getElementById('out').innerHTML = 'WINNER '+ ahn1 +" "+ name1

//   }  if(ahn2 === ahn1){
//     document.getElementById('out').innerHTML = 'UNENTSCHIEDEN'

//   }
// }
const slider = document.getElementById("myRange");
const output = document.getElementById("out");
output.innerHTML = slider.value;

slider.oninput = function () {
  output.innerHTML = this.value;

  if (this.value <= 50 ) {
    let body = document.getElementById("a");
    let text = document.getElementById("text");
    body.style.backgroundColor = "rgb(9, 179, 9)";
    text.innerHTML =
      "Level of health concern: Good" +
       
      "Level of health effect: Little or no risk";
  }
  else if (this.value <= 100 && this.value >= 50) {
    let body = document.getElementById("a");
    let text = document.getElementById("text");
    body.style.backgroundColor = "orange";
    text.innerHTML =
      "Level of health concern: Moderate " +
     
      " Level of health effect: Acceptable quality";
  }
  else if (this.value >= 100 && this.value <= 150) {
    let body = document.getElementById("a");
    let text = document.getElementById("text");
    body.style.backgroundColor = "red";
    text.innerHTML =
      "Level of health concern: Unhealthy for sensitive groups "+ 
      
      "Level of health effect: Generable publics not likely affected";
  }
};

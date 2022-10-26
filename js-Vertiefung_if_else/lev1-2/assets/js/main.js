
function weather(event){
    event.preventDefault()
 let input = parseInt(document.getElementById("input").value);
 if (input === 10||9||8){
    document.getElementById('out').innerHTML= 'super'

}if(input === 7||6||5){
    document.getElementById('out').innerHTML= 'gut'

}if(input === 4||3||2){
    document.getElementById('out').innerHTML= 'schlecht'

}
}

// Implementar el código aqui

// Escuchar el evento 'submit'


let calculate = document.querySelector("form");
calculate.addEventListener("submit", function(e){
    e.preventDefault();
    let height = document.querySelector("#height").value;
    let weight = document.querySelector("#weight").value;
    let imc = (weight / ((height*height)/10000)).toFixed(2);
    console.log(imc);
}) 
// Implementar el código aqui

// Escuchar el evento 'submit'

let output = ["#under", "#normal", "#over"];
let currentOutput;

let calculate = document.querySelector("form");
calculate.addEventListener("submit", function (e) {
    e.preventDefault();
    let height = document.querySelector("#height").value;
    let weight = document.querySelector("#weight").value;
    let imc = (weight / ((height * height) / 10000)).toFixed(2);
    //console.log(imc);

    let results = document.querySelector("#results");
    results.textContent = `BMI= ${imc}`;
    let id;
    if (imc < 18.6) {
        id = 0;
    } else {
        if (imc <= 24.9) {
            id = 1;
        } else {
            id = 2;
        }
    }
    //console.log(id);
    //console.dir(document.querySelector(id));

    if (currentOutput != undefined) {
        //console.log(currentOutput);
        document.querySelector(currentOutput).style = "color: black; font-weight: regular";
    }
    currentOutput = output[id];
    document.querySelector(output[id]).style = "color: red; font-weight: bold";
})
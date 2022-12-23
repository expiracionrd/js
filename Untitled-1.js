// var world = "Hello World"
// console.log(world.toLocaleUpperCase(),
// world.length)

function par(){
    const prompt = require("prompt-sync")();

    var aviso = ("Este proyecto buscará un número par o impar. Al final obtendrá el resultado de lo obtenido.");
    console.log(aviso)

    var number;
    var SoloN = ("---------- Por favor, limítese a escribir solo digitos. ----------")
    number = prompt("Escriba un numero = ");

    
    if (number % 2 == 0) {
        
        console.log(number, "es un número par")
    }
    
    else if (isNaN(number)) {
        console.log(SoloN)
    }
        
    else{
        console.log("Número impar", number)
    }

}

par();
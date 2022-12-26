
let pantonIngresado = parseInt(prompt("ingrese el panton"));
let amountOfInk = parseInt(prompt("ingrese la cantidad"));

let pantones = [
    {
     panton: 7475,
     proBlue:170.0,
     yellow:10.0,
     black:80.0,
     transpWh:740.0
    },
    {
    panton: 7476,
    proBlue:175.0,
    yellow:10.0,
    black:75.0,
    transpWh:740.0  
    }
    ]

//filtrado de panton
const pantonDeseado = pantones.find(pantonera =>
    pantonera.panton === pantonIngresado
)
console.log(pantonDeseado);

 
//va a recorrer el objeto y a operar con todos los valores, el valor panton queda eliminado, ya que no es necesario operar con este, es solo un numero para identificarlo dentro del array.

for (const cant in pantonDeseado) {
    delete pantonDeseado.panton;
    console.log (cant + " = " + (pantonDeseado[cant] = (pantonDeseado[cant] * (amountOfInk * 100) / 1) / 100)) + " ml";
}
    


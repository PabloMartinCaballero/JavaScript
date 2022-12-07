
let panton = parseInt(prompt ("ingrese el panton deseado"));
let amountOfInk = parseInt(prompt("ingrese la cantidad de tinta deseada"));

while (panton != 0) {

    alert("ingresaste al bucle")

       if (panton == 7475){

        let proBlue = (amountOfInk * 100) / 1;
        proBlue = (170.0 * proBlue) / 100;
        

        let yellow = (amountOfInk * 100) / 1;
        yellow = (10.0 * yellow) / 100;
        
        
        let black = (amountOfInk * 100) / 1;
        black = (80.0 * black) / 100;
        

        let trWhite = (amountOfInk * 100) / 1;
        trWhite = (740.0 * trWhite) / 100;
        

        function result (panton1, panton2, panton3, panton4){
            alert("Para preparar tu panton necesitas las siguientes cantidades "+ "Pro Blue = " + panton1 + "ml, "+ "Yellow = " + panton2 + "ml, "
            +"Black = "+ panton3 + "ml, " + "Transp White = " + panton4 + "ml. ")
        }
        
        result (proBlue, yellow, black, trWhite); 
        
        }else{
        alert ("Panton incorrecto")
        } 

    //condicion de salida
    panton =  parseInt(prompt("ingrese otro panton o escriba 0 para salir"));
}

alert ("Gracias vuelva prontos")


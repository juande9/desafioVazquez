ValortiposDeCambio = []
NombreCambio = ["Oficial", "Blue", "Cripto", "CCL"]

function cotizacion(NombreCambio) {
    ValortiposDeCambio.push(parseFloat(prompt("Ingrese cotización: " + NombreCambio)))
}

function cotizarDolar(pesos) {
    let cotizacion = prompt("¿Que dolar desea tomar?\n1) Oficial\n2) BLUE\n3) Cripto\n4) CCL")
    switch (cotizacion) {
        case "1":
            alert((pesos / ValortiposDeCambio[0]).toFixed(2) + " USD")
            break;
        case "2":
            alert((pesos / ValortiposDeCambio[1]).toFixed(2) + " USD")
            break;
        case "3":
            alert((pesos / ValortiposDeCambio[2]).toFixed(2) + " USD")
            break;
        case "4":
            alert((pesos / ValortiposDeCambio[3]).toFixed(2) + " USD")
            break;
        default:
            alert("Vuelva a ingresar el tipo de cambio que desea tomar")
    }
}

function cotizarPesos(dolar) {
    let cotizacion = prompt("¿Que dolar desea tomar?\n1) Oficial\n2) BLUE\n3) Cripto\n4) CCL")
    switch (cotizacion) {
        case "1":
            alert((dolar * ValortiposDeCambio[0]).toFixed(2) + " $")
            break;
        case "2":
            alert((dolar * ValortiposDeCambio[1]).toFixed(2) + " $")
            break;
        case "3":
            alert((dolar * ValortiposDeCambio[2]).toFixed(2) + " $")
            break;
        case "4":
            alert((dolar * ValortiposDeCambio[3]).toFixed(2) + " $")
            break;
        default:
            alert("Vuelva a ingresar el tipo de cambio que desea tomar")
    }
}

for (i = 0; i < 4; i++) {
    cotizacion(NombreCambio[i]);
}

let opcion = prompt("Ingrese 1 si desea convertir pesos a USD.\nIngrese 2 si desea convertir USD a pesos.\nIngrese cualquier otro caracter para salir.")
switch (opcion) {
    case "1":
        cotizarDolar(parseFloat(prompt("Ingrese la cantidad de pesos que desea convertir a USD.")))
        break;
    case "2":
        cotizarPesos(parseFloat(prompt("Ingrese la cantidad de dolares que desea convertir a Pesos.")))
        break;
    default:
        alert("Salio del conversor. Presione F5 para volver a activarlo.")
}

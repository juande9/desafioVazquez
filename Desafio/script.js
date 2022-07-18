/**
 * Se encarga de validar que lo ingresado por el usuario sea un número entero.
 * @param {string}  solicitud Es lo que se le pide al usuario (dividendo y/o divisor)
 * @returns (dividendo/divisor) Si el número es correcto, lo valida y lo devuelve como variable para continuar con la operación.
 */
function validarNumero(solicitud) {
    let num = parseInt(prompt("Ingrese un número entero para usar como " + solicitud));
    while (isNaN(num)) {
        alert("El número es incorrecto.");
        num = parseInt(prompt("Ingrese un número entero para usar como " + solicitud));
    }
    return num
}

// /**
//  * Inicia la cadena de funciones de calculos.
//  * Lo que se ingresa acá, es la cantidad de terminos que se quieren testear.
//  */
// function inicioCircuito() {
//     let cant = validarNumero("la cantidad de divisores que se quieren testear.");
//     for (i = 0; i < cant; i++) {
//         corroborarDivision();
//     }
// }

/**
 * Valida si la división entre los números es posible.
 * De ser el dividendo menor que el divisor, por defecto el resultado va a ser siempre NO DIVISIBLE.
 */
function corroborarDivision() {
    let cantidadNum = validarNumero("la cantidad de divisores que se quieren testear.")
    //    let divisor = validarNumero("el divisor.");
    for (i = 0; i < cantidadNum; i++) {
        let divisor = validarNumero("el divisor.");
        if (dividendo >= divisor) {
            corroborarDivisor(divisor);
        }
        else {
            alert("El dividendo es menor al divisor.\nEs por eso que " + dividendo + " NO es divisible por " + divisor + "\nIntenta con otro número");
            console.log("El dividendo es menor al divisor. Es por eso que " + dividendo + " NO es divisible por " + divisor + "\nIntenta con otro número")
        }
    }
}

/**
 * Valida si el divisor y el dividendo son divisibles entre si.
 * Calcula el residuo y si este da 0, los numeros son divisibles entre si.
 * @param {number} divisorComprobado Devuelve el número de cada divisor previamente comprobado.
 */
function corroborarDivisor(divisorComprobado) {
    let resultado = dividendo / divisorComprobado;
    let residuo = dividendo - ((parseInt(resultado)) * divisorComprobado);

    if (residuo == 0) {
        alert("El número " + dividendo + " es divisible por " + divisorComprobado);
        console.log("El número " + dividendo + " es divisible por " + divisorComprobado);
    } else {
        alert("El número " + dividendo + " NO es divisible por " + divisorComprobado + ".\nSu residuo no da 0, da " + residuo)
        console.log("El número " + dividendo + " NO es divisible por " + divisorComprobado + ".\nSu residuo no da 0, da " + residuo);
    }
}

let dividendo = validarNumero("el dividendo.");
//let cantidadNum = validarNumero("la cantidad de divisores que se quieren testear.")
corroborarDivision();
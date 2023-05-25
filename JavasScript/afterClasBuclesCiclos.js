

let flag = true;
do{
let nombreIngresado = prompt("Ingrese nombre de alumno/a")
let cantidadNotas = parseInt(prompt("Ingrese la cantidad de notas que desea ingresar."))

        //Validacion para no permitir que no se coloque otro tipo de dato que no sea un Numero.
        // isNaN da verdaderi cuando se pone un string y da false cuando se le otorga un numero. 
        while(isNaN(cantidadNotas)){
            alert("Ha ingresado un dato incorrecto")
            cantidadNotas = parseInt(prompt(`REVISE LOS DATOS INGRESADOS. Ingrese la cantidad de notas que desea ingresar para ${nombreIngresado}`))
        }
        let totalDeNotas = 0;
        for(let i = 1; i <= cantidadNotas; i++){
            let notaIndividual = parseInt(prompt(`Agregue de la nota nº${i}`));
            while(isNaN(notaIndividual)){
                notaIndividual = parseInt(prompt(`ATENCION, REVISE LOS DATOS INGRESADOS. Agregue de la nota nº${i}`))
            }
            if(notaIndividual >= 0 && notaIndividual <= 10){
                totalDeNotas = notaIndividual + totalDeNotas;  // En esta linea estamos sumando el valor declarado de la variable acumulable fuera del scope mas la nota que el usuario ingresa.
                console.log(`Total parcial ${totalDeNotas}`);
                }  else if(notaIndividual > 10){
                    notaIndividual = parseInt(prompt(`ATENCION, INGRESE NUMEROS ENTRE 0 Y 10. Agregue de la nota nº${i}`))
                    cantidadNotas++;
                    cantidadNotas--;
                    
                }else {
                    notaIndividual = parseInt(prompt(`ATENCION, INGRESE DATOS CORRECTOS. Agregue de la nota nº${i}`))
                }
        }
    console.log(`El total de las notas es: ${totalDeNotas}`);
    let promedio = totalDeNotas / cantidadNotas; 
    console.log(`El promedio de sus notas es: ${promedio.toFixed(2)}`); 
    if(promedio < 4){
        console.log(`${nombreIngresado} has desaprobado. Sigue intentando, la próxima será mejor.`);
    } else if(promedio <= 4){
        console.log(`${nombreIngresado} has aprobado, bien hecho.`);
    } else if(promedio >= 7 && promedio < 10){
        console.log(`${nombreIngresado} muy bien hecho, has promocionado. Seguí así!`);
    } else if(promedio === 10){
        console.log(`${nombreIngresado} felicidades! Has sacado una nota de oro!`);
    }
    let repite = prompt("¿Quiere ingresar las notas de otro alumno? Responda Si o No")
    if(repite.toUpperCase()==="SI"){
        alert("Vamos denuevo")
    } else if (repite.toUpperCase()==="NO"){
        alert("Muchas gracias por usar nuestra app")
        flag = false
    } else {
        repite = prompt("Ha ingresado un dato erróneo.¿Quiere ingresar las notas de otro alumno? Responda Si o No")
        flag = true
    }
    }while(flag)

   
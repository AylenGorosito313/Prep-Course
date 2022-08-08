// No cambies los nombres de las funciones.

function devolverPrimerElemento(array) {
  // Devuelve el primer elemento de un  array (pasado por parametro)
  // Tu código:
  return array[0];
}

function devolverUltimoElemento(array) {
  // Devuelve el último elemento de un array
  // Tu código:
  return array[array.length - 1];
}

function obtenerLargoDelArray(array) {
  // Devuelve el largo de un array
  // Tu código:
  return array.length;
}

function incrementarPorUno(array) {
  // "array" debe ser una matriz de enteros (int/integers)
  // Aumenta cada entero por 1
  // y devuelve el array
  // Tu código:
  var lista3 = [];

  for (i = 0; i < array.length; i++) {
    lista3.push(array[i] + 1);
  }
  return lista3;
}

function agregarItemAlFinalDelArray(array, elemento) {
  // Añade el "elemento" al final del array
  // y devuelve el array
  // Tu código:
  array.push(elemento);
  return array;
}

function agregarItemAlComienzoDelArray(array, elemento) {
  // Añade el "elemento" al comienzo del array
  // y devuelve el array
  // Pista: usa el método `.unshift`
  // Tu código:
  array.unshift(elemento);
  return array;
}

function dePalabrasAFrase(palabras) {
  // "palabras" es un array de strings/cadenas
  // Devuelve un string donde todas las palabras estén concatenadas
  // con espacios entre cada palabra
  // Ejemplo: ['Hello', 'world!'] -> 'Hello world!'
  // Tu código:
  return palabras.join(" ");
}

function arrayContiene(array, elemento) {
  // Comprueba si el elemento existe dentro de "array"
  // Devuelve "true" si está, o "false" si no está
  // Tu código:

  for (i = 0; i < array.length; i++)
    if (array[i] === elemento) {
      return true;
    }

  if (array[i] !== elemento) {
    return false;
  }
}

function agregarNumeros(numeros) {
  // "numeros" debe ser un arreglo de enteros (int/integers)
  // Suma todos los enteros y devuelve el valor
  // Tu código:
  sum = 0;
  for (i = 0; i < numeros.length; i++) {
    sum += numeros[i];
  }
  return sum;
}

function promedioResultadosTest(resultadosTest) {
  // "resultadosTest" debe ser una matriz de enteros (int/integers)
  // Itera (en un bucle) los elementos del array, calcula y devuelve el promedio de puntajes
  // Tu código:
  let sum = 0;
  for (i = 0; i < resultadosTest.length; i++) {
    sum += resultadosTest[i];
  }
  return sum / resultadosTest.length;
}

function numeroMasGrande(numeros) {
  // "numeros" debe ser una matriz de enteros (int/integers)
  // Devuelve el número más grande
  // Tu código:
  return Math.max.apply(null, numeros);
}

function multiplicarArgumentos() {
  // Usa la palabra clave `arguments` para multiplicar todos los argumentos y devolver el producto
  // Si no se pasan argumentos devuelve 0. Si se pasa un argumento, simplemente devuélvelo
  // Escribe tu código aquí:
  if (arguments.length === 0) {
    return 0;
  }
  if (arguments.length === 1) {
    return arguments[0];
  } else {
    sum = 1;
    for (i = 0; i < arguments.length; i++) {
      sum = sum * arguments[i];
    }

   }
  return sum;
}

function cuentoElementos(arreglo) {
  //Realiza una función que retorne la cantidad de los elementos del arreglo cuyo valor es mayor a 18.
  //Escribe tu código aquí
  var cont = 0;
  for (i = 0; i < arreglo.length; i++) {
    if (arreglo[i] > 18) {
      cont += 1;
    }
  }

  return cont;
}

function diaDeLaSemana(numeroDeDia) {
  //Suponga que los días de la semana se codifican como 1 = Domingo, 2 = Lunes y así sucesivamente.
  //Realiza una función que dado el número del día de la semana, retorne: Es fin de semana
  //si el día corresponde a Sábado o Domingo y “Es dia Laboral” en caso contrario.
  //Escribe tu código aquí
  var Lunes = 2;
  var Martes = 3;
  var Miercoles = 4;
  var Jueves = 5;
  var Viernes = 6;
  var Sabado = 7;
  var Domingo = 1;

  switch (numeroDeDia) {
    case Lunes:
      return "Es dia Laboral";
    case Martes:
      return "Es dia Laboral";
    case Miercoles:
      return "Es dia Laboral";
    case Jueves:
      return "Es dia Laboral";

    case Viernes:
      return "Es dia Laboral";
    case Sabado:
      return "Es fin de semana";
    case Domingo:
      return "Es fin de semana";
  }
}

function empiezaConNueve(n) {
  //Desarrolle una función que recibe como parámetro un número entero n. Debe retornar true si el entero
  //inicia con 9 y false en otro caso.
  //Escribe tu código aquí
  var numeroString= n.toString(); 
 
  if (numeroString[0] == 9) {
    return true;
  } else if (numeroString[0] !== 9 );
  return false;
}

function todosIguales(arreglo) {
  //Escriba la función todosIguales, que indique si todos los elementos de un arreglo son iguales:
  //retornar true, caso contrario retornar false.
  //Escribe tu código aquí
  var num1 = arreglo[0];
  for (i = 0; i < arreglo.length; i++) {
    if (num1 !== arreglo[i]) {
      return false;
    }
  }

  return true;
}

function mesesDelAño(array) {
  //Dado un array que contiene algunos meses del año desordenados, recorrer el array buscando los meses de
  // "Enero", "Marzo" y "Noviembre", guardarlo en nuevo array y retornarlo.
  //Si alguno de los meses no está, devolver: "No se encontraron los meses pedidos"
  // Tu código:
  lista = [];
  mes = array[0];

  for (let i = 0; i < array.length; i++) {
    //  if ( array[i] !== "Enero"  &&  array[i] !== "Marzo" &&   array[i] !== "Noviembre"){
    //     return "No se encontraron los meses pedidos";
    //  }

    if (array[i] == "Enero") {
      lista.push(array[i]);
    }
    if (array[i] == "Marzo") {
      lista.push(array[i]);
    }

    if (array[i] == "Noviembre") {
      lista.push(array[i]);
    }
  }
  if (lista.length === 3) {
    return lista;
  } else {
    return "No se encontraron los meses pedidos";
  }
}

function mayorACien(array) {
  //La función recibe un array con enteros entre 0 y 200. Recorrer el array y guardar en un nuevo array sólo los
  //valores mayores a 100 (no incluye el 100). Finalmente devolver el nuevo array.
  // Tu código:

  var num = [];

  for (i = 0; i < array.length; i++) {
    if (array[i] > 100 && array[i] <= 200) {
      num.push(array[i]);
    }
  }
  return num;
}

function breakStatement(numero) {
  //Iterar en un bucle aumentando en 2 el numero recibido hasta un límite de 10 veces.
  //Guardar cada nuevo valor en un array.
  //Devolver el array
  //Si en algún momento el valor de la suma y la cantidad de iteraciones coinciden, debe interrumpirse la ejecución y
  //devolver: "Se interrumpió la ejecución"
  //Pista: usá el statement 'break'
  // Tu código:
  var sum = numero;
  var num1 = [];
  for (let i = 0; i < 10; i++) {
    
    sum = sum + 2;

    if (sum == i) {
      break;
    } 
    else{
     
      num1.push(sum);
    }
   
  }
  if (num1.length <10){
    
    return "Se interrumpió la ejecución";
  }
 return num1; 
}

function continueStatement(numero) {
  //Iterar en un bucle aumentando en 2 el numero recibido hasta un límite de 10 veces.
  //Guardar cada nuevo valor en un array.
  //Devolver el array
  //Cuando el número de iteraciones alcance el valor 5, no se suma en ese caso y se continua con la siguiente iteración
  //Pista: usá el statement 'continue'
  // Tu código:
  var sum = numero;
  var num1 = [];
  for (let i = 0; i < 10; i++) {
  
    if (i == 5) {
      continue;
    }else{ 
      sum = sum + 2;
      num1.push(sum);

    }
    
  }
  return num1;

}

// No modificar nada debajo de esta línea
// --------------------------------

module.exports = {
  devolverPrimerElemento,
  devolverUltimoElemento,
  obtenerLargoDelArray,
  incrementarPorUno,
  agregarItemAlFinalDelArray,
  agregarItemAlComienzoDelArray,
  dePalabrasAFrase,
  arrayContiene,
  agregarNumeros,
  promedioResultadosTest,
  numeroMasGrande,
  multiplicarArgumentos,
  cuentoElementos,
  diaDeLaSemana,
  empiezaConNueve,
  todosIguales,
  mesesDelAño,
  mayorACien,
  breakStatement,
  continueStatement,
};

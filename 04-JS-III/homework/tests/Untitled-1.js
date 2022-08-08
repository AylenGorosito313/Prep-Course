// function arrayContiene(array, elemento) {
//     // Comprueba si el elemento existe dentro de "array"
//     // Devuelve "true" si está, o "false" si no está
//     // Tu código:
//     for ( i = 0; i <array.length; i++)
//     if  (array[i] === elemento){
//         return true;
//     }
     
//     if (array[i] !== elemento){

//         return false;
//     }
//      }    
    
// //      console.log(arrayContiene([10,20,2,4],10))
// function agregarItemAlComienzoDelArray(array, elemento) {
//     // Añade el "elemento" al comienzo del array
//     // y devuelve el array
//     // Pista: usa el método `.unshift`
//     // Tu código:
//     // for ( i = 0; i <array.length; i++)
//      array.unshift(elemento);
//     console.log(array)
    
//   }
//  agregarItemAlComienzoDelArray(["a","b","c"]," d")





//  function dePalabrasAFrase(palabras) {
    // "palabras" es un array de strings/cadenas
    // Devuelve un string donde todas las palabras estén concatenadas
    // con espacios entre cada palabra
    // Ejemplo: ['Hello', 'world!'] -> 'Hello world!'
    // Tu código:
//     console.log(palabras.join());
//  }
//  dePalabrasAFrase(["Buen dia"," Buen señor"])




// function obtenerLargoDelArray(array) {
//     // Devuelve el largo de un array
//     // Tu código:
//     console.log(array.length);
    
//   }
//   console.log(obtenerLargoDelArray(["B","C","D"])

// function devolverUltimoElemento(array) {
//     // Devuelve el último elemento de un array
//     // Tu código:
    
//     console.log(array[array.length -1])
//   }
//   devolverUltimoElemento(["Carlos", "Damian","Josea"]) 




// function devolverPrimerElemento(array) {
  // Devuelve el primer elemento de un  array (pasado por parametro)
  // Tu código:

//    console.log(array[0])

// }
// devolverPrimerElemento(["Carlos", "Damian","Josea"]);


// function agregarNumeros(numeros) {
//     // "numeros" debe ser un arreglo de enteros (int/integers)
//     // Suma todos los enteros y devuelve el valor
//     // Tu código:
//     for( i= 0; i <numeros.length; i ++){
      
//         console.log(numeros[i] +2 );
//     }
   
//   }
//  agregarNumeros([2,0,3])


function promedioResultadosTest(resultadosTest) {
    // "resultadosTest" debe ser una matriz de enteros (int/integers)
    // Itera (en un bucle) los elementos del array, calcula y devuelve el promedio de puntajes
    // Tu código:
    let sum= 0;
    for( i= 0; i <resultadosTest.length; i ++){
       
        sum+= resultadosTest[i];
        resultadosTest[-1];
         sum/=resultadosTest.length;
        
            console.log(sum)
    }
        


//   for( i= 0; i <resultadosTest.length; i ++){
   
//    console.log((resultadosTest[i] + i))
  }

  promedioResultadosTest([5,8,10,])
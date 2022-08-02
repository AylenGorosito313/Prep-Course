// No cambies los nombres de las funciones.
// "x" e "y" son números enteros (int).
  // Devuelve el número más grande
  // Si son iguales, devuelve cualquiera de los dos
  // Tu código:

  // && ! ||
  
  
  // ? 
  
  // :
  
  // if ( y < x )
  //  return x ;
  // if (y > x )
  //  return y ;

function obtenerMayor(x, y) {
 return(x>y? x:y)
  
}
obtenerMayor(60,80);
//  if  ( edad === 18) {
//     return ( "Allowed");
//    }
//   else  ( edad > 18 ) 
//     return ("Not allowed");
function mayoriaDeEdad(edad) {
  return edad >18 ? "Allowed" : "Not allowed";


  //Determinar si la persona según su edad puede ingresar a un evento.
  //Si tiene 18 años ó más, devolver --> "Allowed"
  //Si es menor, devolver --> "Not allowed"
}
mayoriaDeEdad(40);

function conection(status) {
   return status === 2 ? 'Away' : status===1 ?  'Online' : 'Offline' ;
      //Recibimos un estado de conexión de un usuario representado por un valor numérico.
  //Cuando el estado es igual a 1, el usuario está "Online"
  //Cuando el estado es igual a 2, el usuario está "Away"
  //De lo contrario, presumimos que el usuario está "Offline"
  //Devolver el estado de conexión de usuario en cada uno de los casos.

  // if  (status === 1 ) {
  //   return  "Online";
  //  }
  // else if ( status === 2 ) 
  //   return "Away";
  
  // else  ( status !== 1,2 ) 
  //   return "Offline";


    // return status === 1 || status== 2 ? "Online" : "Away" ;
}
conection(2)





function saludo(idioma) {
  // Devuelve u:
  // Si "idioma" es "aleman", devuelve "Guten Tag!"
  // Si "idioma" es "mandarin", devuelve "Ni Hao!"
  // Si "idioma" es "ingles", devuelve "Ni Hao!"
  // Si "idioma" no es ninguno de los anteiores o es `undefined` devuelve "Hola!"
  // Tu código:
  var  aleman = "aleman" ;
  var mandarin = "mandarin";
 var ingles = "ingles";


  if  (idioma === aleman ) {
       return  "Guten Tag!";
      }
     else if ( idioma == mandarin ) 
      return "Ni Hao!";
    
    else  ( idioma == ingles ) 
      return "Hello!";
}
 saludo("aleman")

function colors(color) {
  //La función recibe un color. Devolver el string correspondiente:
  //En caso que el color recibido sea "blue", devuleve --> "This is blue"
  //En caso que el color recibido sea "red", devuleve --> "This is red"
  //En caso que el color recibido sea "green", devuleve --> "This is green"
  //En caso que el color recibido sea "orange", devuleve --> "This is orange"
  //Caso default: devuelve --> "Color not found"
  //Usar el statement Switch.
  let color_1 = "blue" ;
  let color_2 = "red" ;
  let color_3 = "green" ;
  let color_4 = "orange" ;

switch(color){

    case color_1 :
      if (color == "blue")
      return "This is blue";
    case color_2: 
    if (color == "red")
      return "This is red";
    case color_3: 
      if (color == "green")
        return "This is green";
    case color_4: 
        if (color == "orange")
          return "This is orange";
  }
  
}
colors("red");

function esDiezOCinco(numero) {
  // Devuelve "true" si "numero" es 10 o 5
  // De lo contrario, devuelve "false"
  // Tu código:

  //  let x =10
  //  let y = 5
  // return(x||y? true:false);

  if ( numero == 10 || numero == 5 ){
    return true;

  } 
  return false;

}


esDiezOCinco(10)


function estaEnRango(numero) {
  // Devuelve "true" si "numero" es menor que 50 y mayor que 20
  // De lo contrario, devuelve "false"
  // Tu código:
 
  if  ( numero< 50 && numero >20 ) {
    return  true ;
   }
return  false ;
}

estaEnRango(25);
 

function esEntero(numero) {
 
  
  // Devuelve "true" si "numero" es un entero (int/integer)
  // Ejemplo: 0.8 -> false
  // Ejemplo: 1 -> true
  // Ejemplo: -10 -> true
  // De lo contrario, devuelve "false"
  // Pista: Puedes resolver esto usando `Math.floor`
  // Tu código:
  function esEntero(numero) {
    if ( numero !== Math.floor(numero)){
      return false;
    }if ( Math.floor(numero)){
        return true;
    }
}
esEntero(50);

}

function fizzBuzz(numero) {
  // Si "numero" es divisible entre 3, devuelve "fizz"
  // Si "numero" es divisible entre 5, devuelve "buzz"
  // Si "numero" es divisible entre 3 y 5 (ambos), devuelve "fizzbuzz"
  // De lo contrario, devuelve el numero
  for (i=1; i<numero;i++)


  if(numero % 3 == 0 && numero % 5 == 0 ){
   return "FizzBuzz"
} 
  if (numero % 3 == 0 ){
   return "fizz";

} if (numero % 5 == 0 ){
   return "buzz";

} else
 return numero;
}
fizzBuzz(15);

function operadoresLogicos(num1, num2, num3) {
  //La función recibe tres números distintos.
  //Si num1 es mayor a num2 y a num3 y además es positivo, retornar ---> "Número 1 es mayor y positivo"
  //Si alguno de los tres números es negativo, retornar ---> "Hay negativos"
  //Si num3 es más grande que num1 y num2, aumentar su valor en 1 y retornar el nuevo valor.
  //0 no es ni positivo ni negativo. Si alguno de los argumentos es 0, retornar "Error".
  //Si no se cumplen ninguna de las condiciones anteriores, retornar false.

  if(num1==0  ||   num2==0 ||   num3==0 ){
    return "El numero debe ser positivo"
  }
  
  if(num1<0  ||   num2<0 ||   num3<0 ){
    return "Hay negativos"
  }
  
  if (num1> num2 ||  num1>num3){
    return"Número 1 es mayor y positivo";
  
  } else if (num1<num3 ||  num2<num3){
    return "Número 3 es mayor y positivo";
 
  } else
  return false;
}
  console.log(operadoresLogicos(2,2,8))





function esPrimo(numero) {
  // Devuelve "true" si "numero" es primo
  // De lo contrario devuelve "falso"
  // Pista: un número primo solo es divisible por sí mismo y por 1
  // Pista 2: Puedes resolverlo usando un bucle `for`
  // Nota: Los números 0 y 1 NO son considerados números primos
  for( i=2 ;i <numero; ++i){
    if (numero % i === 0 );
     return false;

    }
    return true;
}
esPrimo(3)

function esVerdadero(valor){
  //Escribe una función que reciba un valor booleano y retorne “Soy verdadero”
  //si su valor es true y “Soy falso” si su valor es false.
  //Escribe tu código aquí
 
  if( valor== true){
    return " Soy Verdadero ";

  }
  return "Soy un fake :P"
}
esVerdadero(true)

function tablaDelSeis(){
  //Escribe una función que muestre la tabla de multiplicar del 6 (del 0 al 60).
  //La función devuelve un array con los resultados de la tabla de multiplicar del 6 en orden creciente.
  //Escribe tu código aquí

var array=[]

   for (i=0 ; i <11; i++){
    array.push(i* 6);
 
  }
  return  array;
}
tablaDelSeis()
  
 


function tieneTresDigitos(numero){
    //Leer un número entero y retornar true si tiene 3 dígitos. Caso contrario, retorna false.
  //Escribe tu código aquí
  
    
    if ((numero.toString()).length === 3){
        return true;
    }
    return false    
    
  }
}
tieneTresDigitos(342)




function doWhile(numero) {
let i = 0
let resultado = numero  ;
while (i<8 )
resultado+=5 

  //Implementar una función tal que vaya aumentando el valor recibido en 5 hasta un límite de 8 veces
  //Retornar el valor final.
  //Usar el bucle do ... while.
}
doWhile(5)  
// No modificar nada debajo de esta línea
// --------------------------------

module.exports = {
  obtenerMayor,
  mayoriaDeEdad,
  conection,
  saludo,
  colors,
  esDiezOCinco,
  estaEnRango,
  esEntero,
  fizzBuzz,
  operadoresLogicos,
  esPrimo,
  esVerdadero,
  tablaDelSeis,
  tieneTresDigitos,
  doWhile
};

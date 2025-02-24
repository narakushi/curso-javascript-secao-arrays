// Dobre os numeros do array
const numeros = [5, 50, 90, 1, 2, 3, 4, 5, 5, 8, 7, 11, 15, 22, 27];
/*const numerosEmDobro = numeros.map(function(valor, indice, array) {
  return console.log(valor, indice, array);
})*/
/*
const numerosEmDobro = numeros.map(function (valor) {
  return valor * 2;
})*/

const numerosEmDobro = numeros.map((valor) => valor * 2);

console.log(numerosEmDobro);
// Filter, map, reduce

// Retorne os números maiores que 10

const numeros = [5, 50, 90, 1, 2, 3, 4, 5, 5, 8, 7, 11, 15, 22, 27];
let newArray = [];
/*
for (let numero of numeros){
  if(numero > 10){
    newArray.push(numero);
  }
}

console.log(newArray);*/

/** retornando com filter */

function callbackFilter(valor /*indice, array*/) {
  /*if(valor > 10) {
    return true;
  }
  else {
    return false;
  }*/

  return valor > 10;
}

//const numerosFiltrados = numeros.filter(callbackFilter);
//função sintetizada
/*const numerosFiltrados = numeros.filter((valor, indice, array) => {
  console.log(valor, indice, array);
  return valor > 10;
});*/

const numerosFiltrados = numeros.filter(valor => valor > 10);
console.log(numerosFiltrados);


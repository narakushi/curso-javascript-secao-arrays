//              -5         -4      -3        -2         -1
//               0        1         2         3          4                   
const nomes = ['Maria', 'João', 'Eduardo', 'Gabriel', 'Júlia'];

// pop
//const removidos = nomes.splice(-1,1);
//removendo gabreil e julia
//const removidos = nomes.splice(-2, Number.MAX_VALUE);

// shift
//const removidos = nomes.splice(0, 1);
//console.log(removidos);

// push
//nomes.splice(nomes.length, 0, 'Luiz', 'Otávio', 'Miranda');
//console.log(nomes);

//unshift
nomes.splice(0, 0, 'Luiz', 'Otávio', 'Miranda');
console.log(nomes);

//NÃO REMOVE NENHUM ELEMENTO
// const removidos = nomes.splice(3, 0);
//console.log(nomes, removidos);

//ADICIONANDO ELEMENTOS
//adiciona luiz ao inidice 3
// nomes.splice(3, 0, 'Luiz');
// console.log(nomes);

//Adicionando e removendo elementos
//adiciona luiz ao indice 3 e remove 2 elementos a parit do indice 3
//const removidos = nomes.splice(3, 2, 'Luiz', 'Otávio');
//console.log(nomes, removidos);
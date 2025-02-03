/** Como concatenar arrays*/

const a1 = [1, 2, 3];
const a2 = [4, 5, 6];
// 1a forma com concat
//const a3 = a1.concat(a2, [7,8,9], 'Luiz');
//console.log(a3);
 
//2a forma com spread operator

const a3 = [...a1, 'luiz', ...a2, ...[7, 8, 9]];
console.log(a3);
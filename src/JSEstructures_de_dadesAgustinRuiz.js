//exercici 1 Crea un array amb 5 números de manera aleatòria. Utilitza les funcions necessàries per, en aquest ordre, ordenar de menor a major i obtenir el primer i últim valor.
let exercici1 = Array.from({ length: 5 }, () => Math.floor(Math.random() * 100));
let ordenat = exercici1.sort((a,b) => a - b);
console.log(ordenat);
console.log(ordenat[0], ordenat[exercici1.length - 1]);
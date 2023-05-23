// Exercice 1 : trier des nombres
// Créer une fonction sortNumbers qui retourne un tableau avec les nombres du tableau numbers triés du plus petit au plus grand.

// let numbers = [-23,42,21,90,54,362,-12,57,78,84,35,546,128,7,15,65,28];

// function sortNumbers() {
    
// } ;

function sortNumbers(numbers) {
  return numbers((a, b) => a - b);
}

let numbers = [-23, 42, 21, 90, 54, 362, -12, 57, 78, 84, 35, 546, 128, 7, 15, 65, 28];
let sortedNumbers = sortNumbers(numbers);

console.log(sortedNumbers);
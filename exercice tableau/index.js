// Exercice 1 : Parcours d'un tableau de string

let animals = ["Dog", "Cat", "Spider", "Bat", "Snake", "Bear"];

console.log(animals);

let gods = ["Zeus", "Persephone", "Dyonisos", "Artemis", "Ares"];

for(god of gods)
{
    console.log(god);
}

// Exercice 2: Parcours de tableaux de string + conditions

let animals_even = ["Dog", "Cat", "Spider"];
let animals_odd = ["Bat", "Snake", "Bear"];

// Exercice 3 : Parcours d'un tableau de Number

let numbers = [10, 11, 15, 6];

let sum = 0;

// Exercice 4 : Tableaux imbriqués

let grades = [[20, 10], [15, 20], [13, 18]];
let average = 0;

function calculerMoyenne(grades) {
  let somme = 0;
  let nombreElements = 0;
  
  // Parcourir les tableaux imbriqués
  for (let i = 0; i < grades.length; i++) {
    for (let j = 0; j < grades[i].length; j++) {
      somme += grades[i][j];
      nombreElements++;
    }
  }

  // Calculer la moyenne
  const average = somme / nombreElements;
  return average;
}

console.log("Moyenne :", average);
// Exercice 1 : crÃ©er un objet

// let student = {
//     name : "Mikael",
//     age : 38,
//     average : 0
// };

// console.log(student.name);
// console.log(student.age);
// console.log(student.average);

// Exercice 2 : modifier un objet
// Calculez la moyenne des notes du student et assignez cette moyenne Ã  sa propriété average.

// let student = {
//     name : "Steven",
//     age : 19,
//     grades : [12, 14, 8],
//     average : 0
// };

// let tableau = student.grades;

// console.log(tableau)

// let average = student.average;

// function calculerMoyenne(tableau) {
//   // Vérifier si le tableau est vide
//   if (tableau.length === 0) {
//     return 0;
//   }

//   // Additionner toutes les valeurs du tableau
//   var somme = tableau.reduce(function(acc, valeur) {
//     return acc + valeur;
//   }, 0);

//   // Diviser la somme par la taille du tableau
//   var moyenne = somme / tableau.length;

//   return moyenne;
// }

// // Exemple d'utilisation
// average = calculerMoyenne(tableau);
// console.log(average);

// Exercice 3 : parcourir un tableau d'objets
// Pour chacun des Ã©tudiants du tableau students, affichez son name, son age et son average en utilisant l'injection de variables dans un console.log().

let students = [
    {
        name : "Steven",
        age : 18,
        average : 10
    },
    {
        name : "Jessica",
        age : 20,
        average : 13
    },
    {
        name : "Charlie",
        age : 17,
        average : 12
    },
];

for(student of students)
{
    console.log(student);
}

console.log(student)
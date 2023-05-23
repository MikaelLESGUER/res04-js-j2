// Exercice 1 : Créer des fonctions pour les opÃ©rations de base
// Créer une fonction add qui prend deux nombres en paramètres, et en retourne la somme.
// Créer une fonction sub qui prend deux nombres en paramètres, et en retourne la différence.
// Créer une fonction mult qui prend deux nombres en paramètres, et en retourne le produit.
// Créer une fonction div qui prend deux nombres en paramètres, et en retourne le quotient.
// Créer une fonction mod qui prend deux nombres en paramètres, et en retourne le reste.

// Pour tester
console.log(add(21, 21)); // doit afficher 42
console.log(sub(63, 21)); // doit afficher 42
console.log(mult(21, 2)); // doit afficher 42
console.log(div(84, 2)); // doit afficher 42
console.log(mod(42, 2)); // doit afficher 0

function add (value) {
    
    return  value + value;

}

add();

function sub (a, b) {
    
    return a - b;

}

sub();

function mult (a, b) {
    
    return a * b;

}

mult();

function div (a, b) {
    
    return a / b;

}

div();

function mod (a, b) {
    
    return a % b;

}

mod();

// Exercice 2 : une fonction pour interroger l'utilisateur
// Créer une fonction askUserOperation qui demande Ã  l'utilisateur quelle opération il veut faire, et renvoie cette valeur.

// Créer une fonction askUserFirstNumber qui demande Ã  l'utilisateur de choisir un premier nombre, et renvoie cette valeur.

// Créer une fonction askUserSecondNumber qui demande Ã  l'utilisateur de choisir un second nombre, et renvoie cette valeur.

function askUserOperation() {
    var operation = prompt("Entrez l'opération à effectuer (+, -, *, /) :");
    console.log(operation)
}

function askUserFirstNumber() {
    var nb1 = parseInt(window.prompt("Choisissez un nombre"));
    console.log(nb1)
}

function askUserSecondNumber() {
    var nb2 = parseInt(window.prompt("Choisissez un nombre"));
}

// askUserOperation();
// askUserFirstNumber();
// askUserSecondNumber();

// Exercice 3 : une fonction pour les gouverner toutes
// Créer une fonction calculator qui va appeler les fonctions de l'exercice 2 pour récupérer les infos de l'utilisateur puis va appeler les fonctions de l'exercice 1 selon ce qu'a choisi l'utilisateur.

//     N'oubliez pas d'appeler votre fonction calculator Ã  la fin de votre code pour que cela puisse fonctionner

function calculator () {
    askUserOperation();
    askUserFirstNumber();
    askUserSecondNumber();
    
    add();
    sub();
    mult();
    div();
    mod();
}

calculator()
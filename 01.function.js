console.log("01 - Fonctions");
// fonction additionner
function additionner(a, b) {
    return a + b;
}
var nb1 = 10;
var nb2 = 20;
console.log("Resultat1 =", additionner(nb1, nb2));
//Variable de type fonction
var somme = additionner;
console.log("Resultat2 =", somme(nb1, nb2));
// multiplication
var multiplication = function (a, b) {
    return a * b;
}
var resultat3 = multiplication(nb1, nb2);
console.log("Resultat2 =", resultat3);
// fonction comme élément de 1e ordre
var afficherOperation = function (nomOperation, operation, nb1, nb2) {
    return nomOperation + "(" + nb1 + "," + nb2 + ")=" + operation(nb1, nb2);
}
console.log(afficherOperation("Somme", somme, 20, 40));
console.log(afficherOperation("Multiplication", multiplication, 10, 20));
console.log(afficherOperation("Soustraction", function (a, b) { return a - b }, 15, 5));
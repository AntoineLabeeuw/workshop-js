var log = console.log;
// fonction constructeur
function Personne(nom, prenom, pseudo) {
    this.nom = nom;
    this.prenom = prenom;
    this.pseudo = pseudo;
    this.getNomComplet = function () {
        return this.prenom + " (" + this.pseudo + ") " + this.nom;
    }
}
var jules = new Personne("LEMAIRE", "Jules", "jules77");
var paul = new Personne("LEMAIRE", "Paul", "paul44");
var afficherPersonne = function (Personne) {
    log(Personne.nom);
    log(Personne.prenom);
    log(Personne.pseudo);
    log(Personne.getNomComplet());
}
log("------------------------------------------------");
afficherPersonne(jules);
log("------------------------------------------------");
afficherPersonne(paul);
// modification
log("------------------------------------------------");
jules.pseudo = "jules44";
log(jules.pseudo);
log(jules.getNomComplet());
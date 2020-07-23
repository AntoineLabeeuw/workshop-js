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
// ajout de propriété
// verification que la property est bien undefined
log(jules.age);
Personne.prototype.age = "NON RENSEIGNE";
// verification
log(jules.age);
jules.age = 30;
// verification
log(jules.age);
log("------------------------------------------------");
Personne.prototype.getInitiales = function () {
    return this.nom.charAt(0).toUpperCase() + this.prenom.charAt(0).toUpperCase();
}
log(jules.getInitiales());
log("------------------------------------------------");
// Objet sans fonction constructeur
var robert = {
    prenom: "Robert",
    nom: "LEPREFET",
    pseudo: "robert77",
    getNomComplet: function () {
        return this.prenom + " (" + this.pseudo + ") " + this.nom;
    }
}
afficherPersonne(robert);
// heritage, ne pas oublier les "this"
function Client(nom, prenom, pseudo, numeroClient) {
    Personne.call(this, nom, prenom, pseudo);
    this.numeroClient=numeroClient;
    this.getInfos = function() {
        return this.nom + " | " + this.prenom + " | " + this.numeroClient;
    }
}
var steve = new Client("LUCAS", "Steve", "steve44", "A01");
afficherPersonne.call(this, steve);
log(steve.getInfos());
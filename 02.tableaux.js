var log = console.log;
var villes = ["nantes", "paris", "saint-nazaire", "angers", "le mans"];
// forEach()
villes.forEach(element => log(element));
// every()
log(villes.every(element => element.includes("a")));
// some
log(villes.some(element=> element.includes("-")));
// filter()
log(villes.filter(element=> !element.includes("-")).filter(element=> !element.includes(" ")));
// chainage de fonction
log(villes.filter(element=> element.endsWith("s")).map(element=>element.toUpperCase()));
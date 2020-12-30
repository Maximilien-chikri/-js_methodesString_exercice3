// exercice 3
// 1
// let mot = prompt("entrez un mot?");
// let lettre = prompt("entrez une lettre ?")

// mot = mot.replace(lettre, "");
// console.log(mot)

// 2
// let mot2 = prompt("entrez un mot?");
// let longMax = mot2.length;

// let random = Math.round(Math.random() * longMax);

// mot2 = mot2.replace(mot2.charAt(random), "");

// console.log(mot2);

// 3

let prénom = prompt("entrez votre prénom?");
let nom = prompt("entrez votre nom?").toLowerCase();
let age =parseInt(prompt("age?"));
let taille = prompt('entrez votre taille ?')

nom = nom.charAt(0).toUpperCase() + nom.substr(1).replace(nom.substr(-1), nom.substr(-1).toUpperCase());

console.log(nom)
// 1er lettre en MAJ + lettres supp en random
prénom = prénom.charAt(0).toUpperCase() + prénom.substring(1).toLowerCase();
console.log(prénom);

let prénomDel = prénom.replace(prénom.charAt(Math.random(Math.random() * prénom.length)), "")
console.log(prénomDel);

let prénomDel = prénomDel.replace(prénomDel.charAt(Math.random(Math.random() * prénomDel.length)), "")
console.log(prénomDel);


// age traduit en mois
let ageMois = age * 12;
console.log(ageMois);

// convertir taille
let tailleCm = taille.replace( "m", "");
console.log(`${tailleCm} cm`);

// conclusion
let conclusion = `bonjour ${prénomDel} ${nom}, ton prénom comporte ${prénom.length} lettres, mais malheureusement j'ai eu un petit creux et il te manque ${prénom.length - prénomDel.length} lettres. Tu es âgés de ${ageMois} mois, concernant ta taille, elle est de ${tailleCm} cm`

console.log(conclusion);


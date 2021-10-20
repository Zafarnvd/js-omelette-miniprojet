// personne
class Personne {
    constructor(nom, lieu, argent) {
        this.nom = nom;
        this.lieu = lieu;
        this.argent = argent;
        this.mainDroite = [];
        this.mainDroite = [];
        this.seDeplacer = (depart, arrivee) => {
            arrivee.personnes.push(this.nom)
            depart.personnes.pop()
            this.lieu=arrivee.nom
        }
        this.payerArticle =(article) => {
            return this.argent -= article
        }
        this.couper =(ingredient, outil) => {
            return `Nous utilisons ${outil} pour couper ${ingredient}`
        }
    }
}

// maison
class Maison {
    constructor(nom, personnes) {
        this.nom = "Maison";
        this.personnes = [];
    }
}

// outil
class Outil {
    constructor(nom,action) {
        this.nom = nom;
        this.action = "coupé";
    }
}

// ingredient
class Ingredient{
    constructor(nom,etats,prix){
        this.nom = nom;
        this.etats = etats;
        this.prix = prix;
    }
}

let oignon = new Ingredient ("oignon", "entier", 2);
let oeuf = new Ingredient ("oeuf", "entier", 1);
let epice = new Ingredient ("épice", "coupé", 5);
let fromage = new Ingredient ("fromage", "moulu", 3)
let sel = new Ingredient ("sel", "coupé", 2)

// lieu
class Lieu {
    constructor(nom, personnes,panier) {
        this.nom = nom;
        this.personnes = [];
        this.panier=panier
    }
}

// epicerie
let maison = new Lieu("Maison", []);
let epicerie = new Lieu("Epicerie", [], [
    { nom: "Panier1", contenu: []},
    { nom: "Panier2", contenu: []},
    { nom: "Panier3", contenu: []}
])

let ingredient = [oignon,oeuf,epice,fromage,sel]


// poêle
class Poêle {
    constructor(nom,action,contenu) {
        this.nom=nom;
        this.action=action;
        this.contenu = contenu;
        cuire = (cuireOmelette) => {
            cuireOmelette.etats="cuit";
            setTimeout(() => {
                console.log(`votre ${cuireOmelette.nom} est ${cuireOmelette.etats} apres 4 sec`)
            }, 4000);
        }
    }
}

// class Bol {
//     constructor(contenu) {
//         this.contenu = [];
//         melanger(nomMelange) = () => {
//             let newMelange = {
//                 nom = newMelange,
//                 état = "pas cuit"
//             }
//             this.contenu = [];
//             this.contenu.replace("pas cuit", "l'obj newMelange");
//         }        
//     }
// }


// bol
let bol = {
    nom: "bol",
    contenu: [],
    melanger(nomMelange) {
        let newMelange = {
            nom: nomMelange,
            etat: "pas cuit"
        }
        this.contenu.push(newMelange);
    }
}

// DÉBUT DE L'OMELETTE 
let zafar= new Personne("zafar","maison",100);
let personne = new Personne();
let lieu = new Lieu();
let outil = new Outil();
// let ingredient = new Ingredient();
// let lieu = new Lieu();
// let poele = new Poêle();
// let bol = new Bol();



// zafar.seDeplacer(maison, epicerie)
// console.log(maison.personne);
// console.log(zafar)
// console.log(maison.personnes)
// console.log(epicerie.personnes)
// zafar.seDeplacer(epicerie,maison)
// console.log(epicerie.personnes);
// console.log(zafar.lieu)
console.log(`${zafar.nom} est actuellement à la ${zafar.lieu}`);


zafar.seDeplacer(maison,epicerie);
console.log(maison.personnes);
console.log(epicerie.personnes);
console.log(zafar.lieu);
console.log(`${zafar.nom} est actuellement à ${zafar.lieu}`);


// console.log(epicerie.panier);
zafar.mainDroite.push(epicerie.panier[0]);
console.log(zafar.mainDroite);
console.log(zafar.nom  , "a pris le " , epicerie.panier[0].nom);
epicerie.panier.shift();
console.log("dans la main de zafar :" , zafar.mainDroite[0].nom)
console.log("dans mon epicerie  :" , epicerie.panier);

ingredient.forEach(element => {
    zafar.mainDroite[0].contenu.push(element)
    console.log(zafar.nom, "a pris 1", element.nom);
});

console.log(zafar.mainDroite[0]);


for (let index = 0; index < zafar.mainDroite[0].contenu.length; index++) {
    const element = zafar.mainDroite[0].contenu[index];
    zafar.payerArticle(element.prix)
    console.log(`${element.nom} pour ${element.prix} euros `)
}

console.log("l'argent qu'il reste me", zafar.argent);

// Retourner à la maison pour continuer l'omelette
zafar.seDeplacer(epicerie, maison)


// Afficher un petit message
console.log("Je suis de retour a la ", zafar.lieu);

// Vérifier chaque ingrédient dans le bol et le couper seulement s'il est entier ! Pour ça on utilise la méthode couper de personnage


// Mélanger le contenu du bol avec la méthode melanger. on va nommer ce mélange une 'omelette' (à passer en param).

// Afficher un message avec le nouveau mélange

// vider le contenu du bol dans la poêle. Il ne doit plus rien avoir dans le bol et y avoir juste l'omelette pas cuite.

// Cuire l'omelette avec la méthode de la poêle 

// Afficher un message final, votre omelette est cuite :)
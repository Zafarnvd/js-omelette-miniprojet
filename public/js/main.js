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
            depart.personnes.slice(depart.personnes.indexOf(this), 1)
            this.lieu=arrivee.nom
        }
        this.payerArticle =(article) => {
            this.argent -= article.prix;
        }
        this.couper =(ingredient, outil) => {
            if (ingredient.etat == "entier") {
                outil.action(ingredient)
            }
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

// ingredient
class Ingredient{
    constructor(nom,etats,prix){
        this.nom = nom;
        this.etats = etats;
        this.prix = prix;
    }
}

// outil
let Outil = {
    nom : "outil",
    action(ingredient) {
        ingredient.etats = "coupe"
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
let poele = {
    nom: "poele",
    contenu: [],
    cuire() {
        console.log(`L'${this.contenu[0].nom} est en préparation`);
        this.contenu[0].etat = "cuite"
        setTimeout(() => {
            console.log(`${this.contenu[0].nom} est ${this.contenu[0].etat}`);
        }, 4000);
    }
}


// bol
let bol = {
    nom: "bol",
    contenu: [],
    melanger(nomMelange) {
        let newMelange = {
            nom: nomMelange,
            etat: "pas cuit"
        }
        while (this.contenu.length > 0) {
            this.contenu.shift
        }
        this.contenu.push(newMelange);
    }
}

// DÉBUT DE L'OMELETTE 
let zafar= new Personne("zafar","maison",100);
let personne = new Personne();
let lieu = new Lieu();
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

zafar.seDeplacer(epicerie, maison)


console.log("Je suis de retour a la ", zafar.lieu);

bol.contenu.forEach(e => {
    perso.couper(e, couteau)
});

bol.melanger("omelette")

console.log(`${bol.contenu[0].nom} n'est ${bol.contenu[0].etat}`);
poele.contenu.push(bol.contenu.pop());
poele.cuire();

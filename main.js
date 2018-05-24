function Produit (name, price){
    this.name = name;
    this.priceHT = price;
    this.index = 0;
}

var produits = [];
var totalHT;

function Panier (){
    this.totalHT = 0;
    this.totalTTC = 0;
    this.ajoute = function (produit) {
        
        produits.push(produit);
        produit.index = produits.indexOf(produit);
        console.log(produit.index);
        
        this.totalHT += produit.priceHT;
        console.log(this.totalHT);
        this.totalTTC = this.totalHT * 1.2;
        console.log(produit.name);
        };
    this.retire = function(produit){
        produits.splice(produit.index,1);
        console.log(produits);
        console.log(produit.priceHT);
        console.log(this.totalHT);
        
        
        this.totalHT -= produit.priceHT;
        console.log(Math.round(this.totalHT * 100) / 100);
        
        }
};


var baguette = new Produit('Baguette', 0.85); // prix HT
var croissant = new Produit('Croissant', 0.80);

var panier = new Panier();
panier.ajoute(baguette);
panier.ajoute(croissant);

console.log(produits);

console.log(Math.round(panier.totalTTC * 100) / 100);  
panier.retire(croissant);

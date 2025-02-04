//XMLHppRequest => HTTP


//creer une noyuvelle instance de XMLHttpRequest

let xhr = new XMLHttpRequest();

//configurer la requete
xhr.open('GET', 'https://api.blablagues.net/?rub=blagues', true);

//Definir se qui se passe lorsque la reponse est recue
xhr.onload = reqListener;

//Envoyer la requete
xhr.send();


let xhr = new XMLHttpRequest();
xhr.onload = function(){

    if(xhr.status ===200 && xhr.status < 300){
        console.log(xhr.responseText);
    }else{
        console.log("error", this.responseText);
    }
}


xhr.onerror = () => {
   // console.log('Erreur de reseau')
}
xhr.send()


// Methode fech()

//fetch("mon lien api", objet d'option)

//.then((response) =>) {... })
//.catch((error) => {...})

fetch('https://api.blablagues.net/?rub=blagues')
.then((response) => {
    console.log(response)
})

.catch((error) => {
    console.log(error)
})

//fonction qui retourne bonjour dans la console
function bigUp(){
    console.log('Bonjour');

}
bigUp();//retourner la fonction


//tableau mapé
const numbers = [1, 2, 3, 4, 5];
const double = numbers.map(number => number * 2);
console.log(double)
console.log(typeof(numbers))
console.log(typeof(bigUp))


//Tableau avec la methode map() qui retourne les elements du tableau avec leur caracteristique

const produits = [{
    nom: "smartphone",
    marque: "samsung",
    model: "s25 ultra"
},
{
nom: "ordinateures",
marque: "mackbook",
model: "pro"
}];

const nproduits = produits.map(produits => 
`
${produits.nom}
${produits.marque}
${produits.model}
`);
console.log(nproduits.join(''));// join('') pour ranger les elements du tableau

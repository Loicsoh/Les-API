//XMLHppRequest => HTTP


//creer une noyuvelle instance de XMLHttpRequest

// let xhr = new XMLHttpRequest();

// //configurer la requete
// xhr.open('GET', 'https://api.blablagues.net/?rub=blagues', true);

// //Definir se qui se passe lorsque la reponse est recue
// xhr.onload = reqListener;

// //Envoyer la requete
// xhr.send();


// let xhr = new XMLHttpRequest();
// xhr.onload = function(){

//     if(xhr.status ===200 && xhr.status < 300){
//         console.log(xhr.responseText);
//     }else{
//         console.log("error", this.responseText);
//     }
// }


// xhr.onerror = () => {
//    // console.log('Erreur de reseau')
// }
// xhr.send()


// Methode fech()

//fetch("mon lien api", objet d'option)

//.then((response) =>) {... })
//.catch((error) => {...})

fetch('https://api.blablagues.net/?rub=blagues')
.then((response) => {
    // console.log(response)
})

.catch((error) => {
    console.log(error)
})

//fonction qui retourne bonjour dans la console
function bigUp(){
    // console.log('Bonjour');

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


//CRUD => Create(POST), Read(GET), Update(PUT), Delete(DELETE)

//cd nom du projet 
//npm init -y
//npm install express


// ######## npm install -g json-server ##################

//init2

const init2 = {
    method: "DELETE",
    headers: {
    "Content-Type": "application/json"
    },
    body: JSON.stringify({
    pseudo: "rostodev",
    message: "Hello world!",
    }),
    mode: "cors",
    credentials: "same-origin",
    };
    // fetch("http://localhost:3000/posts", init2)
    // .then(() => console.log("data envoyée"));

    document.querySelector("form").addEventListener("submit", () => {
        fetch("http://localhost:3000/posts/9c3d", init2)
        .then(() => console.log("data envoyée"))
    })

    // asynchrone

    setInterval(() => {
        //console.log("text");
    }, 2000);

    //**2 
    
    //fetch("nom lieu") .then((res) => res)

    //asynchrone

    async function fetchData(){
        await fetch('mon lieu')

        // attend que le await soit executer avant de continuer

        executeFonction();
    }

    const fetchData2 = async () => {
        awit fetch("mon lien")
        executeFonction();
    }

    user
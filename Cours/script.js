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
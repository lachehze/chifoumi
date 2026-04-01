let aListeImage = [
    {
        titre:'Buhund Norvegien'
    },
    {
        titre:'Chien Norvégien'
    },
    {
        titre:'Field Spaniel'
    },
    {
        titre:'Groenlandais'
    },
    {
        titre:'Terrier Kerry blue' 
    }
];


/**
 * Préparation de l'interface :
 * 1) on va créer une div, pour afficher les images
 * 2) on va créer une balise img, dans la div
 * 3) on va créer le titre
 * 4) Affichage de la premiere image et du premier titre
 * 5) on va créer nos boutons
 */

// 1) création de la div :
// on commence par cibler la balise body :
const myBody = document.querySelector('body');

// on crée la div :
let myDiv = document.createElement('div');

// on ajoute la div dans le body
myBody.appendChild(myDiv);

// 2) création de la balise img
let myImg = document.createElement('img');
// on l'ajoute à la div
myDiv.appendChild(myImg);

// // on affiche la premiere image en modifiant l'attribut src
myImg.src = `../img/${aListeImage[0].adresse}`;

// 3) Création du titre (nom du chien) avec une balise h1
let myH1 = document.createElement('h1');
// On l'ajoute dans la div
myDiv.appendChild(myH1);
myH1.textContent = aListeImage[0].titre;


// 5) Les boutons :
// le bouton reculer
let btnReculer = document.createElement('button');
// On spécifie son texte
btnReculer.textContent = '<';
// on l'ajoute dans le body :
myBody.appendChild(btnReculer);

// le bouton avancer
let btnAvancer = document.createElement('button');
btnAvancer.textContent = '>';
myBody.appendChild(btnAvancer);

// le bouton play
let btnPlay = document.createElement('button');
btnPlay.textContent = 'Stop';
myBody.appendChild(btnPlay);

// Les points / étapes en bas
for(let i = 0; i < aListeImage.length; i++){
    let myRadio = document.createElement('input');
    myRadio.type = 'radio';
    myRadio.id = `radio${i}`;
    myDiv.appendChild(myRadio); 
}


/**
 * Ajout de l'interactivité
 * 1- Avec les boutons
 * 2- en autoplay
 */


// Une variable position qui enregistre notre position dans le tableau
let position = 0;

/**
 * afficher
 * @param {number} step 
 */
const afficher = (step) => {
    console.log(`avancer de ${step}`);
    position += step;
    console.log(position);
    // on va gérer les limites du tableau :
    // Si on atteint la fin du tableau (aListeImage.length), 
    // on revient au début (position 0)
    if(position >=  aListeImage.length){
        position = 0;
    }
    // si position devient négative, on revient à la fin du tableau
    if(position < 0){
        position = aListeImage.length - 1;
    }


    myImg.src = `../img/${aListeImage[position].adresse}`;
    myH1.textContent = aListeImage[position].titre;

    // mise à jour des boutons radio
    // d'abord on les déselectionne tous :
    let allRadio = document.querySelectorAll('input');
    for(let radio of allRadio){
        radio.removeAttribute('checked');
    }
    // et on check celui qui correspond à la position dans le tableau : 
    let myRadio = document.querySelector(`#radio${position}`);
    myRadio.setAttribute('checked', 'checked');
}


/**
 * L'autoplay :)
 * 
 * Le principe : on va créer une fonction dont l'unique tâche
 * sera d'appeler la fonction affiche, avec un step 1,
 * d'attendre 2 seconde,
 * puis de se rappeler elle même
 */


// avant de lancer la fonction, on va initialiser une variable autoplay à true
let autoplay = true;


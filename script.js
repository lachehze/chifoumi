//lobotomie experimentale ce code lol

let move = [
    {
    nom :'pierre',
    id : 1
    },
    {   
    nom : 'feuille',
    id : 2
    },
    {
    nom : 'ciseaux',
    id : 3
    }
];

let botMove = [
    {
    nom :'pierre',
    id : 1
    },
    {   
    nom : 'feuille',
    id : 2
    },
    {
    nom : 'ciseaux',
    id : 3
    }
]

let manche = 0;
const myBody = document.querySelector('body');
let myDiv = document.createElement('div');
let botChoiceNumber = 0;
let caca = ' ';
let myH1 = document.createElement('h1');
myDiv.appendChild(myH1);


let playerChoice = 0;
let pierre = document.createElement('button');
pierre.textContent = 'pierre';
myBody.appendChild(pierre);

let feuille = document.createElement('button');
feuille.textContent = 'feuille';
myBody.appendChild(feuille);

let ciseaux = document.createElement('button');
ciseaux.textContent = 'ciseaux';
myBody.appendChild(ciseaux);

pierre.addEventListener('click', function() {
    manche ++;

    let randomInt = Math.floor(Math.random() * botMove.length);
    let botChoice = botMove[randomInt];
    console.log(botChoice);

    console.log('tu as cliqué sur pierre');
    playerChoice = 1;




    if(playerChoice >= botChoice.id || playerChoice == 1 && botChoice.id == 3){
        if(playerChoice == botChoice.id){
            caca = 'draw';
        }
        else{
            caca = 'win';
        }
    }
    else{
        caca ='lose';
    }

let h1 = document.createElement("h1");
h1.textContent = 'manche' + ' ' + manche + ' ' + caca;

document.body.appendChild(h1);

let h2 = document.createElement("h2");
h2.textContent = "you: " + move[playerChoice - 1].nom + " | Bot: " + botChoice.nom;




document.body.appendChild(h2);
console.log(move);
console.log(botMove);
console.log(playerChoice);
console.log(botChoice);
console.log(caca);
console.log(h1);
console.log(h2);
});

feuille.addEventListener('click', function() {
    manche ++;
    
    let randomInt = Math.floor(Math.random() * botMove.length);
    let botChoice = botMove[randomInt];
    console.log(botChoice);

    console.log('tu as cliqué sur feuille');
    playerChoice = 2;




    if(playerChoice >= botChoice.id || playerChoice == 1 && botChoice.id == 3){
    if(playerChoice == botChoice.id){
        caca = 'draw';
    }
    else{
    caca = 'win';
    }
}
else{
    caca ='lose';
}

let h1 = document.createElement("h1");
h1.textContent = 'manche' + ' ' + manche + ' ' + caca;

document.body.appendChild(h1);

let h2 = document.createElement("h2");
h2.textContent = "you: " + move[playerChoice - 1].nom + " | Bot: " + botChoice.nom;



document.body.appendChild(h2);
console.log(move);
console.log(botMove);
console.log(playerChoice);
console.log(botChoice);
console.log(caca);
console.log(h1);
console.log(h2);
});

ciseaux.addEventListener('click', function() {
    manche ++;
    
    let randomInt = Math.floor(Math.random() * botMove.length);
    let botChoice = botMove[randomInt];
    console.log(botChoice);

    console.log('tu as cliqué sur ciseaux');
    playerChoice = 3;
    
    



    if(playerChoice >= botChoice.id || playerChoice == 1 && botChoice.id == 3){
    if(playerChoice == botChoice.id){
        caca = 'draw';
    }
    else{
    caca = 'win';
    }
}
else{
    caca ='lose';
}

let h1 = document.createElement("h1");
h1.textContent = 'manche' + ' ' + manche + ' ' + caca;

document.body.appendChild(h1);

let h2 = document.createElement("h2");
h2.textContent = "you: " + move[playerChoice - 1].nom + " | Bot: " + botChoice.nom;



document.body.appendChild(h2);
console.log(move);
console.log(botMove);
console.log(playerChoice);
console.log(botChoice);
console.log(caca);
console.log(h1);
console.log(h2);
});


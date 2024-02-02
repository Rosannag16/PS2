/*
REGOLE
- Tutte le risposte devono essere scritte in JavaScript
- Puoi usare Google / StackOverflow ma solo quanto ritieni di aver bisogno di qualcosa che non è stato spiegato a lezione
- Puoi testare il tuo codice in un file separato, o de-commentando un esercizio alla volta
- Per visualizzare l'output, lancia il file HTML a cui è collegato e apri la console dagli strumenti di sviluppo del browser. 
- Utilizza dei console.log() per testare le tue variabili e/o i risultati delle espressioni che stai creando.
*/

/* ESERCIZIO 1
    Dato il seguente array, scrivi del codice per stampare ogni elemento dell'array in console.
*/
const pets = ['dog', 'cat', 'hamster', 'redfish'];
console.log("**esercizio 1**");
for (let i = 0; i < pets.length; i++) {
  console.log(pets[i]);
}
/* ESERCIZIO 2
    Scrivi del codice per ordinare alfabeticamente gli elementi dell'array "pets".
*/

const pets1 = ['dog', 'cat', 'hamster', 'redfish'];
pets1.sort();
console.log("**esercizio 2**");
for (let i = 0; i < pets1.length; i++) {

  console.log(pets1[i]);
}

/* ESERCIZIO 3
    Scrivi del codice per stampare nuovamente in console gli elementi dell'array "pets", questa volta in ordine invertito.
*/

const pets2 = ['dog', 'cat', 'hamster', 'redfish'];
pets2.reverse();
console.log("**esercizio 3**");
for (let i = 0; i < pets2.length; i++) {
  console.log(pets2[i]);
}


/* ESERCIZIO 4
    Scrivi del codice per spostare il primo elemento dall'array "pets" in ultima posizione.
*/


const pets3 = ['dog', 'cat', 'hamster', 'redfish'];
pets3.push(pets3.shift());
console.log("**esercizio 4**");
for (let i = 0; i < pets3.length; i++) {
  console.log(pets3[i]);
}


/* ESERCIZIO 5
    Dato il seguente array di oggetti, scrivi del codice per aggiungere ad ognuno di essi una proprietà "licensePlate" con valore a tua scelta.
*/

const cars = [
  {
    brand: 'Ford',
    model: 'Fiesta',
    color: 'red',
    trims: ['titanium', 'st', 'active'],
  },
  {
    brand: 'Peugeot',
    model: '208',
    color: 'blue',
    trims: ['allure', 'GT'],
  },
  {
    brand: 'Volkswagen',
    model: 'Polo',
    color: 'black',
    trims: ['life', 'style', 'r-line'],
  },
]

const licensePlate = "GRDR10X";

console.log("**esercizio 5");

for (let i = 0; i < cars.length; i++) {
  cars[i].licensePlate = licensePlate;

}
for (let i = 0; i < cars.length; i++) {
  console.log(cars[i]);

}


/* ESERCIZIO 6
    Scrivi del codice per aggiungere un nuovo oggetto in ultima posizione nell'array "cars", rispettando la struttura degli altri elementi.
    Successivamente, rimuovi l'ultimo elemento della proprietà "trims" da ogni auto.
*/

const miaMacchina = {
  brand: "Nissan",
  model: "Juke",
  colore: "black",
  trims: ["gold", 'life', 'style', 'r-line'],
  licensePlate: "GRDR10X",


}

cars.push(miaMacchina);


for (let i = 0; i < cars.length; i++) {
  console.log("**esercizio 6**");
  const miaMacchina = cars[i];
  console.log(cars[i]);
}




//ora elimino trims


for (let i = 0; i < cars.length; i++) {

  delete cars[i].trims[0];


}

console.log("**esercizio 6 elimino trims**");
for (let i = 0; i < cars.length; i++) {
  console.log(cars[i]);

}



/* ESERCIZIO 7
    Scrivi del codice per salvare il primo elemento della proprietà "trims" di ogni auto nel nuovo array "justTrims", sotto definito.
*/

const justTrims = []
for (let i = 0; i < cars.length; i++) {
  justTrims.push(cars[i].trims[0]);
}
console.log("**esercizio 7**");
console.log(justTrims);




/* ESERCIZIO 8
    Cicla l'array "cars" e costruisci un if/else statament per mostrare due diversi messaggi in console. Se la prima lettera della proprietà
    "color" ha valore "b", mostra in console "Fizz". Altrimenti, mostra in console "Buzz".
*/

for (let i = 0; i < cars.length; i++) {
  const primaL = cars[i].color;
  if (primaL === 'b') {
    console.log("Fizz");
  } else {
    console.log("Buzz");
  }
}





/* ESERCIZIO 9
    Utilizza un ciclo while per stampare in console i valori del seguente array numerico fino al raggiungimento del numero 32.
*/

const numericArray = [
  6, 90, 45, 75, 84, 98, 35, 74, 31, 2, 8, 23, 100, 32, 66, 313, 321, 105,
]

let i = 0;
while (i < numericArray.length) {
  console.log(numericArray[i]);
  if (numericArray[i] === 32) {
    break
  }
  i++
}


/* ESERCIZIO 10
    Partendo dall'array fornito e utilizzando un costrutto switch, genera un nuovo array composto dalle posizioni di ogni carattere all'interno
    dell'alfabeto italiano.
    es. [f, b, e] --> [6, 2, 5]
*/
const charactersArray = ['g', 'n', 'u', 'z', 'd']
const alfabeto = "abcdefghilmnopqrstuvz";

const posizione = [];

for (let i = 0; i < charactersArray.length; i++) {
  const posizione = charactersArray[i];

}

switch (posizione) {
  case "a":
    posizione.push(1);
    break;
  case "b":
    posizione.push(2);
    break;
  case "c":
    posizione.push(3);
    break;
  case "d":
    posizione.push(4);
    break;
  case "e":
    posizione.push(5);
    break;
  case "f":
    posizione.push(6);
    break;
  case "g":
    posizione.push(7);
    break;
  case "h":
    posizione.push(8);
    break;
  case "i":
    posizione.push(9);
    break;
  case "l":
    posizione.push(10);
    break;
  case "m":
    posizione.push(11);
    break;
  case "n":
    posizione.push(12);
    break;
  case "o":
    posizione.push(13);
    break;
  case "p":
    posizione.push(14);
    break;
  case "q":
    posizione.push(15);
    break;
  case "r":
    posizione.push(16);
    break;
  case "s":
    posizione.push(17);
    break;
  case "t":
    posizione.push(18);
    break;
  case "u":
    posizione.push(19);
    break;
  case "v":
    posizione.push(20);
    break;
  case "z":
    posizione.push(21);
    break;
  default:
    posizione.push(null);
    break;

}

console.log("**esesrcizio 10**");
console.log(posizione);

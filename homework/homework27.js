/*Exercitul 5 - Calculati și afișați 
suma numerelor pare între 10 și 30 (folosind metoda .reduce()).*/
const numbers = [10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22, 23, 24, 25, 26, 27, 28, 29, 30];
let listaNumerePare = [];

function verificaNumarPar(number){
    if (number % 2 === 0){
        listaNumerePare.push(number);
    }
};
numbers.forEach(verificaNumarPar);
console.log(listaNumerePare);
const suma = listaNumerePare.reduce((acummulator, currentValue) => acummulator + currentValue, 0);
console.log(suma);


/* Exercitiul 6 - Calculați și afișați media
 tuturor numerelor dintr-un array (folosind metoda .reduce()).*/
 const someNumbers = [10, 20, 30, 40, 50, 60, 70, 80, 90, 100];
 let numberOfElements = someNumbers.length;
 const sum = someNumbers.reduce((accumulator, currentValue) =>
accumulator + currentValue, 0)/numberOfElements;
console.log(sum);

/*Exercitiul 2. Verificarea parității. Creați un program care cere
utilizatorului să introducă numere întregi până când acesta
introduce "stop". Programul ar trebui să utilizeze un ciclu
while pentru a verifica dacă fiecare număr introdus este par 
sau impar și să afișeze un mesaj corespunzător.*/
while (true){
    number = prompt('introdu un integer (sau tastati "stop")!');
    if (number === 'stop'){
        break;
    }
    const num = parseInt(number);

    if(isNaN(num)){
        console.log('invalid input, enter an integer.');
    } else if (num % 2 === 0){
        console.log(num + ' este par');
    } else {
        console.log(num + ' este impar');
    }
}

/*Exercitiul 3 - Căutarea unui element într-un array. Creați un 
program care caută un element într-un array folosind un ciclu while.
Programul ar trebui să afișeze poziția la care a fost găsit elementul
sau un mesaj care spune că elementul nu a fost găsit.*/
const array = [1, 2, 3, 4, 5];
const elementCautat = Number(prompt('Ce numar vrei sa cauti?'));
let gasit = false;
let i = 0;
while(i < array.length && !gasit){
    if (array[i] === elementCautat){
        console.log(`Elementul ${elementCautat} a fost gasit la pozitia ${i}`);
        gasit = true;
    }
    i++;
}
if (!gasit){
    console.log(`Elementul nu a fost gasit`);
}

//Exercitiul: Ana's calculator v.3
const facturi = [22, 295, 176, 440, 37, 105, 10, 1100, 86, 52];
const tips = [];
const totals = [];

function calcTip(bonul){
   return bonul >= 50 && bonul <= 300 ? bonul * 20/100 : bonul * 15/100;
}

for (let i = 0; i < facturi.length; i++){
    const tip = calcTip(facturi[i]);
    tips.push(tip);
    totals.push(tip + facturi[i]);
}
//console.log(tips);
//console.log(totals);

function calcAverage(arr){
    let suma = 0;
    for (let i = 0; i < arr.length; i++){
        suma += arr[i];
    }
    return suma;
}
const mediaTotala = calcAverage(totals);
console.log(`Media totala este ${mediaTotala}`);

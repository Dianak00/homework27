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
        console.log(num + 'este par');
    } else {
        console.log(num + 'este impar');
    }
}

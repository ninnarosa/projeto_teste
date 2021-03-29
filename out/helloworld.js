var message = 'Hello Trainees';
console.log(message);
message = 'Just another message!';
console.log(message);
var frutas = ['maçã', 'banana', 'melao', 'uva', 'laranja'];
frutas[123] = "Pera";
console.log(frutas.length);
/*--------------------------------------------------------------------------------------------------------------------*/
var fruits = ['Apple', 'Orange', 'Banana'];
fruits[0];
fruits[1];
fruits[2];
fruits[3]; //indefinido
/*---------------------------------------------------------------------------------------------------------------------*/
var carta = 'Nina Rosa da Costa Assis';
console.log(carta);
carta = 'Abaete/MG';
console.log(carta);
/*********************************************************************************************************************** */
console.log('\n');
console.log('Problem 1');
var numero = [6, 1, 3, 9, 5, 2];
for (var i = 0; i < numero.length; i++) {
    if (numero[i] % 2 == 0) {
        console.log(numero[i]);
    }
    else {
        console.log(0);
    }
}
/****************************************************************************************************************************/
console.log('\n');
console.log('Problem 2');
var arrayA = [6, 5, 3, 9, 5, 6];
var arrayB = [6, 5, 3, 9, 5, 6]; // novo array
for (var i = 0; i < arrayA.length; i++) { // or for(var index in arrayA)
    var cont = 0;
    for (var j = i + 1; j < arrayB.length; j++) { // or for(var index in arrayB)
        if (arrayA[i] == arrayA[j]) {
            arrayB[j] = null;
        }
    }
}
for (var i = 0; i < arrayB.length; i++) {
    console.log(arrayB[i]);
}
/**********************************************************************************************************/
var initialArray = [1, 7, 3, 6, 5, 6];
var pivotIndex = '-1';
for (var index in initialArray) {
    var leftSum = 0;
    var rigthtSum = 0;
    for (var index2 in initialArray) {
        if (index2 < index) {
            leftSum = leftSum + initialArray[index2];
        }
        else if (index2 > index) {
            rigthtSum = leftSum + initialArray[index2];
        }
    }
    if (leftSum == rigthtSum) {
        pivotIndex = index;
    }
}
//# sourceMappingURL=helloworld.js.map
let message:string = 'Hello Trainees';
console.log(message);

message = 'Just another message!';
console.log(message);



let frutas: Array<string> = ['maçã', 'banana', 'melao', 'uva', 'laranja'];
frutas[123]  = "Pera"

console.log(frutas.length);


/*--------------------------------------------------------------------------------------------------------------------*/

let fruits: string[] = ['Apple', 'Orange','Banana'];

fruits[0];

fruits[1];

fruits[2];

fruits[3]; //indefinido


/*---------------------------------------------------------------------------------------------------------------------*/


let carta:string = 'Nina Rosa da Costa Assis';
console.log(carta);

carta = 'Abaete/MG';
console.log(carta); 

/*********************************************************************************************************************** */
console.log('\n');
console.log('Problem 1');

let numero: number[] = [6,1,3,9,5,2];

for(var i = 0; i < numero.length; i++){

    if(numero[i] % 2 == 0){
        console.log(numero[i]);
    }
    else{
        console.log(0);
    }

}


/****************************************************************************************************************************/
console.log('\n');
console.log('Problem 2');

let arrayA: number[] = [6,5,3,9,5,6];
let arrayB: number[] = [6,5,3,9,5,6]; // novo array

for(var i = 0; i < arrayA.length; i++){ // or for(var index in arrayA)
let cont = 0

   for(var j = i + 1; j < arrayB.length; j++){ // or for(var index in arrayB)
    
       if(arrayA[i] == arrayA[j]){
            arrayB[j] = null;
        }
    }
}
for(var i = 0; i < arrayB.length; i++){
   console.log(arrayB[i]);
}

/**********************************************************************************************************/

let initialArray: Array<number> = [1,7,3,6,5,6];
let pivotIndex: string = '-1';

for(var index in initialArray){
let leftSum: number = 0;
let rigthtSum: number = 0;

    for(var index2 in initialArray){
        if(index2 < index){
        leftSum = leftSum + initialArray[index2];
        }else if(index2 > index){
        rigthtSum = leftSum + initialArray[index2];
        }
    }
    if(leftSum == rigthtSum){
       pivotIndex = index;
    }
}
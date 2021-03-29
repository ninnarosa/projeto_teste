/*Input: digits = [1,2,3]
Output: [1,2,4]
Explanation: The array represents the integer 123.*/
var teste = [1, 2, 3];
var pow = 0;
var finalNum = 0;
for (var i = teste.length - 1; i >= 0; i--) {
    console.log("index = " + i + "value = " + teste[i]);
    finalNum += teste[i] * Math.pow(10, pow);
    pow++;
}
finalNum++;
console.log(finalNum);
/***********************************************************************************************************************/ 
//# sourceMappingURL=base.js.map
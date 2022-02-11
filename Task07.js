function celciusToFahrenheit(celciusTemp){
    return celciusTemp*9/5 +32 // *9/5 +32 is the conversion factor
}
 function fahrenheitToCelcius(fahrenheitTemp){
     return (fahrenheitTemp-32)*5/9  // (f-32)* 5/9 is the conversion factor
 }

let chars = ['A', 'B', 'A', 'C', 'B'];
let uniqueChars = [...new Set(chars)];
console.log(uniqueChars);

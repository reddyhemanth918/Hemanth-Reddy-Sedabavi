
function sample(callback1,callback2,number1,number2) {
    console.log("sample function started");
    result = callback1(number1)+callback2(number2)
    console.log("sample function ended and the result is",result)  
}
// 1. result should be 32112
// if number1 is 123 number 2 is 345
 /* how? 
    123 => 321
    345 => 3+4+5 = 12
*/
/*
function reverseInt(num) {
    // convert the number to a string, split it into an array of characters,
    // reverse the array, and join it back into a string
    let reversed = num.toString().split('').reverse().join('');
    let result = parseInt(reversed, 10);
    if (num < 0) {
      result *= -1;
    }
    return result;
  }
  console.log(reverseInt(123));
  */
  sample(function() {
let rev = 0;
let lastDigit;
let number1 = 123;
while(number1 != 0){  
lastDigit = number1 % 10; 
rev = rev * 10 + lastDigit;  
 number1 = Math.floor(number1/10);
   }
  console.log(rev)
  return rev.toString();
  
  }
  ,function()
  
  {
  let y = 0;
  let number2= 345;
  arr = Array.from(String(number2));
  for (let x of arr){ 
  y += parseInt(x);
  }
  console.log(y)
  return y.toString();
  }
  ,123,345)
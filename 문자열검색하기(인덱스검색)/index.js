const myString = 'JavaScript를 배우자';

//지정문자열이 존재할때 
const a1 = myString.indexOf('JavaScript');
console.log("a1 : " + a1);

const a2 = myString.indexOf('배우자'); 
console.log("a2 :" + a2);

const a3 = myString.lastIndexOf('a');
console.log(a3);

const b1 = myString.indexOf('html');
console.log("b1 :" +b1);

const b2 = myString.indexOf('j');
console.log("b2 : " + b2);


document.querySelector('.result1').innerHTML = myString.indexOf('JavaScript');
document.querySelector('.result2').innerHTML = myString.indexOf('배우자');
document.querySelector('.result3').innerHTML = myString.indexOf('Javascript', 5);
document.querySelector('.result4').innerHTML = myString.indexOf('html');
document.querySelector('.result5').innerHTML = myString.indexOf('a');
document.querySelector('.result6').innerHTML = myString.lastIndexOf('a');
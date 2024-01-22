const score = 100;
console.log(score);

const balance = new Number(100); //object
console.log(balance);
console.log(balance.toString().length);
console.log(balance.toFixed(2));
const otherNumber = 123.6789;
const otherNumber2 = 1123.6789;

console.log(otherNumber.toPrecision(4)); //***
console.log(otherNumber2.toPrecision(3)); //***

const number2 = 10000000;
console.log(number2.toLocaleString());
console.log(number2.toLocaleString("en-IN"));

//************************************************************** */

//   ***Maths****

console.log(Math);
console.log(Math.abs(-4)); //absolute value
console.log(Math.round(4.3));
console.log(Math.round(4.6)); //round number
console.log(Math.ceil(4.2)); //top value
console.log(Math.floor(4.2)); //bottom value
console.log(Math.max(10, 20, 30, 40, 50));
console.log(Math.min(10, 20, 30, 40, 50));
console.log(Math.pow(2, 3));
console.log(Math.random());
console.log(Math.random() * 10);
console.log(Math.random() * 10 + 1);
console.log(Math.floor(Math.random() * 10) + 1);
console.log(Math.ceil(Math.random() * 10) + 1);
console.log(Math.round(Math.random() * 20));

//use---Math.random (0 to 1)


// ! important

//*

//?

// todo
//? Subham-Cosmos😋

const min = 10;
const max = 20; 

console.log(Math.ceil(Math.random()*(max-min+1))+min);
console.log(Math.floor(Math.random()*(max-min+1))+min);
console.log(Math.round(Math.random()*(max-min+1))+min);

//* ans 10 to 20 
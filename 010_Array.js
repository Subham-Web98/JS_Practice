const myArray = [0, 1, 2, 3, 4, 8]; //* array mix of different DataTypes
//Number Type
console.log(myArray[2]); //? shallow copy

const Arr2 = new Array(1, 2, 3, 4);

//*Array Method

myArray.push(12); //add
myArray.push(20);
console.log(myArray);
myArray.pop(); //last value removed
console.log(myArray);

myArray.unshift(50); //! first place Add
console.log(myArray);

myArray.shift(); //*1st value removed
console.log(myArray);

console.log(myArray.includes(10));
console.log(myArray.indexOf(12));

const newArr = myArray.join();

console.log(typeof newArr);
console.log(myArray);

//*slice , splice

console.log("A", myArray);

const ArrSliced = myArray.slice(3, 6); //* 3rd index to before  6th index(not included)  ** not change the oregianl array
console.log(myArray);
console.log(ArrSliced);
console.log(myArray);
const ArrSpliced = myArray.splice(3, 2); //! menopulated the oreginal array
console.log(myArray);
console.log(ArrSpliced);

const arrHeros = ["SuperMan", "Thor", "IronMan", "Spiderman"];
const arrHeros2 = ["Subham", "Bobo", "Polo", "Deep"];

// arrHeros.push(arrHeros2)

console.log(arrHeros);

// console.log(arrHeros[4][2]); //!not recommended

// console.log(arrHeros.concat(arrHeros2));

console.log(arrHeros);

const allHeros = [...arrHeros, ...arrHeros2]; //* spread operators

console.log(allHeros);

const manyArr = [1, 2, 3, [3, 4, 5], 7, [8, 9, 10, [11, 12, 13]]];

const manyArrUsed = manyArr.flat(Infinity);
console.log(manyArrUsed);

Array.isArray("Subham")
console.log(Array.isArray("Subham"));
console.log(Array.from("Subham"));

console.log(Array.from({name:"Subham"})); //!  interview

let score1 = 100;
let score2 = 200;
let score3 = 300;

console.log(Array.of(score1, score2, score3));
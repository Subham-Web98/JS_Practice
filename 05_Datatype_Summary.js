//# Premivive and Nonpremitive Datatype
// Premitive ----

// 7 type - string , number , Boolearn , null , undefined , Symbol , Bigint

const score = 100;

const scoreValue = 100.3;

const isLoggedIn = false;

const outSideTemp = null;
let userEmail;

const Id = Symbol("123");
const anotherId = Symbol("123");

console.log(Id === anotherId);

// JavaScript is a dynamic TypeLanguage

const bigNumber = 2329629849849835n;

console.log(typeof bigNumber);

// Reference ( NonPremitive)

// Array , Object , Functions

const heros = ["captain Amerika", "Thor", "Hulk"]; // Array

let myDetail = {
  name: "Subham",
  age: 25,          //Object
  isLoggedIn: true,
  email: "<EMAIL>",
};

const myFunction = function () {
  console.log("Hi Subham");
};

console.log(typeof myFunction);
console.log(typeof myDetail);
console.log(typeof heros);

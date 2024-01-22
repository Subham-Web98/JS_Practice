const name = "Subham" + "Malliclk";
console.log(name);

const repoName = 98;

console.log(name + repoName + "Subham "); //Not recomanded

console.log(`My name is ${name} and Id is ${repoName}`); //Recomanded (Srting interpolation)

const myName = new String("SubhamCosmos"); //Object
console.log(myName[0]);
console.log(myName.__proto__);
console.log(myName.length); // method
console.log(myName.toUpperCase()); // method
console.log(myName.charAt(5)); // method ---m
console.log(myName.indexOf("h")); // method

const newName = myName.substring(6, 12);
console.log(newName);

const otherName = myName.slice(2, 7);
console.log(otherName);

const studentName = "   subham   ";
console.log(studentName);
console.log(studentName.trim());

//    new method for documantation

const url = "http://subham.org/cosmos%20malllick";

url.replace("%20", "_");
console.log(url.replace("%20", "___"));

console.log(url.includes("subahm"));

console.log(myName.split("su"), url.split("_"));

//  https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String

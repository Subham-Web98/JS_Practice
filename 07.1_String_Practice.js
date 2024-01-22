const myName = "Subham Mallick";
console.log(myName.length);
myName.slice(2, 7);
console.log(myName.slice(2, 7));

let myName2 = "Subham";
//* myName2 = myName.slice(9,15)

console.log(myName2);

console.log(myName.includes("Subham"));

console.log(myName.startsWith("Subham"));

console.log(myName.endsWith("Mallick"));

console.log(myName.match(/[a-z]/g));

console.log(myName.match(/[0-9]/g));

console.log(myName2.replace("Subham", "Cosmos"));

console.log(myName.charAt(4));

console.log(myName.indexOf("a"));

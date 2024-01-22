//*beginning of January 1, 1970, UTC (the epoch).

let myDate = new Date()
console.log(myDate.toString());
console.log(myDate.toDateString());
console.log(myDate.toJSON());
console.log(myDate.toLocaleDateString());
console.log(myDate.toLocaleString());
console.log(typeof myDate);


let myCreatedDate = new Date(2023,9,)
let myCreatedDate2  = new Date(2023,9,30 , 23 , 20)
console.log(myCreatedDate.toDateString());
console.log(myCreatedDate2.toLocaleString());

let myUpdatedDate = new Date("2023-9-30 23:25:50") //* yyyy-mm-dd
console.log(myUpdatedDate.toLocaleString());

let myTimestamp = new Date()   
console.log(myTimestamp.toLocaleString());

console.log(myCreatedDate.getTime());

console.log(Math.floor(Date.now()/1000));

//? Date is a Object 

let newDate = new Date()
console.log(newDate);
console.log(newDate.getMonth());
console.log(newDate.getDay());   //*monday

 console.log(`The time is ${newDate}`); 
 console.log(`The time is ${newDate.getMonth()}`); 

 newDate.toLocaleString('default',{
    weekday: 'long',
    timeZone: ''
 })

 
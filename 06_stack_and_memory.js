// Type of Memory --- 2 

// Stack Memory ( Premitive)

let myYoutubeName = 'Subham-Cosmos'
 let anotherName = myYoutubeName
 anotherName = "Subham-Web98"

 console.log(myYoutubeName); // Oreginal name is not changed  only change the copy value 

 console.log(anotherName);




//  Heap Memory ( Non Premitive) --Oreginal change

let user1 ={
    name: "Subham",
    age: 25,
    isLoggedIn: true,
    email: "<EMAIL>"
 }

 let user2 = user1

 user2.name = "Rajnandini"

 console.log(user1.name);
 console.log(user2.name);



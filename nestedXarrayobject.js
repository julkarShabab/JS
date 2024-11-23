//nested object

const user = {
    name : "julkar niene ",
    age : 24,
    job : "student ",
    address :{
        city : "dhaka ",
        postalCode : 6400,
        coordinates : {
            lat : 51.005,
            lng : -0.0087
        }
    }
}

console.log(user.name);
console.log(user.address);
console.log(user.address.postalCode);
console.log(user.address.coordinates.lat);

user.address.coordinates.lat = 69; // can update 
console.log(user.address.coordinates.lat);
console.log(user.contact?.phone); // will show error 
console.log(user.contact?.phone?? "no phone provided"); // show error with message

//array object

const users = [
    {name : "shabab",age : 24,city : "dhaka"},
    {name : "julkar",age : 25,city : "rajshahi"},
    {name : "JN_Shabab",age : 26,city : "dhaka"}

   
    
]
console.log(users); //whole array og object
console.log(users[1]); //certain index
console.log(users[1].city); //property of an certain index

//using for loop

for(let i = 0; i < users.length;i++){
    console.log(users[i].age);
    
}

users.push({ name: "Dave", age: 40, city: "Star City" });
console.log(users); //pushes a new object

users.pop(); // Removes the last object
console.log(users);

users[1].age = 31; // Updates age
console.log(users[1]);

delete users[0].city; // Removes the 'city' property from index 0
console.log(users[0]);

//some extras

const find = users.find(user => user.name === "Charlie");
console.log(find);

const olderUsers = users.filter(user => user.age > 30);
console.log(olderUsers);









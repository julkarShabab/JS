let number = [2,5,8,6,3,5,9]
console.log(number.sort((a,b) => b-a)); //descending order
console.log(number.sort((a,b) => a-b)); //aascending order

let files = ["file2","file1","file4","file3"]

let sorted = files.sort((a,b) => a.localeCompare(b));
console.log(sorted);

const users = [
    {name : "shabab",age : 25,city : "dhaka"},
    {name : "julkar",age : 27,city : "rajshahi"},
    {name : "JN_Shabab",age : 26,city : "dhaka"}

   
    
]

console.log(users.sort((a,b)=>a.age - b.age || a.name.localeCompare(b.name)));


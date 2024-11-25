// let number = [2,5,8,6,3,5,9]
// console.log(number.sort((a,b) => b-a)); //descending order
// console.log(number.sort((a,b) => a-b)); //aascending order

// let files = ["file2","file1","file4","file3"]

// let sorted = files.sort((a,b) => a.localeCompare(b));
// console.log(sorted);

// const users = [
//     {name : "shabab",age : 25,city : "dhaka"},
//     {name : "julkar",age : 27,city : "rajshahi"},
//     {name : "JN_Shabab",age : 26,city : "dhaka"}

   
    
// ]

// console.log(users.sort((a,b)=>a.age - b.age || a.name.localeCompare(b.name)));

//date object

const date = new Date()

const year = date.getFullYear()
const month = date.getMonth()
const day = date.getDate()
console.log(`${year} / ${month}/${day}`);


console.log(date);


//compare

const date1 = new Date("2024-12-31") //year month day format
const date2 = new Date("2025-1-1")

if(date2 > date1){
    console.log("happy new year ");
    
}
else{
    console.log("bhag bsdk");
    
}


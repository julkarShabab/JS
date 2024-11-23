let a = 1;
let b = 2;

[a,b] = [b,a] //number swapping by destructing 
console.log(a);
console.log(b);

const colors = ["red","black","white","yellow"];

[colors[0],colors[2]]= [colors[2],colors[0]] // color swapping
console.log(colors);


//assign array elements to the variable

const [firstcolor, secondcolor,thirdcolor] = colors;
console.log(firstcolor);
console.log(secondcolor);
console.log(thirdcolor);


//extract values from object

const person1 = {
    fName : "julkar",
    lName : "shabab",
    age : 24,
    job : "student"

}

const person2 = {
    fName : "spongebob",
    lName : "patrick",
    age : 30,

}

const { fName,lName,age,job } = person2;
console.log(fName);
console.log(lName);
console.log(age);
console.log(job);

//destructure in function parameter

function display({fName,lName,age,job}){
    console.log(`name = ${fName} ${lName}`);
    console.log(`age = ${age}`);
    console.log(`job = ${job}`);
    
    
    

}

display(person2);










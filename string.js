let text = "javAscript"
console.log(text.length);
console.log(text.toUpperCase());
console.log(text.toLowerCase());
console.log(text.charAt(3));
console.log(text.indexOf("script"));

let text2 = "hello,world! hello again!"
console.log(text2.lastIndexOf("hello"));
console.log(text2.includes("hellos"))
console.log(text2.startsWith("hello"));
console.log(text2.endsWith("again!"));

//slice

console.log(text.slice(0,4)); //slicing with starting and end index
console.log(text.slice(4)); // will be sliced after the given index
console.log(text.substring(0,5)); //samee as slice with start and end


console.log(text2.replace("world","shabab"));
console.log(text2.replaceAll("hello","sayonara"));

console.log(text2.split(","));

text3 = "   javascript   "
console.log(text3);
console.log(text3.trim());//trims spaces 

console.log(text.repeat(4));


let text4 = `This is
a multi-line
string.`;
console.log(text4);


let names = "shabab"
let age = 25
let message = `my name is ${names} and I am ${age} years old`
console.log(message);











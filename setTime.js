function sayHello(){
    console.log("hello");
    
}setTimeout(sayHello,3000);

const timeoutID = setTimeout(function(){
    console.log("kire...");
    
},5000)

clearTimeout(timeoutID) // won't show output


//console time

console.time("test")

for(let i =0;i<10000;i++){
    console.log(i);
    
}
console.timeEnd("test")
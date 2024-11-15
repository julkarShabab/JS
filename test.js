console.log("shabab")
let shabab = 7
console.log(shabab)

var b = "julkar"
var b = 69

// let b = 57
// let b = 59

const author = "shabab"



{
    let b = "niene"
    console.log(b)
}

// console.log(b)
// console.log(author)
console.table([b,author])

let d = BigInt("1837183782738")+BigInt("2")
console.log(d)
console.log(typeof d);

const item = {
    "shabab":true,
    "julkar":false
}
console.log(item["shabab"]);

// strict equal and not equal
if(5 ==="5"){
    console.log("hmmmm");
    
}
else{
    console.log("not hmmm");
    
}


//ternary operator

let age = 18
let canVote
canVote =age>= 18? "yes": "no"
console.log(canVote);


for(i = 0;i<=5;i++){
    console.log(i);
    
}

let j =5
while(j<=10){
    console.log(j++);
    
}


let k = 10
do{
    console.log(k++);

    
}while(k<=15);


//for ... in loop

let person = {name : "shabab",age :24,city:"dhaka"}
for(let key in person){
    console.log(key,"-->",person[key]);
    
}

//for ...of loop
let number = ["shabab","julkar","niene"]
for(let num of number){
    console.log(num);
    
}

let str = "hello"
for(let char of str){
    console.log(char);
    
}
let fruits = ["mango","banana","apple"]

let numbers = new Array(1,6,3,8,7)

fruits.push("grape")
console.log(fruits);

numbers.unshift(9)
console.log(numbers);

fruits.pop()
console.log(fruits);

numbers.shift()
console.log(numbers);

console.log(numbers.indexOf(4));
console.log(fruits.includes("grape"));
console.log(fruits.includes("banana"));

console.log(fruits.splice(0,0,"kiwi"));
console.log(numbers.slice(0,2));

for(let fruit of fruits){
    console.log(fruit);
    
}

console.log(numbers.sort());
console.log(numbers.sort().reverse());









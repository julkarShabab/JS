let coder = "shabab"
let letters = [... coder].join
console.log(letters);

let fruits = ['apple','banana','strawberry']
let veg = ['alu','potol','begun']
let num = [1,2,3,4,5]

let mixed = [...fruits,...veg,...num]
console.log(mixed);


//rest parameter


function openFridge(...foods){
    console.log(...foods);
    
}

const food1 = "burger"
const food2 = "pizza"
const food3 = "chicken fry"

openFridge(food1,food2,food3)
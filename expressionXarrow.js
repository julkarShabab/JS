//function expression

const number = [1,2,3,4,5,6]

const square = number.map(function(element){
    return Math.pow(element,2)
})

console.log(square);


//arrow function

const helllo = (name) => console.log(`hello, ${name}`);

helllo("shabab")


const numbers = [1,2,3,4,5,6]

const squares = numbers.map((element) => Math.pow(element,2))

console.log(squares);



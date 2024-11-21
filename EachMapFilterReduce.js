// for each 
//array.forEach(callback)


let numbers = [1,2,3,4,5]


numbers.forEach(double)

numbers.forEach(display)


function double(element,index,array){
    array[index] = element * 2;
}
function display(element){

    console.log(element);
    
}


//map method
//creates new array 
//array.map(callback)

const number = [1,2,3,4,5]

const sqr_num = number.map(square)
console.log(sqr_num);


function square(element){
    return Math.pow(element,2)
}


const name = ["shabab","julkar","niene"]
const new_name = name.map(upper)
console.log(new_name);


function upper(element){
    return element.toUpperCase();
}


const date = ["2024-1-19","2023-1-11","2022-3-23"]

const formatted_date = date.map(spliting)
console.log(formatted_date);

function spliting(element){
    const parts = element.split("-");
    return `${parts[2]}/${parts[1]}/${parts[0]}`;
}


//.filter() method
//creates new array by filtering out element
let numberx = [1,2,3,4,5,6,7]

let evenNumber = numberx.filter(isEven) // and here base on that filter method will give the result
console.log(evenNumber);


function isEven(element){
    return element %2 === 0; // it will return the result as boolean like true or false
}



//.reduce() method 
//reduces the element of an array to a single value


const prices = [5,10,15,35,40]

const total_price = prices.reduce(sum);
console.log(total_price);


function sum(prev,next){
    return prev + next;
}






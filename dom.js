document.title = "my website"
//document.body.style.backgroundColor = "black";// to design website even without css

const username = "Shabab";
const welcomemsg = document.getElementById("welcome-msg");
welcomemsg.style.backgroundColor = "orange";
welcomemsg.style.textAlign = "center"

welcomemsg.textContent +=  username === " " ? `guest `: username;
//console.dir(document);


//get element by class name

const fruit = document.getElementsByClassName("fruits");

console.log(fruit);
// fruit[0].style.backgroundColor = "yellow"
// fruit[1].style.backgroundColor = "grey"
// fruit[2].style.backgroundColor = "red"

// for(let x of fruit){ // to do all at a same time
//     x.style.backgroundColor = "purple"
// }


// for each doesn't work directly for getelementByClassName
// but 

// Array.from(fruit).forEach(x => {
//     x.style.backgroundColor = "blue"
// })


// get element by tag name
const h4elements = document.getElementsByTagName("h4");
const liElements = document.getElementsByTagName("li");

console.log(h4elements);

//h4elements[0].style.backgroundColor = "orange"

//liElements[3].style.backgroundColor = "lightgreen"

for(let x of h4elements){
    x.style.backgroundColor = "orange"

}

Array.from(liElements).forEach(x =>{

    x.style.backgroundColor = "lightgreen"

})


//query selector
const element = document.querySelector(".fruits");// only the first element
//for class name we will use dot before it
element.style.backgroundColor = "blue"

const element = document.querySelector("h4");//but we don't need dot for others

//queryselectorall

const fol = document.querySelectorAll(".fruits")

fol.style.backgroundColor = "red"

//it only has built in for each loop

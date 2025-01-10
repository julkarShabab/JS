const myBox = document.getElementById("myBox");

//type 1

// function changeColor(event){
    
//     event.target.style.backgroundColor = "red";
//     event.target.textContent = "ure baba 😶‍🌫️"

// }

// myBox.addEventListener("click",changeColor);

//type 2

// myBox.addEventListener("click",function(event){
//     event.target.style.backgroundColor = "red";
//     event.target.textContent = "ure baba 😶‍🌫️"

// })

//type 3

// myBox.addEventListener("click",event =>{
//     event.target.style.backgroundColor = "red";
//     event.target.textContent = "ure baba 😶‍🌫️"
// });

// myBox.addEventListener("mouseover",event =>{
//     event.target.style.backgroundColor = "lightgreen";
//     event.target.textContent = "ure sala 😎"
// });

// myBox.addEventListener("mouseout",event =>{
//     event.target.style.backgroundColor = "aquamarine";
//     event.target.textContent = "hehe boi 😋";
// })


// button er khela

// myButton.addEventListener("click",event =>{
//     myBox.style.backgroundColor = "red";
//     myBox.textContent = "ure baba 😶‍🌫️" 
// });

// myButton.addEventListener("mouseover",event =>{
//     myBox.style.backgroundColor = "lightgreen";
//     myBox.textContent = "ure sala 😎"
// });

// myButton.addEventListener("mouseout",event =>{
//     myBox.style.backgroundColor = "aquamarine";
//     myBox.textContent = "hehe boi 😋";
// })

myBox.addEventListener("keydown",event =>{
    event.target.textContent = " kaj hoy to 🫦";
    myBox.style.backgroundColor = "tomato";
});
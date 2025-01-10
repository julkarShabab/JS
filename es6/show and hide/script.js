const myButton = document.getElementById("myButton");
const myImage = document.getElementById("myAMG");

myButton.addEventListener("click", (event) => {
  if (myImage.style.display === "none") {
    myImage.style.display = "block";
    myButton.textContent = "HIDE";
  } else {
    myImage.style.display = "none";
    myButton.textContent = "SHOW";
  }
});


//if we use visibillity then it will be hidden
// myImage.style.visibillity = "hidden";
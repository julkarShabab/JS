try{
    console.log(X);
    
}
catch(error){
    console.error(error);
    
}

finally{
    console.log("this always executes");// to wrap up the error
    
}

console.log("end of program");


var x = 1;
var y = 0;

if(y ==0){
    throw new Error("you can't divide by zero");
}


const result = x/y;
console.log(result);

console.log("done");



function checking(check){
    console.log("call back checking ",check);
    
    
}

function check(callback,x,y){
    
    let result= x + y
    callback(result);
    
   
   
}

check(checking,2,3)


function func1(callback){
    setTimeout(()=> {console.log("task 1");callback()},3000);
    
}

function func2(){
    console.log("task 2");
    console.log("task 3");
    console.log("task 4");
    
}

func1(func2)


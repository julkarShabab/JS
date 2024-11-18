function checking(check){
    console.log("call back checking ",check);
    
    
}

function check(callback,x,y){
    
    let result= x + y
    callback(result);
    
   
   
}

check(checking,2,3)


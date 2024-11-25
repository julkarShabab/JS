function outerfunction(){
    let outerVariable = " this is outer variable"

    function inner(){
        console.log(outerVariable);
        
    }
    return inner();
}

outerfunction()


//for data encapsulation

function counter(){
    let count = 0;

    return function(){
        count++;
        return count;
    }
    
}

const increment = counter()
console.log(increment());
console.log(increment());


for (let i = 0; i < 5; i++) {
    console.log(increment());
    
    
}

////////////////////////

function createCounter(){
    let count = 0;

    function increment(){
        count++;
        console.log(`count increased to ${count}`);
        
    }

    return{increment}
}

const counters  = createCounter();



counters.increment()
counters.increment()
counters.increment()
counters.increment()




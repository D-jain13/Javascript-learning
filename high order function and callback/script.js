// High order function can take a function as a parameter

function add(a,b, cb){
    let result = a + b
    cb(result)
}


add(5,4,(result) => console.log(result))



// High order function can alos return a function 

function subtract(a,b){
    let result = a-b;

    return () => console.log(result);
}

let r = subtract(10,4)
r()
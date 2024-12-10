const greet = () => {
    console.log("Hey there!")
}

greet()

const addNum = (...num) => {
    let result = 0;
    for(let i=0;i<num.length;i++){
        result += num[i];
    }
    return result;
}

console.log(addNum(12,22,3,44))



// Hoisting is not allowed in case of arrow function - Hoisting menans -> calling the function before defining it

sayHi()

function sayHi(){
    console.log('Hi')
}


// This will generate error 

sayHiFromArrow()

const sayHiFromArrow = () => {
    console.log('Hi from arrow')
}

//Also we can only use spread opertor in arrow function, argument do not work in this case

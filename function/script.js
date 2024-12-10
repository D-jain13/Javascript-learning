function greet(name){
    console.log("Hello " + name)
}

greet('Dhairya')

function multiply(a,b){
    console.log(a*b)
}

let a  = parseInt(prompt("Enter number one :"))

let b  = parseInt(prompt("Enter number two :"))
multiply(a,b)


function multipleUnlimited(...number ){
    let result = 1
    for(let i=0;i<number.length;i = i+1){
        result = result * number[i]
    }
    return result
}

console.log(multipleUnlimited(22,0))



function multipleUnlimited(){
    let result = 1
    for(let i=0;i<arguments.length;i++){
        result = result * arguments[i]
    }
    return result
}

console.log(multipleUnlimited(22,2))
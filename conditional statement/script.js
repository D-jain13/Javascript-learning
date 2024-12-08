const age = 5;

if(age>=60){
   console.log('Senior citizen')
}
else if( age>=18){
    console.log('Adult')
}
else{
    console.log('Underage')
}


let ableToVote = age>=18 ? true : false;

console.log(ableToVote)


let num1 = 5
let num2 = 10
let operator = 'd'
let result = 0 

switch(operator){
    case '+' : result = num1 + num2;
                break;
    case '-' : result = num1 - num2;
                break;
    case '*' : result = num1 * num2;
                break;
    case '/' : result = num1 / num2;
                break;
    default : result = "Wrong operator";
}

console.log(result)
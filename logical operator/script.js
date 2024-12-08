const age = 18
const gender  = 'male'


//  AND operator
if(age>= 18 && gender == 'male'){
    console.log("You are an adult male")
}

// OR operator

if(age>=18 || gender == 'male' || gender == 'female'){
    console.log('You are an adult')
}

// NOT operator

const num = 5

if(num % 2 != 0){
    console.log("Odd")
}
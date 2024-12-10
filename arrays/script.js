const students = ['Dhairya', "John", 'Megha']

console.log(students)
console.log(students[2])

students.push("Ram")
students.push('Dhiren')

console.log(students)
console.log(students.length)

console.log(students.indexOf("John"))
students.pop()
console.log(students)

students.reverse()
console.log(students)


//for each does not return any value whereas map return a value

const num = [1,2,3,4,5]

num.forEach((n) => console.log(n*2))

console.log(num)

const newNum = num.map((n) => n*2);

console.log(newNum)

const index = num.findIndex((num) => num === 2)

console.log(index)

const evenArr = num.filter((n) => n%2 == 0)
console.log(evenArr)


const subArr = num.slice(3,5)
console.log(subArr)

const spliceArr = num.splice(2,4)

console.log(subArr)
console.log(spliceArr)
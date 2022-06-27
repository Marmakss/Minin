const cars = ['Mazda','BMW','Ford']
const fib= [1,1,2,3,5,8]

        const people =[
    {name: 'Maxim', budget:4200},
    {name: 'Elena', budget:3500},
    {name: 'Victoria', budget:1700}
 ]
 
 console.log (people);

// ДОБАВЛЕНИЕ ИЕ СТИРАНИЕ  PUSH POP SHIFT UNSHIFT 
// cars.push('Renault')
// cars.unshift('Audi')
// console.log(cars)
//console.log(cars.length)
// console.log(cars)
// console.log(cars.shift())
// console.log(cars) 
// console.log(cars.pop()) 
// console.log(cars)
// console.log(cars.reverse())


// ЗАДАЧКА 1
// const text = 'Привет, мы изучаем JavaScript'
// const reverseText = text.split('').reverse().join('')
// console.log(reverseText)




// ПОИСК   INDEXOF
// console.log(cars)
// const index = cars.indexOf  ('BMW')
// cars[index] = 'Lada'
// console.log(cars)



//  ПОИСК FINDINDEX, FIND 
// const index = people.findIndex(function(person){
//     return person.budget === 3500
// })
// console.log(index)
// const person = people.find(function(person){
//     return person.budget === 3500
// })
// console.log(person)



// ПОИСК ЧЕРЕЗ ЦИКЛ РУКАМИ
// for (const person of people){
//     if (person.budget === 3500){
//     console.log(person)
// }
// }



// ПОИСК FIND + СТРЕЛОЧНАЯ ФУНКЦИЯ
// const person = people.find((person) => {
//     return person.budget === 3500
// })
// console.log(person)



// FIND + УПРОЩЕННАЯ СТРЕЛОЧНАЯ ФУНКЦИЯ
// const person = people.find(person => person.budget === 3500)
// console.log(person)



// INCLUDES
// console.log(cars)
// console.log(cars.includes('Mazda'))



// MAP
// const upperCaseCars = cars.map(car=>car.toUpperCase())
// console.log(upperCaseCars)

// const pow2Fib = fib.map(num => num**2)
// console.log(pow2Fib)

// const pow3 = num => num**3
// const pow3Fib=fib.map(pow3)
// console.log(pow3Fib)

// const pow2 = num => num**2
// const sqrt = num => Math.sqrt(num)

// const func1 = fib.map(pow2).map(sqrt)
// console.log(func1)
// const func2 = fib.map(pow2).map(Math.sqrt)
// console.log(func1)



// FILTER
// const pow2 = num => num**2
// const pow2Fib = fib.map(pow2)
// const filFib = pow2Fib.filter(num =>num>20)
// console.log(pow2Fib)
// console.log(filFib)



// REDUCE
// const allBudget = people
// .filter(person =>person.budget>2000)
// .reduce((acc, person) => {
//     acc += person.budget
//     return acc
// },0)
// console.log(allBudget)


// let matrix = [
//     [1, 2, 3],
//     [4, 5, 6],
//     [7, 8, 9]
// ]

// console.log(arr)
// matrix.forEach(function(element, index){
//     console.log(matrixArr)}
//     )
// let newMatrix
// matrix.forEach((firstElement, iIndex) => firstElement.forEach((secondElement, jIndex)=> {
//     console.log(iIndex, jIndex)
// }))

// let newMatrix = matrix.map((firstElement, iIndex) => firstElement.map((secondElement, jIndex) => matrix[jIndex][iIndex]));
// console.log(newMatrix);
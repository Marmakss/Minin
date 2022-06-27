//  1 ФУНКЦИИ
//Function Expression
// const greet2 = function greet2(name){
//     console.log('Снова привет, ',name)
// }

// greet('Андрей')
// greet2('Андрей')

//Function declaration
// function greet(name){
//     console.log('Привет, ',name)
// }

// console.log(typeof greet)
// console.dir(greet)



//  2 АНОНИМНЫЕ ФУНКЦИИ
// let counter = 0
// const interval = setInterval(function(){
// if (counter===5){
//     clearInterval(interval)
//     }
//     else{
//      console.log(++counter)
//     }
    
// },1000)


//  3 СТРЕЛОЧНЫЕ ФУНКЦИИ
// const arrow = (name) => {
//     console.log('Привет, ',name)
// }

// const arrow2 = name => console.log('Привет, ',name)

// arrow('Андрей')
// arrow2('Андрюха')

// const pow = num => {
//     return num ** 2
// }
// const pow2 = num => num ** 2

// console.log(pow(5))
// console.log(pow2(5))



//  4 ПАРАМЕТРЫ ПО УМОЛЧАНИЮ
// const sum = (a=40,b=10) => a+b
// console.log(sum())

// function sumAll(...all){
//     let result = 0
//     for(let num of all){
//        result +=num
//     }
//     return result
// }
// const res = sumAll(1,2,3,4,5,6,7)
// console.log(res)


//  5 ЗАМЫКАНИЯ
// function createMember(name){
//     return function(lastname){
//         return name + lastname
//     }
// }

// const logWithLastName = createMember('Максим')
// console.log(logWithLastName(' Марьин'))
// console.log(logWithLastName(' Рожков'))
// console.log(createMember('Максим')(' Рожков'))
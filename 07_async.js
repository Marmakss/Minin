// EVENT LOOP

// const timeout = setTimeout(() => {
// console.log('2500 timeout')
// }, 2500)

// const interval = setInterval(() => {
// console.log('1000 interval')
// }, 1000)

// clearTimeout(timeout)
// clearInterval(interval)


// const delay = (callback,wait = 1000) => {
//     setTimeout(callback, wait)
// }
// delay(() => { console.log('Delay 2500 msec')}, 2500)


// ПРОМИСЫ
// const delay = (wait = 1000) => {
//     const promise = new Promise((resolve,reject) => {
//     setTimeout(() =>{
//         resolve()
//         // reject ('Что-то пошло не так. Повторите попытку')
//     }, wait)
// })
// return promise
// }

// delay(2500)
// .then (() => {
//     console.log('After 2 sec')
// })
// .catch ( err => console.error(err))
// .finally (() => console.log('Finally'))

// const getData = () => new Promise(resolve =>resolve([1,1,2,3,5,8,13]))

// //getData().then(data => console.log(data))

// async function asyncExample(){
//     try {
//         await delay(3000)
//         const data = await getData()
//         console.log('Data: ', data)
//     } catch (e) {
//         console.log(e)
//     } finally {
//         console.log('Finally')
//     }
// }

// asyncExample()

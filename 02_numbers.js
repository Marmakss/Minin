// ТИПЫ
// const num1 = 42 //integer
// const num2 = 42.42 //float
// const num3 = 10e3 //pow
// console.log(num1)
// console.log('Max safe int: ',Number.MAX_SAFE_INTEGER)
// console.log('Math.pow: ', Math.pow(2,53)-1)
// console.log('Min safe int: ',Number.MIN_SAFE_INTEGER)
// console.log('Max value: ',Number.MAX_VALUE)
// console.log('Min value: ',Number.MIN_VALUE)
// console.log('Positive inf: ',Number.POSITIVE_INFINITY)
// console.log('Negative inf: ',Number.NEGATIVE_INFINITY)
// console.log('NaN: ',Number.NaN)



//ПАРСИНГ
// const stringInt ='42'
// const stringFloat ='42.42'

// console.log(stringInt+2)
// console.log(Number.parseInt(stringInt)+2)
// console.log(Number(stringInt)+2)
// console.log(+stringInt+2)

// console.log(stringFloat+2)
// console.log(Number.parseInt(stringFloat)+2)
// console.log(Number(stringFloat)+2)
// console.log(+stringFloat+2)

// console.log(stringFloat+StringInt)
// console.log(String(Number.parseFloat(stringFloat)+Number.parseInt(stringInt)))
// console.log(String(Number(stringFloat)+Number(stringInt)))
// console.log(String(+stringFloat+ +stringInt))



//ПАРСИНГ ПОСЛЕ ЗАПЯТОЙ
// console.log('Число:',0.4+0.2)
// console.log('Строка: ',(0.4+0.2).toFixed(1))
// console.log('Число: ', +(0.4+0.2).toFixed(1))
// console.log('Строка: ',Number.parseFloat(0.4+0.2).toFixed(1))
// console.log('Число: ',Number.parseFloat((0.4+0.2).toFixed(1)))



//BIG INT
// console.log('Max safe int: ',Number.MAX_SAFE_INTEGER)
// console.log(42)
// console.log('Big int: ', typeof 9007199254740991 , ' : ', 9007199254740991)
// console.log('Big int: ', typeof 900719925474099199999999999n , ' : ' ,900719925474099199999999999n)
// console.log('Big int to int: ', Number.parseInt(10n)-4)
// console.log('Big int to int: ', parseInt(10n)-4)
// console.log('Int to big int: ', 10n-BigInt(4))



// MATH
// console.log('E: ', Math.E)
// console.log('Pi: ',Math.PI)
// console.log('Sqrt: ',Math.sqrt(25))
// console.log('Pow: ',Math.pow(2,3))
// console.log('Abs: ',Math.abs(-10))
// console.log('Max: ',Math.max(40,10,50))
// console.log('Min: ',Math.min(40,10,50))

// console.log('Floor (окр.вниз 4.7): ',Math.floor(4.7))
// console.log('Ceil (окр.вверх 4,7): ',Math.ceil(4.7))
// console.log('Round (до ближайшего): ',Math.round(4.7))
// console.log('Trunc (достать целую часть): ',Math.trunc(4.7))

// console.log('Floor (окр.вниз -4.7): ',Math.floor(-4.7))
// console.log('Ceil (окр.вверх -4,7): ',Math.ceil(-4.7))
// console.log('Round (до ближайшего -4.7): ',Math.round(-4.7))
// console.log('Trunc (достать целую часть -4.7): ',Math.trunc(-4.7))

// console.log(Math.random())



// РАНДОМНОЕ ЧИСЛО МЕЖДУ
// function getRandom(min,max){
// return  Math.round(Math.random()*(max-min) + min)
// }
// console.log(getRandom(0,10))

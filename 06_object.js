const person ={
    name: 'Maxim',
    age: '23',
    isProgrammer: true,
    languages: ['ru','eng', 'de'],
    'complex key': 'Complex Value',
    ['key_' + (1+3)]: ' Computed Key ', //key_4
    greet: function(){},
    greet1() {
        console.log('greet from person')
    },
    info(){
        console.log(this)
        console.info('Информация про человека по имени: ', this.name)
    }
}


// РАБОТА С ПАРАМЕТРАМИ
// console.log(person.name)
// const ageKey = 'age'
// console.log(person[ageKey])
// console.log(person['age'])
// console.log(person['complex key'])
// person.greet1
// person.age++
// person.languages.push('by')
// console.log(person)
// person['key_4'] = undefined
// console.log(person['key_4'])
// delete person['key_4']
// console.log(person)



// ДЕСТРУКТУРИЗАЦИЯ
// const name = person.name
// const age = persom.age
// const languages = person.languages

// const {name, age: personAge = 10, languages} = person
// console.log(name,personAge, languages)


// console.log(person)

// for (let key in person) {
//     if (person.hasOwnProperty(key)){
//     console.log('key: ', key)
//     console.log ('Value: ', person[key])
// }}


// Object.keys(person).forEach((key) => {
//     console.log('key: ', key)
//     console.log ('Value: ', person[key])
// })
// console.log(keys)



// КОНТЕКСТ
// person.info()



const logger = {
    keys () {
        console.log('Object keys: ', Object.keys(this))
    },
    keysAndValues () {
        Object.keys(this).forEach(key => {
            console.log(`'${key}': ${this[key]}`)
        })
    },
    withParams(top = false,between = false,bottom = false){
        if(top) {
            console.log('------ START -----')
        }
        
        Object.keys(this).forEach((key,index,array) => {
            console.log(`'${key}': ${this[key]}`)
            if(between && index !== array.length-1) {
                console.log('-----------')
            }
        })
        if(bottom) {
            console.log('------ END -----')
        }
    }
}
// const bound = logger.keys.bind(person)
// bound()
logger.withParams.call(person, true, true,true)
logger.withParams.apply(person, [true, true,true])
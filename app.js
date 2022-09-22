console.log('for loop')
for (let i = 0; i < 10; i++) {
    if(i == 5){
        continue
    }
    console.log(i)
}

console.log('while')

let number1 = 0;
while (number1 < 10){
    console.log(number1)
    number1++
}

console.log('do-while')

let number2 = 0;
do{
    console.log(number2)
    number2++
} while(number2 < 10)

const cars = ['audi', 'tesla', 'bmw']
cars.forEach((car) => {
    console.log(cars)
})

const person = {
    firstname: 'ronald',
    lastname: 'andero',
    age: 18
}
for (const personKey in person) {
    console.log(person[personKey])
}


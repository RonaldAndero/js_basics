const numbers1 = [43, 3, 75, 7, 99]
const numbers2 = new Array(25, 5, 64, 77)

let val

val = numbers1.length
val = numbers2.length

val = numbers1[1]
val = numbers1.indexOf(7)

val = Array.isArray(numbers1)


numbers1.push(250)
numbers1.pop()
numbers1.unshift(120)
numbers1.shift()

val = numbers1.concat(numbers2)

const fruits = ["banana", "apple", "orange"]
val = fruits.sort()

val = numbers1.sort(function (x, y) {
    return y - x
})

console.log(val)
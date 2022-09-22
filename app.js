const today = new Date()

let val
val = today
val = today.getMonth()
val = today.getDay()
val = today.getFullYear()

val = new Date("09/22/2021")
val = new Date("September 23 2022")

val = new Date()
val.setDate(23)

console.log(val)
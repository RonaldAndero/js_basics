let val

// number -> String
val = String(555)
val = String(4+4)
val = String(5.8)

// boolean -> String
val = String(true)
val = String(false)

// object -> String
val = String(new Date())


console.log(val)

// null -> String
val = String(null)
console.log(val)

// array -> String
val = String([1, 2, 3, 4, 5])
console.log(val)

// undefined -> string
val = String(undefined)
console.log(val)

// toString()
val = (true).toString()
console.log(val)

// string -> number
val = Number("5")
console.log(val)

// boolean -> number
val = Number(true)

// null -> number
val = Number(null)
console.log(val)

// string -> number
val = Number("Test")
console.log(val)

// array -> number
val = Number([1, 2, 3])
console.log(val)

// string -> int
val = parseInt("100.3")
console.log(val)


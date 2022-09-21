const firstname = "ronald Andero"
const surname = "õisman"

let val = firstname + " " + surname

val = "ronald"
val += surname

val = firstname.toUpperCase()
val = surname.toLowerCase()

val = surname[0]
val = surname.indexOf("a")

val = surname.charAt(2)
val = surname.charAt(surname.length - 1)

val = surname.substring(0, 4)
val = surname.slice(0, 4)
val = surname.slice(-3)

const tags = "JS, HTML, CSS"
val = tags.split(",")



console.log(val[1].trim())
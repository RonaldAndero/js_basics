const person = {
    firstname: "Ronald",
    surname: "Andero",
    age: 18,
    mail: "ronald.andero@gmail.com",
    hobbies: ["tennis", "basketball"],
    address: {
        city: "Tartu",
        county: "Tartumaa"
    },
    getBirthyear: function(){
        return 2022 - this.age
    }
}

let val
val = person.address.city
val = person["surname"]
val = person['hobbies'][1]
val = person.address['city']
val = person.getBirthyear()
console.log(val)

for(let i = 0; i < person.hobbies.length; i++){
    console.log(person.hobbies[i])
}

/*person.hobbies.forEach(function (hobbie, index,hobbies){
    console.log(hobbie + " on element indeksiga " + index)
    console.log(hobbies)
})*/

person.hobbies.forEach((hobbie, index) => {
    console.log(hobbie + " on element indeksiga " + index)
})
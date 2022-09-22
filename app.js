/*
if(condition) {
    //if statements
} else {
    // else statements
}

 == equal -> ===
 != not equal -> !==
 */

let personID;

if(typeof personID === 'undefined'){
    console.log("id is not correct")
} else{
    console.log('id is ${personID}')
}

console.log(personID)


const color = 'green'
if(color === 'red'){
    console.log('Stop')
} else if(color === 'yellow'){
    console.log('Attension')
} else if(color === 'green') {
    console.log('Go')
} else {
    console.log('not allowed')
}

/*
condition1 && condition2 - and
condition1 // condition2 - or
 */

const name = 'kadi'
const age = 40

if(age > 0 && age <= 12){
    console.log('${name} on laps')
} else if(age > 12 && age < 18){
    console.log('${name} on nooruk')
} else {
    console.log('${name} on nooruk')
}

// ? - ternary
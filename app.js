const firstname = "Ronald Andero"
const surname = "Õisman"
const email = "ronald-andero.oisman@voco.ee"
const department = "IKT"

let result = "<ul>" +
    "<li>" + firstname + "</li>" +
    "<li>" + surname + "</li>" +
    "<li>" + email + "</li>" +
    "<li>" + department + "</li>" +
    "</ul>"

result = `
    <ul>
        <li>Name: ${firstname}</li>
        <li>Surname: ${surname}</li>
        <li>Email: ${email}</li>
        <li>Department: ${department}</li>
    </ul>
`



console.log(result)
document.body.innerHTML = result
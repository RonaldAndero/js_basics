let val;

const list = document.querySelector('ul')
const listItem = document.querySelector('li')

val = list
val = list.childNodes
val = list.childNodes[0].nodeName
val = list.childNodes[0].nodeType
val = list.childNodes[1].nodeType
val = list.childNodes[1].nodeName

val = list.children
val = list.children[1].children

val = list.firstChild
val = list.firstElementChild

val = list.lastChild
val = list.lastElementChild

val = list.childElementCount

val = listItem.parentNode
val = listItem.parentElement
val = listItem.parentElement.parentElement

val = listItem.nextSibling
val = listItem.nextElementSibling   
val = listItem.nextElementSibling.nextElementSibling   

console.log(val)

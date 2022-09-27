const li = document.createElement('li')
li.className = 'collection-item'
let text = document.createTextNode('Study element creation')
li.appendChild(text)

const link = document.createElement('a')
link.className = 'blue-text secondary-content'
text = document.createTextNode('X')
link.append(text)
link.setAttribute('href', '#')

li.appendChild(link)

const list = document.querySelector('ul')
list.appendChild(li)

console.log(li)

//function greeting(name){
    //console.log(`Hello, ${name}`)
//}

//let greet = greeting('ronald')
//console.log(greet)

//const square = function (number){
    //return number * number
//}

//let result = square(3)
//console.log(result)

(function (){
    console.log('running')
})();

(function (name){
    console.log(`hello, ${name}`)
})('ronald');


const todo = {
    add: function (){
        console.log('add todo...')
    },
    edit: function (){
        console.log('edit todo...')
    },
    delete: function (){
        console.log('delete...')
    }
}

todo.add()
todo.edit()
todo.delete()

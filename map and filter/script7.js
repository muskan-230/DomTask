const numbers = [1, 2, 3, 4, 5];

let newarray = numbers.map(function(elem){
    return elem%2 === 0
})

console.log(newarray)
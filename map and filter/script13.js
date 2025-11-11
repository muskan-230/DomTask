const numbers = [1, 2, 3, 4, 5, 6];

let newArray = numbers.filter(function(elem){
    return elem % 2 === 0 
})
console.log(newArray)
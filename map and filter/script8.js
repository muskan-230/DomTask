const words = ["apple", "banana", "cherry"];

let newarray = words.map(function(elem){
    return elem.charAt(0).toUpperCase() + elem.slice(1)
})
console.log(newarray)
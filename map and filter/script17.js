const mixedArray = [1, "hello", true, "world", 42, "JavaScript"];

let newArray = mixedArray.filter(function(elem){
    return typeof elem === "string"
})

console.log(newArray)
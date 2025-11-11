const celsiusTemps = [0, 20, 30, 40];

const newArray = celsiusTemps.map(function(elem){
    return (elem*9/5) + 32;
})

console.log(newArray)


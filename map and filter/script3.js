const names = ["John", "Mike", "Sam"];

var prefix = "Mr."

let newprefix = names.map(function(elem){
    return prefix + elem;
})

console.log(newprefix)
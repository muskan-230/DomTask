const people = [
  { name: "Alice", age: 17 },
  { name: "Bob", age: 20 },
  { name: "Charlie", age: 15 },
];

let newArray = people.filter(function(elem){
    return  elem.age >= 18
})

console.log(newArray)
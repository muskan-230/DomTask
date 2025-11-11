
const students = [
  { name: "Alice", marks: 80 },
  { name: "Bob", marks: 70 },
  { name: "Charlie", marks: 90 }
];

let newArray = students.filter(function(elem){
    return elem.marks > 75
})

console.log(newArray)
const students = [
  { name: "Alice", marks: 80 },
  { name: "Bob", marks: 75 },
];

let updatemarks = students.map(function(elem){
    return {
        name : elem.name,
        marks : elem.marks+5,

    }
})

console.log(updatemarks);
const tasks = [
  { title: "Learn JavaScript", completed: true },
  { title: "Learn Python", completed: false },
  { title: "Learn React", completed: true },
];

let newArray = tasks.filter(function(elem){
    return elem.completed === true
})

console.log(newArray)
const products = [
  { name: "Notebook", price: 30 },
  { name: "Bag", price: 100 },
  { name: "Pen", price: 10 }
];

let newArray = products.filter(function(elem){
    return elem.price < 50
})

console.log(newArray)
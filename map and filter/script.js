const products = [
    { name: "Laptop", price: 1000 },
    { name: "Phone", price: 500 }
  ];

let a = products.map(function(elem){
  return {
     name : elem.name,
     price : elem.price*1.1,

  } 
})

console.log(a);



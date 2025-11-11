const emails = ["john.doe@gmail.com", "invalid.email.com", "hello@world.com"];

let newArray = emails.filter(function(elem){
    return elem.includes("@") && elem.includes(".")
})

console.log(newArray)
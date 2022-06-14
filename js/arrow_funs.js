// Arrow functions demo 

let names = ["JavaScript", "Java", "Python", "C#"]
  
// Arrow function 
var pname = names.find( name => name.startsWith('P') )  
console.log(pname)

// forEach() 
names.forEach( (name, idx) => console.log(name + " at "  + idx))

// filter()
var selnames = names.filter(name => name.length > 5);
console.log(selnames)

// map()
var upperNames = names.map(name => name.toUpperCase());
console.log(upperNames)
 

 
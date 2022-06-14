
let names = ["JavaScript", "Java", "Python", "C#"]

function is_small_name(name) {
    return name.length < 5
}

// find() 
var smallName = names.find(is_small_name)
console.log(smallName)

// Anonymous function 
var pname = names.find(
    function (name) {
        return name.startsWith("P")
    }
)
console.log(pname)

// forEach() 
names.forEach(
    function (name, idx) {
        console.log(name + " at "  + idx)
    }
)

// filter()
var selnames = names.filter(
    function (name) {
        return name.length > 5
    }
)

console.log(selnames)

// map()

var upperNames = names.map(
    function (name) {
        return name.toUpperCase()
    }
);

console.log(upperNames)
 

 
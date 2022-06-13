
let names = ["JavaScript", "Java", "Python", "C#"]

function is_small_name(name) {
    return name.length < 5
}

var smallName = names.find(is_small_name)
console.log(smallName)


var pname = names.find(
    function (name) {
        return name.startsWith("P")
    }
)
console.log(pname)

names.forEach(
    function (name, idx) {
        console.log(name + " at "  + idx)
    }
)

var upperNames = names.map(
    function (name) {
        return name.toUpperCase()
    }
);

console.log(upperNames)

console.log(names.includes("C#"))
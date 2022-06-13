
let names = ["JavaScript", "Java", "Python"]

for (let idx in names)
{
    console.log(`Value at ${idx} is ${names[idx]}`)
}

for (let name of names) {
    console.log(name)
}

let numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]

// Anonymous function
var even_numbers_anonymous = numbers.filter(
    function (number) {
        return number % 2 == 0
    }
)

console.log("Anonymous Function : ")
console.log(even_numbers_anonymous)

// Arrow function
let even_numbers_arrow = numbers.filter(number => number % 2 == 0)
console.log("Arrow Function : ")
console.log(even_numbers_arrow)

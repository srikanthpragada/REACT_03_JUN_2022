var students = new Map([[1, "Robert"], [2, "Mark"], [3, "Jason"]]);
students.set(5, "Jack")

// Display all entries
for (var v of students.entries())
    console.log(v)
    
// Get single entry
s = students.get(1)
console.log(s)
book = {title: "The Outliers", price: 550 }   // JavaScript object 

book_json = JSON.stringify(book)  // Convert JS to JSON
console.log(book_json)

books = [{ title: "The Outliers", price: 550 }, { title: "World is flat", price: 650 }]
console.log(JSON.stringify(books))

book_obj = JSON.parse(book_json) // Convert JSON to JS
console.log(book_obj)


class Product {
    constructor(name, p) {
        this.name = name;
        this.price = p;
    }
    sellingPrice() {
        return this.price * 1.08; // 8% tax 
    }
}

p = new Product("Dell XPS 9500", 2000000);
console.log(JSON.stringify(p))  // Product object to JSON


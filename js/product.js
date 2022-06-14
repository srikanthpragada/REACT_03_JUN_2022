class Product {
    constructor(name, price) {
        this.name = name
        this.price = price
    }
    print() {
        console.log(this.name)
        console.log(this.price)
    }
    sellingPrice() {
        return this.price * 1.08 // 8% tax
    }
}
p = new Product("Dell XPS 9500", 2000000); // calls constructor
p.print()
console.log(p.sellingPrice())

function print(product) {
    console.log(product.name)
    console.log(product.price)
}

print(p)
print({ name: 'New Product', price: 10000 })
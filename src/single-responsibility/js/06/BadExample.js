class Product {
  constructor(name, price) {
    this.name = name;
    this.price = price;
  }

  applyDiscount(discount) {
    this.price -= discount;
  }

  logProductDetails() {
    console.log(`Product: ${this.name}, Price: ${this.price}`);
  }
}

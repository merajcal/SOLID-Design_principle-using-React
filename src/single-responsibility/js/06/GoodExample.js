class Product {
  constructor(name, price) {
    this.name = name;
    this.price = price;
  }
}

class DiscountService {
  apply(product, discount) {
    product.price -= discount;
  }
}

class ProductLogger {
  log(product) {
    console.log(`Product: ${product.name}, Price: ${product.price}`);
  }
}

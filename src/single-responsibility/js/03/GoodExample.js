class Order {
  constructor(items) {
    this.items = items;
  }

  calculateTotal() {
    return this.items.reduce((sum, item) => sum + item.price, 0);
  }
}

class EmailService {
  sendReceipt(order) {
    console.log("Sending email receipt...");
  }
}

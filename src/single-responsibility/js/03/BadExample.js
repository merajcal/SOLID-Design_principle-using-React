class Order {
  constructor(items) {
    this.items = items;
  }

  calculateTotal() {
    return this.items.reduce((sum, item) => sum + item.price, 0);
  }

  sendEmailReceipt() {
    console.log("Sending email receipt...");
  }
}

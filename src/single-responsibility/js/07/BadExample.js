class Customer {
  constructor(name) {
    this.name = name;
  }

  placeOrder(order) {
    console.log(`Order placed: ${order}`);
  }

  sendPromotionalEmail() {
    console.log("Sending promotional email...");
  }
}

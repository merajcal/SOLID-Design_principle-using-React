class Customer {
  constructor(name) {
    this.name = name;
  }
}

class OrderService {
  placeOrder(order) {
    console.log(`Order placed: ${order}`);
  }
}

class EmailMarketingService {
  sendPromotionalEmail(customer) {
    console.log("Sending promotional email...");
  }
}

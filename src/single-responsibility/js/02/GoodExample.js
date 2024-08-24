class Invoice {
  constructor(amount) {
    this.amount = amount;
  }
}

class TaxCalculator {
  calculate(amount) {
    return amount * 0.2;
  }
}

class InvoicePrinter {
  print(invoice) {
    console.log(`Invoice Amount: $${invoice.amount}`);
  }
}

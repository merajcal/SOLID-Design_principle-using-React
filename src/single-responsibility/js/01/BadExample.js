class User {
  constructor(name, email) {
    this.name = name;
    this.email = email;
  }

  validateEmail() {
    // Email validation logic
    return /\S+@\S+\.\S+/.test(this.email);
  }

  save() {
    // Save the user to the database
    console.log(`Saving user ${this.name} to the database.`);
  }
}

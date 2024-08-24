class User {
  constructor(name, email) {
    this.name = name;
    this.email = email;
  }
}

class UserValidator {
  static validateEmail(email) {
    return /\S+@\S+\.\S+/.test(email);
  }
}

class UserRepository {
  save(user) {
    console.log(`Saving user ${user.name} to the database.`);
  }
}

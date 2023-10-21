/* THEME: OBJECTS */

/* LEVEL 3 */

/* ================= Task 1 ================= */
const personAccount = {
  firstName: "Aziz",
  lastName: "Muradov",
  incomes: [],
  expenses: [],

  totalIncome: function () {
    let total = 0;
    for (const income of this.incomes) {
      total += income.amount;
    }
    return total;
  },
  totalExpense: function () {
    let total = 0;
    for (const expense of this.expenses) {
      total += expense.amount;
    }
    return total;
  },

  addIncome: function (description, amount) {
    this.incomes.push({ description, amount });
  },
  addExpense: function (description, amount) {
    this.expenses.push({ description, amount });
  },

  accountInfo: function () {
    const income = this.totalIncome();
    const expense = this.totalExpense();
    const balance = income - expense;

    return `Name: ${this.firstName} ${this.lastName}, Income: ${income}, Expense: ${expense}, Balance: ${balance}`;
  },

  accountBalance: function () {
    const income = this.totalIncome();
    const expense = this.totalExpense();
    return income - expense;
  },
};

personAccount.addIncome("Salary", 3000);
personAccount.addExpense("Rent", 1000);
personAccount.addExpense("Utilities", 200);

// console.log(personAccount.accountInfo());

// console.log("Account Balance:", personAccount.accountBalance());

/* ================= Task 2 ================= */
// Chapter "a"
function signUp(newUser) {
  for (const user of users) {
    if (user.email === newUser.email) {
      return "User already has an account.";
    }
  }
  users.push(newUser);
  return "User added successfully.";
}

const newUser = {
  _id: "am22a03",
  username: "oxygen",
  email: "oxygen@gmail.com",
  password: "oxygen123",
  createdAt: new Date().toLocaleString(),
  isLoggedIn: false,
};

const result = signUp(newUser);
// console.log(result);
// console.log(users);

// Chapter "b"
function signIn(email, password) {
  let foundUser = null;
  for (const user of users) {
    if (user.email === email) {
      foundUser = user;
      break; // Stop searching once the user is found
    }
  }

  if (foundUser) {
    if (foundUser.password === password) {
      // Successful sign-in
      return "Sign-in successful";
    } else {
      // Password does not match
      return "Incorrect password";
    }
  } else {
    // User not found
    return "User not found";
  }
}

const resultSignIn = signIn("oxygen@gmail.com", "oxygen123");
// console.log(resultSignIn);

/* ================= Task 3 ================= */
// Chapter "a"
function rateProduct(productId, userId, rating) {
  const product = products.find((p) => p._id === productId);
  if (!product) {
    return "Product not found";
  }

  product.ratings.push({ userId, rate: rating });
  return "Rating added successfully";
}

// const productId = "eedfcf";
// const userId = "user123";
// const rating = 4.0;

// const resultProduct = rateProduct(productId, userId, rating);
// console.log(resultProduct);
// console.log(products);

function averageRating(productId) {
  const product = products.find((p) => p._id === productId);
  if (!product) return "Product not found.";

  if (product.rating === 0) return "No ratings available.";

  let totalRating = 0;
  for (const rating of product.ratings) {
    totalRating += rating.rate;
  }

  const average = totalRating / product.ratings.length;
  return average;
}

// const productId = "eedfcf"; // Provide the product ID

// const resultRating = averageRating(productId);
// console.log(resultRating);

function likeProduct(productId, userId) {
  const product = products.find((p) => p._id === productId);
  if (!product) return "Product not found.";

  const userIndex = product.likes.indexOf(userId);

  if (userIndex === -1) {
    product.likes.push(userId);
    return "Product liked";
  } else {
    product.likes.splice(userIndex, 1);
    return "Product unliked";
  }
}

const productId = "eedfcf";
const userId = "user123";

const resultLike = likeProduct(productId, userId);
console.log(resultLike);

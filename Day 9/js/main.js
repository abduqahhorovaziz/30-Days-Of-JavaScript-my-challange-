/* THEME: Higher Order Functions */

/* LEVEL 1 */

/* ================= Task 1 ================= */

/* ================= Task 2 ================= */

/* ================= Task 3 ================= */
const countries = [
  "Estonia",
  "Finland",
  "Sweden",
  "Denmark",
  "Norway",
  "IceLand",
];
countries.forEach((country) => {
  console.log(country);
});

/* ================= Task 4 ================= */
const names = ["Asabeneh", "Mathias", "Elias", "Brook"];
names.forEach((name) => {
  console.log(name);
});

/* ================= Task 5 ================= */
const numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
numbers.forEach((number) => {
  console.log(number);
});

/* ================= Task 6 ================= */
const newCountries = countries.map((country) => country);
console.log(newCountries);

/* ================= Task 7 ================= */
const countriesLength = countries.map((country) => country.length);
console.log(countriesLength);

/* ================= Task 8 ================= */
const squaredNumber = numbers.map((number) => number ** 2);
console.log(squaredNumber);

/* ================= Task 9 ================= */
const namesUpper = names.map((name) => name.toUpperCase());
console.log(namesUpper);

/* ================= Task 10 ================= */
const products = [
  { product: "banana", price: 3 },
  { product: "mango", price: 6 },
  { product: "potato", price: " " },
  { product: "avocado", price: 8 },
  { product: "coffee", price: 10 },
  { product: "tea", price: "" },
];

const prices = products.map((item) => {
  const price = parseInt(item.price);

  if (!isNaN(price)) {
    return price;
  } else {
    return 0;
  }
});

console.log(prices);

/* ================= Task 11 ================= */
const countriesContainingLand = countries.filter((country) =>
  country.toLowerCase().includes("land")
);
console.log(countriesContainingLand);

/* ================= Task 12 ================= */
const countriesSixCharacter = countries.filter((country) => {
  if (country.length == 6) {
    return country;
  }
});
console.log(countriesSixCharacter);

/* ================= Task 13 ================= */
const countriesMoreCharacter = countries.filter((country) => {
  if (country.length >= 6) {
    return country;
  }
});
console.log(countriesMoreCharacter);

/* ================= Task 14 ================= */
const countriesStartWithE = countries.filter((country) => {
  if (country.startsWith("E")) {
    return country;
  }
});
console.log(countriesStartWithE);

/* ================= Task 15 ================= */
const pricesArr = products.filter((product) => {
  const price = parseInt(product.price);

  if (!isNaN(price)) {
    return price;
  }
});
console.log(pricesArr);

/* ================= Task 16 ================= */
const gamerInfo = ["Alex", "a1ex", 2001, true];

function getStringsLists(arr) {
  const onlyString = arr.filter((item) => typeof item === "string");
  return onlyString;
}

const stringArr = getStringsLists(gamerInfo);
console.log(stringArr);

/* ================= Task 17 ================= */
const sum = numbers.reduce((sum, item) => sum + item);
console.log(sum);

/* ================= Task 18 ================= */
const sentence = countries.reduce((accumulator, country, index) => {
  if (index === countries.length - 1) {
    return `${accumulator} and ${country} are north European countries`;
  } else if (index === 0) {
    return `${country}`;
  } else {
    return `${accumulator}, ${country}`;
  }
}, "");
console.log(sentence);

/* ================= Task 19 ================= */
/*
1. `some()` Method:
 - The `some()` method checks if at least one element in an array satisfies a given condition (evaluates to `true`).
 - It returns `true` if at least one element meets the condition; otherwise, it returns `false`.
 - The iteration stops as soon as a true condition is found. It does not necessarily check every element in the array.

2. `every()` Method:
 - The `every()` method checks if all elements in an array satisfy a given condition (evaluates to `true` for every element).
 - It returns `true` if all elements meet the condition; otherwise, it returns `false`.
 - The iteration continues until all elements have been checked or until the first element that doesn't meet the condition is found. If an element fails the condition, the iteration stops, and `false` is returned.

In summary, the key difference between some() and every() is in the logic they use to evaluate elements in an array:
 - `some()` returns `true` if at least one element passes the condition.
 - `every()` returns `true` if all elements pass the condition.

It's important to choose the method that suits your specific use case. Use `some()` when you want to know if there's at least one element meeting a condition, and use `every()` when you need to ensure that all elements meet a certain condition.
*/

/* ================= Task 20 ================= */
const hasLongNames = names.some((name) => name.length > 7);

if (hasLongNames) {
  console.log("At least one name has a length greater than seven.");
} else {
  console.log("No names have a length greater than seven.");
}

/* ================= Task 21 ================= */
const hasLandNames = names.every((name) => name.includes("land"));

if (hasLandNames) {
  console.log("All countries contain the word 'land'.");
} else {
  console.log("Not all countries contain the word 'land'.");
}

/* ================= Task 22 ================= */
/*
1. `find()` Method:
 - The `find()` method is used to locate and return the first element in an array that satisfies a given condition.
 - It returns the actual element that meets the condition (if found) or `undefined` if no element in the array satisfies the condition.
 - The `find()` method stops searching as soon as the first matching element is encountered.

 2. `findIndex()` Method:
  - The `findIndex()` method is used to locate and return the index of the first element in an array that satisfies a given condition.
  - It returns the index of the first element that meets the condition or -1 if no element satisfies the condition.
  - Like `find()`, the `findIndex()` method stops searching as soon as the first matching element is encountered.

In summary, the key difference between `find()` and `findIndex()` is in what they return:
 - `find()` returns the first element that meets the condition.
 - `findIndex()` returns the index of the first element that meets the condition.
*/

/* ================= Task 23 ================= */
const hasSixLength = countries.find((country) => country.length > 6);
console.log(hasSixLength);

/* ================= Task 24 ================= */
const hasSixLengthIndex = countries.findIndex((country) => country.length > 6);
console.log(hasSixLengthIndex);

/* ================= Task 25 ================= */
const norwayIndex = countries.findIndex((country) => country === "Norway");
console.log(norwayIndex);

/* ================= Task 26 ================= */
const russiaIndex = countries.findIndex((country) => country === "Russia");
console.log(russiaIndex);

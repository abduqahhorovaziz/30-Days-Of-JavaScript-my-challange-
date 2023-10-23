/* THEME: Higher Order Functions */

/* LEVEL 2 */

/* ================= Task 1 ================= */
const products = [
  { product: "banana", price: 3 },
  { product: "mango", price: 6 },
  { product: "potato", price: "" },
  { product: "avocado", price: 8 },
  { product: "coffee", price: 10 },
  { product: "tea", price: "" },
];

const prices = products.map((product) => {
  if (product.price === "") {
    return 0;
  } else {
    return parseInt(product.price);
  }
});

console.log(prices);

const filteredPrices = prices.filter((price) => price !== 0);

console.log(filteredPrices);

const totalPrice = filteredPrices.reduce(
  (totalPrice, price) => totalPrice + price,
  0
);
console.log(totalPrice);

/* ================= Task 2 ================= */
const totalPriceOnlyReduce = products.reduce((acc, product) => {
  const price = product.price === "" ? 0 : parseInt(product.price);

  return acc + price;
}, 0);
console.log(totalPriceOnlyReduce);

/* ================= Task 3 ================= */
const withLand = countries.filter((country) => country.name.includes("land"));

console.log(withLand);

function categorizeCountries(pattern) {
  return countries.filter((country) =>
    country.name.toLowerCase().includes(pattern)
  );
}

console.log(categorizeCountries("land"));
console.log(categorizeCountries("ia"));
console.log(categorizeCountries("island"));
console.log(categorizeCountries("stan"));

/* ================= Task 4 ================= */
function countStartingLetters(countries) {
  const letterCounts = {};

  for (const country of countries) {
    const firstLetter = country.name[0].toUpperCase();

    if (letterCounts[firstLetter]) {
      letterCounts[firstLetter]++;
    } else {
      letterCounts[firstLetter] = 1;
    }
  }

  const result = Object.keys(letterCounts).map((letter) => ({
    letter,
    count: letterCounts[letter],
  }));

  return result;
}

const startingLetterCounts = countStartingLetters(countries);
console.log(startingLetterCounts);

/* ================= Task 5 ================= */
function getFirstTenCountries(countriesArr) {
  const firstTenCountries = countriesArr.slice(0, 10);
  return firstTenCountries;
}
const firstTenCountries = getFirstTenCountries(countries);
console.log(firstTenCountries);

/* ================= Task 6 ================= */
function getLastTenCountries(countriesArr) {
  const lastTenCountries = countriesArr.slice(-10);
  return lastTenCountries;
}
const lastTenCountries = getLastTenCountries(countries);
console.log(lastTenCountries);

/* ================= Task 7 ================= */


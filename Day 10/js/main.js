/* THEME: Sets and Maps */

/* LEVEL 1 */

/* ================= Task 1 ================= */

const countries = ["Finland", "Sweden", "Norway"];

const emptySet = new Set();
// console.log(emptySet);

/* ================= Task 2 ================= */
const numbers = new Set();
for (let i = 0; i <= 10; i++) {
  numbers.add(i);
}
// console.log(numbers);

/* ================= Task 3 ================= */
const setCountries = new Set(countries);
// console.log(setCountries);
setCountries.delete("Sweden");
// console.log(setCountries);

/* ================= Task 4 ================= */
setCountries.clear();
// console.log(setCountries);

/* ================= Task 5 ================= */
const stringSet = new Set([
  "string 1",
  "string 2",
  "string 3",
  "string 4",
  "string 5",
]);

// console.log(stringSet);

/* ================= Task 6 ================= */
const countriesMap = new Map();
countriesMap.set("Sweden", "Sweden".length);
countriesMap.set("Finland", "Finland".length);
countriesMap.set("Tashkent", "Tashkent".length);
// console.log(countriesMap);

/* LEVEL 1 IS COMPLETED */

/* LEVEL 2 */

/* ================= Task 1 ================= */
const a = [4, 5, 8, 9];
const b = [3, 4, 5, 7];
// const c = [...a, ...b];

// const A = new Set(a);
// const B = new Set(b);
// const C = new Set(c);

// console.log(C);

/* ================= Task 2 ================= */
// const A = new Set(a);
// const B = new Set(b);

// const c = a.filter((num) => B.has(num));
// const C = new Set(c);
// console.log(C);

/* ================= Task 3 ================= */
// const A = new Set(a);
// const B = new Set(b);

// const c = a.filter((num) => !B.has(num));
// const C = new Set(c);
// console.log(C);

/* LEVEL 2 IS COMPLETED */

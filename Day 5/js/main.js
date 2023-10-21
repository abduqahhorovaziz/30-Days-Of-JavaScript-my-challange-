/* LEVEL 1 */

/* ================= Task 1 ================= */
const empty = [];

/* ================= Task 2 ================= */
const arr1 = Array(6).fill("X");

/* ================= Task 3 ================= */
console.log(arr1.length);

/* ================= Task 4 ================= */
console.log(arr1[0], arr1[Math.floor(arr1.length / 2)], arr1[arr1.length - 1]);

/* ================= Task 5 ================= */
const mixedDataType = ["string", 23, true, undefined, null, ""];
console.log(mixedDataType.length);

/* ================= Task 6 ================= */
const itCompanies = [
  "Facebook",
  "Google",
  "Microsoft",
  "Apple",
  "IBM",
  "Oracle",
  "Amazon",
];

/* ================= Task 7 ================= */
console.log(itCompanies);

/* ================= Task 8 ================= */
console.log(itCompanies.length);

/* ================= Task 9 ================= */
console.log(
  itCompanies[0],
  itCompanies[Math.floor(itCompanies.length / 2)],
  itCompanies[itCompanies.length - 1]
);

/* ================= Task 10 ================= */
console.log(itCompanies[0]);
console.log(itCompanies[1]);
console.log(itCompanies[2]);
console.log(itCompanies[3]);
console.log(itCompanies[4]);
console.log(itCompanies[5]);
console.log(itCompanies[6]);

/* ================= Task 11 ================= */
console.log(itCompanies[0].toUpperCase());
console.log(itCompanies[1].toUpperCase());
console.log(itCompanies[2].toUpperCase());
console.log(itCompanies[3].toUpperCase());
console.log(itCompanies[4].toUpperCase());
console.log(itCompanies[5].toUpperCase());
console.log(itCompanies[6].toUpperCase());

/* ================= Task 12 ================= */
// const lastCompany = itCompanies.pop();
// console.log(
//   `${itCompanies.join(", ")} и ${lastCompany} являются крупными ИТ-компаниями.`
// );

/* ================= Task 13 ================= */
itCompanies.includes("Apple")
  ? console.log("Apple")
  : console.log("Company not found in this array");

/* ================= Task 14 ================= */
for (let i = 0; i < itCompanies.length; i++) {
  if (itCompanies[i].search("o") > 1) {
    console.log(itCompanies[i]);
  }
}

/* ================= Task 15 ================= */
console.log(itCompanies.sort());

/* ================= Task 16 ================= */
console.log(itCompanies.reverse());

/* ================= Task 17 ================= */
// console.log(itCompanies.splice(0, 3));

/* ================= Task 18 ================= */
const len = itCompanies.length;
// console.log(itCompanies.splice(len - 3, len));

/* ================= Task 19 ================= */
const midd = Math.floor(itCompanies.length / 2);
// console.log(itCompanies.splice(midd, 1));

/* ================= Task 20 ================= */
// console.log(itCompanies.shift());
// console.log(itCompanies);

/* ================= Task 21 ================= */
// console.log(itCompanies.splice(midd - 1, 2))

/* ================= Task 22 ================= */
console.log(itCompanies.pop());
console.log(itCompanies);

/* ================= Task 23 ================= */
console.log(itCompanies.splice(0));
console.log(itCompanies);

/* LEVEL 1 completed */

/* LEVEL 2 */

/* ================= Task 2 ================= */
let text =
  "I love teaching and empowering people. I teach HTML, CSS, JS, React, Python.";
const textArr = text.split(" ");
console.log(textArr);
console.log(textArr.length);

/* ================= Task 3 ================= */
const shoppingCart = ["Milk", "Coffee", "Tea", "Honey"];
shoppingCart.includes("Meat")
  ? console.log("An element already exists in this array")
  : shoppingCart.unshift("Meat");
console.log(shoppingCart);

shoppingCart.includes("sugar")
  ? console.log("An element already exists in this array")
  : shoppingCart.push("sugar");
console.log(shoppingCart);

const honeyIndex = shoppingCart.indexOf("Honey");
honeyIndex != -1
  ? shoppingCart.splice(honeyIndex, 1)
  : console.log("No such item exists");
console.log(shoppingCart);

const teaIndex = shoppingCart.indexOf("Tea");
shoppingCart[teaIndex] = "Green Tea";
console.log(shoppingCart);

/* ================= Task 4 ================= */
countries.includes("Ethiopia")
  ? console.log("Ethiopia")
  : countries.push("Ethiopia");
console.log(countries);

/* ================= Task 5 ================= */
webTechs.includes("Sass")
  ? console.log("Sass - это препроцесс CSS")
  : webTechs.push("Sass");

console.log(webTechs);

/* ================= Task 6 ================= */
const frontEnd = ["HTML", "CSS", "JS", "React", "Redux"];
const backEnd = ["Node", "Express", "MongoDB"];

const fullStack = frontEnd.concat(backEnd);
console.log(fullStack);

/* LEVEL 2 completed */

/* LEVEL 3 */

/* ================= Task 1 ================= */
const ages = [19, 22, 19, 24, 20, 25, 26, 24, 25, 24];
// 1
ages.sort();
console.log(ages);
const minAge = Math.min(...ages);
const maxAge = Math.max(...ages);
console.log(minAge, maxAge);

// 2
const lenAges = ages.length;
const medianAge = Math.floor(ages[lenAges / 2 - 1] + ages[lenAges / 2]) / 2;
console.log(medianAge);

// 3
const averageAge =
  (ages[0] +
    ages[1] +
    ages[2] +
    ages[3] +
    ages[4] +
    ages[5] +
    ages[6] +
    ages[7] +
    ages[8] +
    ages[9]) /
  lenAges;
console.log(averageAge);

// 4
console.log(maxAge - minAge);

// 5
console.log(Math.abs(minAge - averageAge));
console.log(Math.abs(maxAge - averageAge));

// 5 a
const firstTenCountries = countries.slice(0, 10);
console.log(firstTenCountries);

/* ================= Task 2 ================= */
if (countries.length % 2 === 0) {
  const firstMid = countries.length / 2 - 1;
  const secondMid = countries.length / 2;
  console.log(countries[firstMid] + " " + countries[secondMid]);
} else {
  console.log(countries[Math.floor(countries.length / 2)]);
}

/* ================= Task 3 ================= */
if (countries.length % 2 === 0) {
  const halfLength = countries.length / 2;
  const firstHalf = countries.splice(0, halfLength);
  const secondHalf = countries;

  console.log("Первая половина стран:", firstHalf);
  console.log("Вторая половина стран:", secondHalf);
} else {
  const halfLength = Math.floor(countries.length / 2);
  const firstHalf = countries.splice(0, halfLength + 1);
  const secondHalf = countries;

  console.log("Первая половина стран:", firstHalf);
  console.log("Вторая половина стран:", secondHalf);
}

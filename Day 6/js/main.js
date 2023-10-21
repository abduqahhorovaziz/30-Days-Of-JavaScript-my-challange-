/* THEME: LOOPS */

/* LEVEL 1 */

/* ================= Task 1 ================= */
// for (let i = 0; i <= 10; i++) {
//   console.log(i);
// }

// let i = 0;
// while (i <= 10) {
//   console.log(i);
//   i++;
// }

// let i = 0;
// do {
//   console.log(i);
//   i++;
// } while (i <= 10);

/* ================= Task 2 ================= */
// for (let i = 10; i >= 0; i--) {
//   console.log(i);
// }

// let i = 10;
// while (i => 0) {
//   console.log(i);
//   i--;
// }

/* ================= Task 3 ================= */

/* ================= Task 4 ================= */
let str = "";
for (let i = 0; i < 7; i++) {
  str += "#";
  console.log(str);
}

/* ================= Task 5 ================= */
for (let i = 0; i <= 10; i++) {
  console.log(`${i} x ${i} = ${i * i}`);
}

/* ================= Task 6 ================= */
console.log("i\ti^2\ti^3");
for (let i = 0; i <= 10; i++) {
  console.log(`${i}\t${i ** 2}\t${i ** 3}`);
}

/* ================= Task 7 ================= */
for (let i = 0; i <= 100; i++) {
  if (i % 2 === 0) {
    console.log(i);
  }
}

/* ================= Task 8 ================= */
for (let i = 0; i <= 100; i++) {
  if (i % 2 !== 0) {
    console.log(i);
  }
}

/* ================= Task 9 ================= */
console.log("PRIME NUMBERS");
for (let i = 2; i <= 100; i++) {
  let isPrime = true;

  for (let j = 2; j < i; j++) {
    if (i % j === 0) {
      isPrime = false;
      break;
    }
  }

  if (isPrime) {
    console.log(i);
  }
}

/* ================= Task 10 ================= */
console.log("The sum of all numbers from 0 to 100");
let sum = 0;
for (let i = 0; i <= 100; i++) {
  sum = sum + i;
}
console.log("The sum of all numbers from 0 to 100 is", sum);

/* ================= Task 11 ================= */
// console.log("The sum of all numbers from 0 to 100");
// let sumEven = 0;
// let sumOdd = 0;
// for (let i = 0; i <= 100; i++) {
//   if (i % 2 === 0) {
//     sumEven += i;
//   } else {
//     sumOdd += i;
//   }
// }
// console.log(
//   `The sum of all evens from 0 to 100 is ${sumEven}. And the sum of all odds from 0 to 100 is ${sumOdd}.`
// );

/* ================= Task 12 ================= */
// let sumEven = 0;
// let sumOdd = 0;

// for (let i = 0; i <= 100; i++) {
//   if (i % 2 === 0) {
//     sumEven += i;
//   } else {
//     sumOdd += i;
//   }
// }
// const sumArr = [sumEven, sumOdd];

// console.log(sumArr);

/* ================= Task 13 ================= */
// const randomArr = [];
// for (let i = 0; i <= 5; i++) {
//   let randomNum = Math.floor(Math.random() * 10);
//   randomArr.push(randomNum);
// }
// console.log(randomArr.join(''));

/* ================= Task 14 ================= */
// const randomArr = [];
// for (let i = 0; i < 6; i++) {
//   let randomNum = Math.floor(Math.random() * 10);
//   if (!randomArr.includes(randomNum)) {
//     randomArr.push(randomNum);
//   }
// }
// console.log(randomArr.join(""));

/* ================= Task 15 ================= */
// let randomID = "";
// const characters = "abcdefghijklmnopqrstuvwxyz0123456789";
// for (let i = 0; i < 6; i++) {
//   let randomIndex = Math.floor(Math.random() * characters.length);
//   randomID += characters.charAt(randomIndex);
// }

// console.log(randomID);

/* LEVEL 1 COMPLETED */

/* LEVEL 2 */

/* ================= Task 1 ================= */
// const generateRandomSymbol = function (length) {
//   let randomID = "";
//   const characters =
//     "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789";
//   for (let i = 0; i < length; i++) {
//     let randomIndex = Math.floor(Math.random() * characters.length);
//     randomID += characters.charAt(randomIndex);
//   }

//   return randomID;
// };

// let randomID = generateRandomSymbol(6);
// console.log(randomID);

/* ================= Task 2 ================= */
let randomHex = "";
const charactersHex = "0123456789abcdef";
for (let i = 0; i < 6; i++) {
  let randomIndex = Math.floor(Math.random() * charactersHex.length);
  randomHex += charactersHex.charAt(randomIndex);
}
console.log("#" + randomHex);

/* ================= Task 3 ================= */
let randomRGB = [];
for (let i = 0; i < 3; i++) {
  let randomIndex = Math.floor(Math.random() * 255);

  randomRGB.push(randomIndex);

  console.log(randomIndex);
}
console.log(`rgb(${randomRGB.join(", ")})`);

const countries = [
  "Albania",
  "Bolivia",
  "Canada",
  "Denmark",
  "Ethiopia",
  "Finland",
  "Germany",
  "Hungary",
  "Ireland",
  "Japan",
  "Kenya",
];

/* ================= Task 4 ================= */
const newCountries = [];
for (let i = 0; i < countries.length; i++) {
  newCountries.push(countries[i].toUpperCase());
}
console.log(newCountries);

/* ================= Task 5 ================= */
const lengthCountries = [];
for (let i = 0; i < countries.length; i++) {
  lengthCountries.push(countries[i].length);
}
console.log(lengthCountries);

/* ================= Task 6 ================= */
const countryDetails = [];
for (let i = 0; i < countries.length; i++) {
  const countrSingle = [];
  let countryFirstThreeLetter = countries[i]
    .split("")
    .slice(0, 3)
    .join("")
    .toUpperCase();
  countrSingle.push(countries[i], countryFirstThreeLetter, countries[i].length);
  countryDetails.push(countrSingle);
}

console.log(countryDetails);

/* ================= Task 7 ================= */
const countriesWithLand = [];
for (let i = 0; i < countries.length; i++) {
  if (countries[i].includes("land")) {
    countriesWithLand.push(countries[i]);
  }
}
console.log(countriesWithLand);

/* ================= Task 8 ================= */
const countriesWithIa = [];
for (let i = 0; i < countries.length; i++) {
  if (countries[i].includes("ia")) {
    countriesWithIa.push(countries[i]);
  }
}
console.log(countriesWithIa);

/* ================= Task 9 ================= */
// let countryMaxLength = countries[0].length || null;
// const countryArr = [];
// let largest = null;
// for (let i = 0; i < countries.length; i++) {
//   largest = countries[i].length;
//   countryMaxLength = Math.max(countryMaxLength, largest);
//   if (countries[i].length === countryMaxLength) {
//     countryArr.push(countries[i]);
//   }
// }

// console.log(countryArr);
let longestLength = 0;
let longestString = "";

for (let i = 0; i < countries.length; i++) {
  const currentString = countries[i];
  const currentLength = currentString.length;
  if (currentLength > longestLength) {
    longestLength = currentLength;
    longestString = currentString;
  }
}

const newArrayWithLongest = [longestString];
console.log(newArrayWithLongest);

/* ================= Task 10 ================= */
const onlyFiveCharacter = [];
for (let i = 0; i < countries.length; i++) {
  if (countries[i].length === 5) {
    onlyFiveCharacter.push(countries[i]);
  }
}
console.log(onlyFiveCharacter);

const webTechs = [
  "HTML",
  "CSS",
  "JavaScript",
  "React",
  "Redux",
  "Node",
  "MongoDB",
];

/* ================= Task 11 ================= */
let longestLengthTechs = 0;
let longestStringTechs = "";
for (let i = 0; i < webTechs.length; i++) {
  let currentString = webTechs[i];
  let currentLength = currentString.length;
  if (currentLength > longestLengthTechs) {
    longestLengthTechs = currentLength;
    longestStringTechs = currentString;
  }
}
const newTechArray = [longestStringTechs];
console.log(newTechArray);

/* ================= Task 12 ================= */
const techDetails = [];
for (let i = 0; i < webTechs.length; i++) {
  const techSingle = [];
  techSingle.push(webTechs[i], webTechs[i].length);
  techDetails.push(techSingle);
}

console.log(techDetails);

/* ================= Task 13 ================= */
const mernStack = ["MongoDB", "Express", "React", "Node"];

let acronym = "";
for (let i = 0; i < mernStack.length; i++) {
  acronym += mernStack[i][0];
}
console.log(acronym);

/* ================= Task 14 ================= */
for (tech of webTechs) {
  console.log(tech);
}

/* ================= Task 15 ================= */
const fruits = ["banana", "orange", "mango", "lemon"];
const reversed = [];
for (let i = 0; i < fruits.length; i++) {
  reversed.unshift(fruits[i]);
}
console.log(reversed);

/* ================= Task 16 ================= */
const fullStack = [
  ["HTML", "CSS", "JS", "React"],
  ["Node", "Express", "MongoDB"],
];

for (let i = 0; i < fullStack.length; i++) {
  for (let j = 0; j < fullStack[i].length; j++) {
    console.log(fullStack[i][j]);
  }
}

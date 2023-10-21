/* THEME: FUNCTIONS */

/* LEVEL 2 */

/* ================= Task 1 ================= */
function solveLinEquation(a, b, c, y) {
  let x = (-b * y - c) / a;
  return x;
}
// console.log(solveLinEquation(3, 5, 1, 8));

/* ================= Task 2 ================= */

/* ================= Task 3 ================= */

const fruits = ["banana", "apple", "orange"];
function printArray(arr) {
  for (let i = 0; i < arr.length; i++) {
    console.log(arr[i]);
  }
  return;
}
// printArray(fruits);

/* ================= Task 4 ================= */
const showDateTime = function () {
  let now = new Date();
  console.log(
    `${now.getDate()}/${
      now.getMonth() < 10 ? "0" + now.getMonth() : now.getMonth()
    }/${now.getFullYear()} ${now.getHours()}:${now.getMinutes()}`
  );
  return;
};
// showDateTime();

/* ================= Task 5 ================= */
const swapValues = function (x, y) {
  let newX = y;
  let newY = x;
  console.log(`x = ${newX}, y = ${newY}`);
  return;
};
// swapValues(4, 3);

/* ================= Task 6 ================= */
const reverseArray = function (arr) {
  const reversedArray = [];
  for (let i = 0; i < arr.length; i++) {
    reversedArray.unshift(arr[i]);
  }
  return reversedArray;
};

// console.log(reverseArray([1, 2, 3, 4, 5]));
// console.log(reverseArray(["A", "B", "C"]));

/* ================= Task 7 ================= */
const capitalizeString = function (str) {
  return str[0].toUpperCase() + str.slice(1);
};

const capitalizeArray = function (arr) {
  const capitalized = [];
  for (let i = 0; i < arr.length; i++) {
    capitalized.push(capitalizeString(arr[i]));
  }
  return capitalized;
};

// console.log(capitalizeArray(["hello", "world"]));

/* ================= Task 8 ================= */
const addItem = function (item) {
  const itemArr = [];
  itemArr.push(item);
  return itemArr;
};
// console.log(addItem("item"));

/* ================= Task 9 ================= */
const removeItem = (arr, idx) => {
  if (idx < 0 || idx >= arr.length) {
    return arr;
  }
  return arr.slice(0, idx).concat(arr.slice(idx + 1));
};

const originalArray = [1, 2, 3, 4, 5];
// console.log(removeItem(originalArray, 2));

/* ================= Task 10 ================= */
const sumOfNumbers = function (num) {
  let sum = 0;

  for (let i = 0; i <= num; i++) {
    sum += i;
  }

  return sum;
};

// console.log(sumOfNumbers(11));

/* ================= Task 11 ================= */
const sumOfOdds = function (num) {
  let sum = 0;

  for (let i = 0; i <= num; i++) {
    if (!(i % 2 === 0)) {
      sum += i;
    }
  }

  return sum;
};

// console.log(sumOfOdds(5));

/* ================= Task 12 ================= */
const sumOfEven = function (num) {
  let sum = 0;

  for (let i = 0; i <= num; i++) {
    if (i % 2 === 0) {
      sum += i;
    }
  }

  return sum;
};

/* ================= Task 13 ================= */
const evensAndOdds = function (num) {
  const evensArr = [];
  const oddsArr = [];
  let evensArrLength = 0;
  let oddsArrLength = 0;

  for (let i = 0; i <= num; i++) {
    if (i % 2 === 0) {
      evensArr.push(i);
    } else {
      oddsArr.push(i);
    }
  }
  evensArrLength = evensArr.length;
  oddsArrLength = oddsArr.length;
  console.log("The number of odds are", oddsArrLength);
  console.log("The number of evens are", evensArrLength);
  return;
};

// evensAndOdds(100);

/* ================= Task 14 ================= */
const manyArgs = function () {
  let sum = 0;
  for (let i = 0; i < arguments.length; i++) {
    sum += arguments[i];
  }
  return sum;
};

// console.log(manyArgs(1, 2, 3, 4));

/* ================= Task 15 ================= */
const randomUserIp = function () {
  const octet = () => Math.floor(Math.random() * 256);
  const ipAddress = `${octet()}.${octet()}.${octet()}.${octet()}`;
  return ipAddress;
};

// console.log(randomUserIp());

/* ================= Task 16 ================= */
// MAC Address - 00:1A:2B:3C:4D:5E
const randomMacAddress = function () {
  const macDigits = "0123456789ABCDEF";
  let macAddress = "";

  for (let i = 0; i < 12; i++) {
    const randomDigit = macDigits[Math.floor(Math.random() * 16)];
    macAddress += randomDigit;

    if (i % 2 !== 0 && i < 11) {
      macAddress += ":";
    }
  }

  return macAddress;
};

const macAddressRandom = randomMacAddress();
// console.log(macAddressRandom);

/* ================= Task 17 ================= */
const randomHexaNumberGenerator = function () {
  const hexDigits = "0123456789abcdef";
  let newHex = "";

  for (let i = 0; i < 6; i++) {
    newHex += hexDigits[Math.floor(Math.random() * hexDigits.length)];
  }

  return `#${newHex}`;
};

// console.log(randomHexaNumberGenerator());

/* ================= Task 18 ================= */
const userIdGenerator = function () {
  const characters =
    "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789";
  let userId = "";

  for (let i = 0; i < 7; i++) {
    const randomIndex =
      Math.floor(Math.random() * characters.length);
    userId += characters.charAt(randomIndex);
  }

  return userId;
};

console.log(userIdGenerator());

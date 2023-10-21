/* ================= Task 1 ================= */
let firstName = "Azizbek";
let lastName = "Abduqahhorov";
let country = "Uzbekistan";
let city = "Tashkent";
let age = 23;
let isMarried = false;
let year = 2023;

console.log(typeof firstName);
console.log(typeof lastName);
console.log(typeof country);
console.log(typeof city);
console.log(typeof age);
console.log(typeof isMarried);
console.log(typeof year);

/* ================= Task 2 ================= */
console.log("10" == 10);
console.log("10" === 10);

/* ================= Task 3 ================= */
console.log(parseInt("9.8") == 10);

/* ================= Task 4 ================= */
console.log("3" == 3);
console.log(3 >= 3);
console.log(typeof age == typeof year);

console.log("3" === 3);
console.log(3 <= 2);
console.log(typeof age == typeof isMarried);

/* ================= Task 5 ================= */
console.log(4 > 3);
console.log(4 >= 3);
console.log(4 < 3);
console.log(4 <= 3);
console.log(4 == 4);
console.log(4 === 4);
console.log(4 != 4);
console.log(4 !== 4);
console.log(4 != "4");
console.log(4 == "4");
console.log(4 === "4");
console.log("python".length !== "jargon".length);

/* ================= Task 6 ================= */
console.log("TASK 6");
console.log(4 > 3 && 10 < 12);
console.log(4 > 3 && 10 > 12);
console.log(4 > 3 || 10 < 12);
console.log(4 > 3 || 10 > 12);
console.log(!(4 > 3));
console.log(!(4 < 3));
console.log(!false);
console.log(!(4 > 3 && 10 < 12));
console.log(!(4 > 3 && 10 > 12));
console.log(!(4 === "4"));

let dragon = "dragon";
let python = "python";
console.log(dragon.includes("on") !== python.includes("on"));

/* ================= Task 7 ================= */
console.log("TASK 7");
let now = new Date();
console.log(now.getFullYear());
console.log(now.getMonth() + 1, now.getDate());
console.log(now.getDate());
console.log(now.getDay() + 1, now.getDate());
console.log(now.getHours());
console.log(now.getMinutes());
console.log(now.getTime());

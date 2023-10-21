/* ================= Task 1 ================= */
// let basis = prompt("Введите основание: ");
// let height = prompt("Введите высоту: ");
// let area = 0.5 * basis * height;
// console.log(`Площадь треугольника ${area}`);

/* ================= Task 2 ================= */
// let a = +prompt("Введите сторону a:");
// let b = +prompt("Введите сторону b:");
// let c = +prompt("Введите сторону c:");
// let perimeter = a + b + c;
// console.log(`Периметр треугольника ${perimeter}`);

/* ================= Task 3 ================= */
// let width = +prompt("Введите длина: ");
// let height = +prompt("Введите ширина: ");
// let S = width * height;
// let perimeter = 2 * (width + height);
// console.log(S, perimeter);

/* ================= Task 4 ================= */
// let r = +prompt("Введите радиус:");
// const PI = 3.14;
// let S = PI * r * r;
// let c = 2 * PI * r;
// console.log(S, c);

/* ================= Task 5 ================= */
// let x = 4;
// let y = 2 * x - 2;
// console.log(y);

/* ================= Task 6 ================= */
// let x1 = 2,
//   x2 = 6,
//   y1 = 2,
//   y2 = 10;

// let m = (y2 - y1) / (x2 - x1);
// console.log(m);

/* ================= Task 7 ================= */
// console.log(y == m);
// console.log(y >= m);
// console.log(y <= m);

/* ================= Task 8 ================= */
// let x = 1;
// let y = x ** 2 + 6 * x + 9;
// console.log(y);

/* ================= Task 9 ================= */
// let hours = +prompt("Введите часы:");
// let bidHourly = +prompt("Введите ставку в час:");
// console.log(`Ваш еженедельный заработок ${hours * bidHourly}`);

/* ================= Task 10 ================= */
// let name = prompt("Введите ваше имя: ");
// name.length >= 7
//   ? console.log("ваше имя длинное")
//   : console.log("ваше имя короткое");

/* ================= Task 11 ================= */
// let firstName = "John";
// let lastName = "Doe";

// firstName.length > lastName.length
//   ? console.log(`Твоё имя, ${firstName} длиннее твоей фамилии, ${lastName}`)
//   : console.log(`Твоё имя, ${firstName} короткее твоей фамилии, ${lastName}`);

/* ================= Task 12 ================= */
// let myAge = 23;
// let yourAge = 12;

// myAge > yourAge
//   ? console.log(`Я на ${myAge - yourAge} лет старше тебя.`)
//   : console.log(`Я на ${yourAge - myAge} лет младшее тебя.`);

/* ================= Task 13 ================= */
// let birthYear = +prompt("Введите год рождения:");
// let now = new Date();
// now.getFullYear() - birthYear > 18
//   ? console.log(
//       `Вам ${
//         now.getFullYear() - birthYear
//       }. Вы достаточно взрослый, чтобы водить`
//     )
//   : console.log(
//       `Вам ${now.getFullYear() - birthYear}. Вам будет разрешено водить через ${
//         18 - (now.getFullYear() - birthYear)
//       } года.`
//     );

/* ================= Task 14 ================= */
// let yearsLived = +prompt("Укажите количество прожитых лет: ");
// let yearsToSeconds = yearsLived * 31536000;
// console.log(`Вы жили ${yearsToSeconds} секунд.`);

/* ================= Task 15 ================= */
let now = new Date();
let minutes = now.getMinutes();

console.log(
  `${now.getFullYear()}-${
    now.getMonth() + 1
  }-${now.getDate()} ${now.getHours()}:${
    minutes < 10 ? "0" + minutes : minutes
  }`
);

console.log(
  `${now.getDate()}-${
    now.getMonth() + 1
  }-${now.getFullYear()} ${now.getHours()}:${
    minutes < 10 ? "0" + minutes : minutes
  }`
);

console.log(
  `${now.getDate()}/${
    now.getMonth() + 1
  }/${now.getFullYear()} ${now.getHours()}:${
    minutes < 10 ? "0" + minutes : minutes
  }`
);

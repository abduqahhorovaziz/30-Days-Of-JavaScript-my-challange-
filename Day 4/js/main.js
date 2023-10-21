/* LEVEL 1 */

/* ================= Task 1 ================= */
// let userAge = prompt("Введите свой возраст:");
// if (userAge >= 18) {
//   console.log("Вы достаточно взрослый, чтобы водить.");
// } else {
//   console.log(`Вам осталось ${18 - userAge} года до вождения.`);
// }

/* ================= Task 2 ================= */
// let myAge = 22;
// let yourAge = prompt("Enter your age:");

// if (myAge > yourAge) {
//   console.log(`Я старшее тебя на ${myAge - yourAge} лет `);
// } else {
//   console.log(`Я младшее тебя на ${yourAge - myAge} лет `);
// }

/* ================= Task 3 ================= */
// let a = 4,
//   b = 3;

// if (a > b) {
//   console.log(`${a} больше, чем ${b}`);
// } else {
//   console.log(`${a} меньше, чем ${b}`);
// }

// a > b
//   ? console.log(`${a} больше, чем ${b}`)
//   : console.log(`${a} меньше, чем ${b}`);

/* ================= Task 4 ================= */
// const num = +prompt("Enter number:");
// num % 2 == 0
//   ? console.log(`${num} - чётное число`)
//   : console.log(`${num} является нечётным числом.`);

/* LEVEL 2 */

/* ================= Task 1 ================= */

// const ball = prompt("Enter ball: ");

// if (ball >= 80) {
//   console.log("A");
// } else if (ball >= 70) {
//   console.log("B");
// } else if (ball >= 60) {
//   console.log("C");
// } else if (ball >= 50) {
//   console.log("D");
// } else {
//   console.log("F");
// }

/* ================= Task 2 ================= */

// const monthInput = prompt("Enter month: ");
// const month = monthInput.toLowerCase();
// switch (month) {
//   case "сентябрь":
//   case "октябрь":
//   case "ноябрь":
//     console.log("сезон осень");
//     break;
//   case "декабрь":
//   case "январь":
//   case "февраль":
//     console.log("сезон зима");
//     break;
//   case "март":
//   case "апрель":
//   case "май":
//     console.log("сезон весна");
//     break;
//   case "июнь":
//   case "июль":
//   case "август":
//     console.log("сезон лето");
//     break;
//   default:
//     console.log("It's not month name!");
// }

/* ================= Task 3 ================= */

// const dayInput = prompt("Enter day: ");
// const day = dayInput.toLowerCase();

function capitalizeLetter(str) {
  return str[0].toUpperCase() + str.slice(1);
}

// switch (day) {
//   case "понедельник":
//   case "вторник":
//   case "среда":
//   case "четверг":
//   case "пятница":
//     console.log(`${capitalizeLetter(day)} рабочий день`);
//     break;
//   case "суббота":
//   case "воскресенье":
//     console.log(`${capitalizeLetter(day)} - выходной день`);
//     break;
//   default:
//     console.log("It's not a day name!");
// }

/* LEVEL 3 */

/* ================= Task 1 ================= */

const monthInput = prompt("Enter month: ");
const month = monthInput.toLowerCase();

switch (month) {
  case "январь":
  case "март":
  case "май":
  case "июль":
  case "август":
  case "октябрь":
  case "декабрь":
    if (month == "январь") {
      console.log("В январе 31 день");
    } else if (month == "июль") {
      console.log("В июле 31 день");
    } else if (month == "октябрь") {
      console.log("В октябре 31 день");
    } else if (month == "декабрь") {
      console.log("В декабре 31 день");
    } else {
      console.log(`В ${month}е 31 день`);
    }
    break;
  case "апрель":
  case "июнь":
  case "сентябрь":
  case "ноябрь":
    if (month == "апрель") {
      console.log("В апрелe 31 день");
    } else if (month == "июнь") {
      console.log("В июне 31 день");
    } else if (month == "сентябрь") {
      console.log("В сентябре 31 день");
    } else if (month == "ноябрь") {
      console.log("В ноябре 31 день");
    }
    break;
  case "февраль":
    console.log(`${capitalizeLetter(month)} имеет 28 дней.`);
    break;
  default:
    console.log("It's not month name!");
}

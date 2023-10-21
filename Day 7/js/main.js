/* THEME: FUNCTIONS */

/* LEVEL 1 */

/* ================= Task 1 ================= */
// function fullName() {
//   console.log("Aziz Muradov");
// }
// fullName();

/* ================= Task 2 ================= */
function fullName(firstName, lastName) {
  console.log(`${firstName} ${lastName}`);
}
fullName("Aziz", "Muradov");

/* ================= Task 3 ================= */
function addNumbers(num1, num2) {
  return num1 + num2;
}
console.log(addNumbers(4, 6));

/* ================= Task 4 ================= */
function areaOfRectangle(length, width) {
  return length * width;
}
console.log(areaOfRectangle(12, 24));

/* ================= Task 5 ================= */
function perimeterOfRectangle(length, width) {
  let perimeter = 2 * (length + width);
  return perimeter;
}
console.log(perimeterOfRectangle(12, 24));

/* ================= Task 6 ================= */
function volumeOfRectPrism(length, width, height) {
  let volume = length * width * height;
  return volume;
}
console.log(volumeOfRectPrism(2, 3, 4));

/* ================= Task 7 ================= */
const PI = 3.14;
function areaOfCircle(r) {
  let area = PI * r ** 2;
  return area;
}
console.log(areaOfCircle(3));

/* ================= Task 8 ================= */
function circumOfCircle(r) {
  let circumference = 2 * PI * r;
  return circumference;
}
console.log(circumOfCircle(3));

/* ================= Task 9 ================= */
function calcDensity(mass, volume) {
  let density = mass / volume;
  return density;
}
console.log(calcDensity(12, 4));

/* ================= Task 10 ================= */
function calcSpeed(totDis, totTime) {
  let speed = totDis / totTime;
  return speed;
}
console.log(calcSpeed(3000, 2));

/* ================= Task 11 ================= */
function calcWeight(mass, gravity = 9.807) {
  let weight = mass * gravity;
  return weight;
}
console.log(calcWeight(3));

/* ================= Task 12 ================= */
function convertCelsiusToFahrenheit(oC) {
  let oF = (oC * 9) / 5 + 32;
  return oF;
}
console.log(convertCelsiusToFahrenheit(32));

/* ================= Task 13 ================= */
function calcBMI(weigh, height) {
  let bmi = weigh / height ** 2;
  if (bmi < 18.5) {
    return "Underweight";
  } else if (bmi >= 18.5 && bmi <= 24.9) {
    return "Normal weight";
  } else if (bmi >= 25 && bmi <= 29.9) {
    return "Overweight";
  } else {
    return "Obese";
  }
}

console.log(calcBMI(60, 1.75));

/* ================= Task 14 ================= */
function checkSeason(month) {
  switch (month) {
    case "january":
    case "february":
    case "december":
      console.log("Winter");
      break;
    case "march":
    case "april":
    case "may":
      console.log("Spring");
      break;
    case "june":
    case "july":
    case "august":
      console.log("Summer");
      break;
    case "september":
    case "october":
    case "november":
      console.log("Autumn");
      break;
    default:
      console.log("asdfasdf");
  }
}

checkSeason("june");

/* ================= Task 15 ================= */
function findMax(a, b, c) {
  return Math.max(a, b, c);
}
console.log(findMax(0, 10, 5));
console.log(findMax(0, -10, -2));

/* LEVEL 1 COMPLETED */

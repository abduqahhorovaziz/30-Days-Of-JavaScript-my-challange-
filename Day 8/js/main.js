/* THEME: OBJECTS */

/* LEVEL 1 */

/* ================= Task 1 ================= */
const dog = {};

/* ================= Task 2 ================= */
console.log(dog);

/* ================= Task 3 ================= */
dog.name = "Balto";
dog.legs = 4;
dog.color = "black";
dog.age = 2;
dog.bark = function () {
  return "woof woof";
};

/* ================= Task 4 ================= */
console.log(dog.name);
console.log(dog.legs);
console.log(dog.color);
console.log(dog.age);
console.log(dog.bark());

/* ================= Task 5 ================= */
dog.getDogInfo = function () {
  return `Name: ${dog.name}, legs count: ${dog.legs}, color: ${dog.color}`;
};

console.log(dog.getDogInfo());

/* LEVEL 1 COMPLETED */

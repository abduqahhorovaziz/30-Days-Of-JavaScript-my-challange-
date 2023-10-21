/* THEME: OBJECTS */

/* LEVEL 2 */

/* ================= Task 1 ================= */

let maxSkills = 0;
let skillfulPerson = null;

for (const person in usersObj) {
  if (usersObj.hasOwnProperty(person)) {
    const user = usersObj[person];
    if (user.skills.length > maxSkills) {
      maxSkills = user.skills.length;
      skillfulPerson = person;
    }
  }
}

// console.log(skillfulPerson);

/* ================= Task 2 ================= */
let maxPoints = 0;
let maxPointsArr = [];

for (const person in usersObj) {
  if (usersObj.hasOwnProperty(person)) {
    const user = usersObj[person];
    if (user.points >= 50) {
      maxPoints = user.points;
      maxPointsArr.push(person);
    }
  }
}

// console.log(maxPointsArr);

/* ================= Task 3 ================= */
const mernSkills = ["MongoDB", "Express", "React", "Node"];
const mernDevelopers = [];

for (const person in usersObj) {
  const user = usersObj[person];
  const userSkills = user.skills;

  const isMernDeveloper = mernSkills.every((skill) =>
    userSkills.includes(skill)
  );

  if (isMernDeveloper) {
    mernDevelopers.push(person);
  }
}
// console.log(mernDevelopers);

/* ================= Task 4 ================= */
const newUsers = { ...usersObj };

newUsers.Aziz = {
  email: "azizmuradovone@gmail.com",
  skills: ["HTML", "CSS", "JavaScript", "Vue"],
  age: 23,
  isLoggedIn: false,
  points: 0,
};

console.log(newUsers);

/* ================= Task 5 ================= */
const usersKeys = Object.keys(usersObj);
// console.log(usersKeys);

/* ================= Task 6 ================= */
const usersValues = Object.values(usersObj);
// console.log(usersValues);

/* ================= Task 7 ================= */

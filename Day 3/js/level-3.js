/* ================= Task 1 ================= */
let now = new Date();
let years = now.getFullYear();
let month = now.getMonth() + 1;
let day = now.getDate();
let hours = now.getHours();
let minutes = now.getMinutes();

console.log(
  `${years}-${month}-${day} ${hours < 10 ? "0" + hours : hours}:${
    minutes < 10 ? "0" + minutes : minutes
  }`
);

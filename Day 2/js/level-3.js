/* ================= Task 1 ================= */
let str =
  "Любовь - лучшая вещь в этом мире. Некоторые нашли свою любовь, а некоторые все ещё ищут свою любовь";
console.log(str.match(/любовь/gi));

/* ================= Task 2 ================= */
let bcsStr =
  "Вы не можете закончить предложение, потому что, потому что, потому что это соединение";
console.log(bcsStr.match(/потому что/gi));

/* ================= Task 3 ================= */
const sentence =
  "%I $am@% a %tea@cher%, &and& I lo%#ve %te@a@ching%;. The@re $is no@th@ing; &as& mo@re rewarding as educa@ting &and& @emp%o@weri@ng peo@ple. ;I found tea@ching m%o@re interesting tha@n any ot#her %jo@bs. %Do@es thi%s mo@tiv#ate yo@u to be a tea@cher!? %Th#is 30#Days&OfJavaScript &is al@so $the $resu@lt of &love& of tea&ching";
console.log(sentence.replace(/[^\w\s]/gi, ""));

/* ================= Task 4 ================= */
const text =
  "Он зарабатывает 5000 евро с зарплаты в месяц, годовой бонус в 10000 евро, онлайн-курсы в 15000 евро в месяц";
const moneyArr = text.match(/\d+/g);
const totalSum =
  (+moneyArr[0] + +moneyArr[moneyArr.length - 1]) * 12 + +moneyArr[1];
console.log(totalSum);

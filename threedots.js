const ages = [3, 7, 5];
const ages2 = [12, 15, 19];
const ages3 = [25, 31, 26];
// console.log(ages.concat(ages2).concat([4]).concat(ages3));
const allAges = [...ages, ...ages2, ...ages3];
console.log(allAges);

const businessman = 650;
const minister = 550;
const shoshib = 350;
// const maximum = Math.max(businessman,minister,shoshib);
const moneyList = [650, 550, 350]
const maximum = Math.max(...moneyList);
console.log(maximum);



"use strict";
// for (var i = 1; i < 11; i++) {
//     console.log(i, "x 2 =", 2 * i);
// }
var i = 1;
// while (i < 11) {
//     console.log(i);
//     i++;
// }
// do {
//     console.log(i,'* 2 =', i*2);
//     i++
// } while (i <= 10)
//write a ts program, that calculate sum of even number of 1-100 and list down even number
let evensum = 0;
let evennum = [];
for (let i = 1; i <= 100; i++) {
    if (i % 2 == 0) {
        evensum = evensum + i;
        evennum.push(i);
    }
}
console.log(evensum, evennum);
//write a ts program, that calculate sum of odd number of 1-100 and list down even number
let oddsum = 0;
let oddnum = [];
for (let a = 1; a <= 100; a++) {
    if (a % 2 != 0) {
        oddsum = oddsum + a;
        oddnum.push(a);
    }
}
console.log(oddsum, oddnum);

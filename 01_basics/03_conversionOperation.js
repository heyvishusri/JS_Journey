/*
let score = "30Vishnu";

console.log(typeof score); //output: number
console.log("score:", score); //output: score: 30

let value_Number = Number(score);
console.log(typeof value_Number); //output: number
console.log("value_Number:", value_Number); //output: value_number: Nan

let second_Value = "vishnu";
console.log(typeof second_Value); //output: string
console.log("second_Value:", second_Value); //output: second_Value_Number: vishnu

let third_Value = undefined;
console.log(typeof third_Value); //output: undefined
console.log("third_Value:", third_Value); //output: third_Value_Number: undefined
let third_Value_Number = Number(third_Value);
console.log(typeof third_Value_Number); //output: number
console.log("third_Value_Number:", third_Value_Number); //output: third_Value_Number: NaN

let fourth_Value = null;
console.log(typeof fourth_Value); //output: object
console.log("fourth_Value:", fourth_Value); //output: fourth_Value_Number: null
let fourth_Value_Number = Number(fourth_Value);
console.log(typeof fourth_Value_Number); //output: number
console.log("fourth_Value_Number:", fourth_Value_Number); //output: fourth_Value_Number: 0

let fifth_Value = true;
console.log(typeof fifth_Value); //output: boolean
console.log("fifth_Value:", fifth_Value); //output: fifth_Value_Number: true
let fifth_Value_Number = Number(fifth_Value);
console.log(typeof fifth_Value_Number); //output: number
console.log("fifth_Value_Number:", fifth_Value_Number); //output: fifth_Value_Number: 1

/*
null=> 0 when change in type is number
undefined=> NaN when change in type is number
false=> 0 when change in type is number
true=> 1 when change in type is number
string=> NaN when change in type is number
object=> 0 when change in type is number
"99abcd"=> NaN when change in type is number
"99"=> 99 when change in type is number


*/
/*
console.log(
  "======================================================================="
);
let isLoggedIn = null;
let booleanIsLoggedIn = Boolean(isLoggedIn);
console.log(typeof booleanIsLoggedIn); //output: boolean
console.log("booleanIsLoggedIn:", booleanIsLoggedIn); //output: booleanIsLoggedIn: true
*/

/*
1=> true when change in type is boolean
0=> false when change in type is boolean
"0"=> true when change in type is boolean
""=> false when change in type is boolean
"abc"=> true when change in type is boolean
"undefined"=> false when change in type is boolean
"null"=> false when change in type is boolean

*/

/*
console.log(
  "======================================================================="
);

let number_Value = 0;
let string_Value = String(number_Value);
console.log("string_Value:", string_Value); //output: string_Value: 0
console.log(typeof string_Value); //output: string

console.log(
  "======================================================================="
);
*/
/*

*/
//**********************************************Operations********************************
// const num1 = 10;
// const new_num1 = -num1;
// console.log("new_num1:", new_num1); //output: new_num1: -10

// console.log(2 + 2); //output: 4
// console.log(2 - 2); //output: 0
// console.log(2 * 2); //output: 4
// console.log(2 / 2); //output: 1
// console.log(2 ** 2); //output: 4
// console.log(2 % 2); //output: 0
// console.log(2 ** 3); //output: 8
// console.log(5 % 3); //output: 2

// console.log(+true); //output: 1
// console.log(+false); //output: 0
// console.log(+null); //output: 0
// console.log(+undefined); //output: NaN
// console.log(+NaN); //output: NaN
// console.log(+[]); //output: 0
// console.log(+{}); //output: NaN
// console.log(+[1, 2]); //output: NaN
// console.log(+[1]); //output: 1
// console.log(+[0]); //output: 0

//postfix and prefix examples
let x = 5;
let y = x++; //postfix increment
console.log("x:", x); //output: x: 6
console.log("y:", y); //output: y: 5

//how ?
//y is assigned the value of x before x is incremented
//so y is 5 and x is incremented to 6
//postfix increment returns the original value of x before incrementing

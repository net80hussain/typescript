//variable Types var,let,const
/**
 * Features of variables
 * var
 *      i-  Value can be changed/rewrite
 *      ii- Scope 
 *              a- Define within function/localy can't be accessable out side of function
 *              b- Define outside the function/globely can be accessable withing the function
 * let
 *      i-  Value can be changed/rewrite
 *    ii- Scope 
 *              a- Define within function/localy can't be accessable out side of function
 *              b- Define outside the function/globely can be accessable withing the function
 * const
 *      i-  Value can't be changed/rewrite
 *      ii- Scope 
 *              a- Define within function/localy can't be accessable out side of function
 *              b- Define outside the function/globely can be accessable withing the function
 */
var num10: number = 10;
let num20: number = 20;
const num30: number = 30;

function printConsole() {
    var localVariable = 50;
    let localLet = 100;
    const localConst = 150;
    console.log("function", num10, num20, num30);
}
printConsole();


/**------------------------------------------------------------ */
//write a program using function to add two values. and add 5 in result

function add(num1: number, num2: number): number {
    var ans = (num1 + num2);
    return ans;
}

var result = add(10, 30);
result = result + 100;
// console.log(result);

//write a program using arrow function to add two values. and add 5 in result

var add2 = (num1: number, num2: number) => num1 + num2;
var result1 = add2(10, 25) + 100;
// console.log(result1);


//write a program using functions to convert the temperature from Celsius to Fahrenheit

function cToFTemperature(_temp: number) {
    var temp: number = 36;
    var tempF: number = _temp * (9 / 5) + 32
    // console.log("tempF", tempF);

}
// cToFTemperature(40)

//Wtire a program using functions that calculates the percentage

function calculatePercentage(obtainedMarks: number, totalMarks: number) {

    var percentage = (obtainedMarks / totalMarks) * 100;
    console.log("Percentage", percentage);
}
// calculatePercentage(1040, 1100)
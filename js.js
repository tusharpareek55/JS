
//Type conversions

//THERE ARE TWO TYPES OF TYPE_CONVERSIONS : 
//(i)IMPLICIT OR COERCION

var sum = 35 + "hello"
console.log(sum) //35hello

var times = 35 * "hello"
console.log(times)
// NaN



var string = ""
var number = 40
var boolean = true
console.log(!string)
// true - string is coerced to boolean `false`, then the NOT operator negates it
console.log(boolean + string)
// "true" - boolean is coerced to string "true", and concatenated with the empty string
console.log(40 + true)
// 41 - boolean is coerced to number 1, and summed with 40


var variable1 = 20
var variable2 = "20"
console.log(variable1 == variable2)
// true
var variable3 = false
var variable4 = ""
console.log(variable1 == variable2)
// true



// (ii) EXPLICIT OR TYPE CASTING

//NUMBER TO STRING
var number2 = 30
var numberConvert = String(number)
console.log(numberConvert)
// "30"
console.log(typeof numberConvert)
// string



//NUMBER TO BOOLEAN

number = 30
numberConvert = Boolean(number)
console.log(numberConvert)
// true
console.log(typeof numberConvert)
// boolean


//BOOLEAN TO STRING

boolean = false
var booleanConvert = String(boolean)
console.log(booleanConvert)
// "false"
console.log(typeof booleanConvert)
// string



// console.log("Hello, World!");
// function greet(name) {
//     return `Hello, ${name}!`;
// }
// console.log(greet("Alice"));

// var a = 11;
// var b = 9;
// var c = 3;

// a -= 6;
// b += 4;
// c /= 2;

// console.log(a, b, c);

// // Output should be: 5 13 1.5

var firstName = "John";
var lastName = "Doe";
var age = 30;

console.log("My name is " + firstName + " " + lastName + " and I am " + age + " years old.");
console.log("My name is ${firstName} ${lastName} and I am ${age} years old.");
console.log(`My name is ${firstName} ${lastName} and I am ${age} years old.`);
console.log(`My name is ${firstName} ${lastName} 
and I am ${age} years old.`);
console.log("My name is " + firstName + " " + lastName + "\n" + "and I am " + age + " years old.");
/*
|| VERGLEICH: STRING BEGRENZER IN JAVASCRIPT
||--------------------------------------------------------------------------------------------------------||
|| Merkmal       || Single/Double Quotes (' / ") || Backticks (`)               || Akut / Accent (´)      ||
||---------------||--------------------------- --||-----------------------------||------------------------||
|| Bezeichnung   || Einf./Dopp. Anführungszeichen|| Backticks / Template Lit.   || Akzent (Dead Key)      ||
|| Zweck         || Statische Strings            || Dynamische Strings          || Sprachzeichen (á, é)   ||
|| Interpolation || Nein (nur über +)            || Ja (via ${variable})        || Nein (SyntaxError)     ||
|| Mehrzeilig    || Nur mit \n                   || Ja (nativ durch Enter)      || Nein                   ||
*/
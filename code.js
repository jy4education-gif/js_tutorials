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

// console.log("My name is " + firstName + " " + lastName + " and I am " + age + " years old.");
// console.log("My name is ${firstName} ${lastName} and I am ${age} years old.");
// console.log(`My name is ${firstName} ${lastName} and I am ${age} years old.`);
// console.log(`My name is ${firstName} ${lastName} 
// and I am ${age} years old.`);
// console.log("My name is " + firstName + " " + lastName + "\n" + "and I am " + age + " years old.");

// Schlechte Verwendung von Escaped Quotes:
var myStr = "I am a \"double quoted\" string inside \"double quotes\"";

// Wirkt sehr unelegant, besser mit „Quote-Switching“: 
// Wie erzeuge ich „“ ?: Windows : Alt + 0132 (auf dem Ziffernblock) Alt + 0147 (auf dem Ziffernblock)
var myStr2 = 'I am a "double quoted" string inside "double quotes"';
console.log("myStr: " + myStr);
console.log("myStr2: " + myStr2);
// Ausgabe:
// I am a "double quoted" string inside "double quotes"
// I am a "double quoted" string inside "double quotes"

// Best Practice über Backticks:
var myStr3 = `I am a "double quoted" string inside "double quotes"`;
var myStr4 = `Er sagte: "Es ist John's Auto", und ging.`;
console.log("myStr3: " + myStr3);
console.log("myStr4: " + myStr4);
// Ausgabe:
// I am a "double quoted" string inside "double quotes"
// Er sagte: "Es ist John's Auto", und ging.
console.log(`"Das war ein langer Tag...", sagte er nachdenklich.
"Ich bin müde." 
Dann ging er nach Hause.`);
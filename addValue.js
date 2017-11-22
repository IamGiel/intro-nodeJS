
// // ======== add two numbers ============
var a = parseInt(process.argv[3]);
var b = parseInt(process.argv[4]);
var add = a + b;
var subtract = a - b;
var multiply = a * b;
var divide = a / b;

if (process.argv[2] === "add"){
	console.log(add);
}
else if (process.argv[2] === "subtract") {
	console.log(subtract);
}
else if (process.argv[2] === "multiply") {
	console.log(multiply);
}
else if (process.argv[2] === "divide") {
	console.log(divide);
}
// // ======== power of a number ==========
else if (process.argv[2] === "power"){
console.log(Math.pow(a, b))
}
// ========== algebra ==============
// var a = parseInt(process.argv[2]);
// var b = parseInt(process.argv[3]);
                                                                                          

// console.log(()+2 = 10);


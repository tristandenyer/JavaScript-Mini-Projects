// based on page 18 of YDKJS

var bank_balance = 301.23;
const amount = 99.99;

var total = (amount * 4).toFixed(2);

if (total < bank_balance) {
console.log("I want it!");
} else {
function cashTotal (x) {
	return Number.parseFloat(x).toFixed(2); 
}    
console.log("No way! You are short $" + String(cashTotal(total - bank_balance)));
}




// dog age calculator
var dogAge = prompt("How old is your dog?"),
ageCalc = dogAge * 7;

function calculateDogAge(age) {
	var result = ("Your doggie is " + age + " years old in dog years!");
	console.log(result);
}
calculateDogAge(ageCalc);
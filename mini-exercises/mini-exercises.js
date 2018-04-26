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

var numOfCustomers;

numOfCustomers = prompt("How many customers?");

if (numOfCustomers >= 1) {
	document.write("Serving " + (numOfCustomers - 1) + " of " + numOfCustomers);
} else {
document.write ("No more customers! Go take a break.");
}





var numOfCustomers = prompt("How many in the group?");

while (numOfCustomers > 0) {
	document.write("Now serving group member " + (numOfCustomers - 1) + " of " + numOfCustomers);
	console.log(numOfCustomers);
	numOfCustomers = numOfCustomers - 1;
}




var numOfCustomers = prompt("How many?");

while (numOfCustomers >= 1) {
	if (numOfCustomers != 0) {
		console.log("Now serving customer number " + numOfCustomers);
		numOfCustomers = numOfCustomers - 1;
	} else {
		break;
    }	
}

// same as above:

for (var numOfCustomers = prompt("How many?"); numOfCustomers >= 1; numOfCustomers = numOfCustomers - 1) {
console.log("Now serving customer number " + numOfCustomers);
}

function printAmount(amt) {
	console.log(amt.toFixed(2));
}
function formatAmount() {
	return "$" + amount.toFixed(2);
}

var amount = 99.99;

printAmount(amount * 2);

amount = formatAmount();
console.log(amount);





var age = prompt("What's your age?");

if (age.length >= 3) {
	alert("You are too old!");
} 
else {alert("Cool! I remember being " + age + " .")};






// odd that 'true' holds a value of 1. Changing to false makes it 0.
var y = true + true + 2 + 'cats';
console.log(y[y.length-2]);
console.log(y);






// age calc
var birthYear = 1973,
futureYear = 2020;

var maths = futureYear - birthYear;

var ageFuture = "I will be either " + maths + " or " + (maths - 1) + " in " + futureYear;
console.log(ageFuture);





// ration estimator based on agevar age = prompt("What is your age?"),
maxAge = 100,
estDaily = 5;

var yearsLeft = maxAge - age;

var outputNum = "You will need " + (yearsLeft * estDaily) + " to last you until the ripe old age of " + maxAge + " .";

alert(outputNum);





// calculate area of a circle
var radius = prompt("What is the radius?"),
diameter = radius * 2,
circumference = 3.141592 * diameter,
area = 3.141592 * (radius * radius);

console.log("The circumference is " + circumference + ".");
console.log("The area is " + area + ".");





// convert C to F
var celsius = prompt("Enter Celsius value.");

var fahrenheit = ((celsius * 9)/5) + 32;

alert(celsius + "°C is " + fahrenheit + "°F");





// asking for name and greeting them
var userName = prompt("What is your name?");

function yourName(name) {
	alert("Hello, " + name);
}

yourName(userName);





// calculate new size with same aspect ratio as orignal
function aspectRatio(originalWidth, originalHeight, newWidth) {
	var originalAspectRatio = (originalWidth / originalHeight),
	newHeight = (newWidth / originalAspectRatio);
	console.log("Your new size is " + newWidth + " x " + newHeight + ".");
}

aspectRatio(800, 600, 1000);





// recipe card
var recipe = {
	title: "Cookies!",
	servings: 4,
	ingredients: ["cinnamon", "cumin", "cocoa"]
}

console.log(recipe.title);
console.log('Servings: ' + recipe.servings);
console.log('Ingredients:');
for (var i = 0; i < recipe.ingredients.length; i++) {
    console.log(recipe.ingredients[i]);
}





// reading list
var books = [
    {title: "Motorcycle",
	author: "Some Lady",
	alreadyRead: true
    },
    {title: "Cars",
	author: "Some Guy",
	alreadyRead: false
    },
    {title: "Cats",
	author: "Some Dog",
	alreadyRead: false
    }

];
for (var i = 0; i < books.length; i++) {
	var book = books[i];
	var bookInfo = book.title + " by " + book.author;
	if (book.alreadyRead) {
		console.log("You already read " + bookInfo);
                    } else {
	console.log("You still need to read " + bookInfo);
                    }
}
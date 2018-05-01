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



// if else if else statement
function greaterNum(numOne, numTwo) {
	if(numOne > numTwo){
		console.log(numOne + " is greater.");
    } else if(numOne < numTwo) {
		console.log(numTwo + " is greater.");
    }
}

greaterNum(9,2);



// .toLowercase
function helloWorld(en) {
	if(en.toLowerCase() == "hello") {
	return(en);
    }
}

helloWorld("HELLO");




// return a greeting based on language code
function helloWorld(langCode) {
	if(langCode.toLowerCase() == "es") {
	return "Hola Mundo";
    } else if(langCode.toLowerCase() == "de") {
	return "Hallo Welt";
    } else if(langCode.toLowerCase() == "en") {
	return "Hello, world";
    } else {
	return "I don't have that language code.";
    }
}

console.log(helloWorld("ES"));
console.log(helloWorld("de"));
console.log(helloWorld("en"));
console.log(helloWorld("aa"));




// assign grades based on integer argument
function assignGrade(numGrade) {
	if(numGrade >= 90) {
		return "A";
    } else if(numGrade <= 89 && numGrade >= 80) {
		return "B";
    } else if(numGrade <= 79 && numGrade >= 70) {
		return "C";
    } else if(numGrade <= 69 && numGrade >= 60) {
		return "D";
    } else {
		return "F";
    }
}

console.log(assignGrade(45));
console.log(assignGrade(76));
console.log(assignGrade(99));
console.log(assignGrade(69));


// log every value from 60 - 100
function assignGrade(numGrade) {
	if(numGrade >= 90) {
		return "A";
    } else if(numGrade <= 89 && numGrade >= 80) {
		return "B";
    } else if(numGrade <= 79 && numGrade >= 70) {
		return "C";
    } else if(numGrade <= 69 && numGrade >= 60) {
		return "D";
    } else {
		return "F";
    }
}

for(i = 60; i < 101; i++) {
	console.log("For " + i + ", you got a " + assignGrade(i) + ".");
}




// pluralize the noun, accounting for zero being pluralized too
function pluralize(noun, number) {
	if(number != 1) {
		return number + " " + noun + "s";
    } else {
		return number + " " + noun;
    }
}

console.log (pluralize("cat", 5));
console.log (pluralize("dog", 1));
console.log (pluralize("chicken", 0));





// FizzBuzz exercise, a couple ways
for (var i = 1; i < 101; i++){
	if (i % 15 == 0) {
		console.log("FizzBuzz");
	} else if (i % 3 == 0) {
		console.log("Fizz");
	} else if (i % 5 == 0) {
		console.log("Buzz");
	}
	else console.log(i);
}



for (var i = 1; i < 101; i++){
	if (i % 3 && i % 5 == 0) console.log("FizzBuzz");
	else if(i % 3 == 0) console.log("Fizz");
	else if(i % 5 == 0) console.log("Buzz");
	else console.log(i);
}




// for loop to check numbers for even / odd
for (i = 0; i <= 20; i++) {
	if(i % 2 === 0) {
		console.log(i + " is even!");
    } else {
		console.log(i + " is odd.");
    }
}



// multiplication 
var multiplier = 9;

for (i = 0; i <= 10; i++) {
	var result = i * multiplier;
	console.log(i + " * 9 = " + result);
}
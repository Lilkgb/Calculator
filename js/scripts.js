var add = function(number1, number2) {
	return number1 + number2;
};

var subtract = function(number1, number2) {
	return number1 - number2;
}

var multiply = function(number1, number2) {
	return number1 * number2;
}

var divide = function(number1, number2) {
	return number1 / number2;
}

var number1 = parseInt(prompt("What's your first number you want to insert to add"));
var number2 = parseInt(prompt("Please select your second number you want to add."));

var result = divide(number1, number2);
alert(result);

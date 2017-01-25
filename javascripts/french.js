'use strict';

console.log('bonjour');

var Translator = (function(firstTranslator) {

	var French = {
		merry: "joyeux",
		christmas: "noel"
	}
 
	firstTranslator.getFrench = function(inputValue) {

		console.log('getFrench wants to run');

		var splitString = "";
		var frenchPhrase = "";

		splitString = inputValue.split(" ");

		splitString.forEach(function(word) {

		frenchPhrase += `<p> ${French[word]} </p>`;

		});

		print(frenchPhrase);
		return frenchPhrase;

	}
		return firstTranslator;

})(Translator);
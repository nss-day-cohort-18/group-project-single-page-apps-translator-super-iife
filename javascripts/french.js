'use strict';

console.log('bonjour');

var Translator = (function(firstTranslator) {

	var French = {
		merry: "joyeux",
		christmas: "noel"
	}
 
	firstTranslator.getFrench = function() {

		console.log('getFrench wants to run');

		var splitString = inputValue.split(" ");
		var frenchPhrase = "";

		splitString.forEach(function(word) {

		frenchPress += French[word];

		});

		return frenchPhrase;

	}
		return firstTranslator;

})(Translator);
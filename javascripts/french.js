'use strict';

console.log('bonjour');

var Translator = (function(firstTranslator) {

	var French = {
		merry: "joyeux",
		christmas: "noel"
	}
 
	firstTranslator.getFrench = function () {

		console.log('getFrench wants to run');

		var splitString = inputValue.split(" ");

		splitString.forEach(word) {

		var frenchPhrase += French[word];

		}

		return frenchPhrase;

	}
		return firstTranslator;

})(Translator);
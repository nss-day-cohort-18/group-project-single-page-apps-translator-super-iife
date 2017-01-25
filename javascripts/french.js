'use strict';

console.log('bonjour');

var Translator = (function(firstTranslator) {

	var French = {
		merry: "joyeux",
		christmas: "noel",
		mischief: "méfait",
		managed: "accompli",
		and: "et",
		happy: "bonne",
		new: "nouvelle",
		year: "an",

	}
 
	firstTranslator.getFrench = function(inputValue) {

		console.log('getFrench wants to run');

		var splitString = "";
		var frenchPhrase = "";

		splitString = inputValue.split(" ");

		splitString.forEach(function(word) {

		frenchPhrase += `<h1> ${French[word]} </h1>`;

		});

		print(frenchPhrase);
		return frenchPhrase;

	}
		return firstTranslator;

})(Translator);
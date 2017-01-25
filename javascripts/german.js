'use strict';

console.log('bonjour');

var Translator = (function(firstTranslator) {

	var German = {
		merry: "Frohe",
		christmas: "Weihnachten"
	}
 
	firstTranslator.getGerman = function () {

		console.log('getGerman wants to run');

		var splitString = inputValue.split(" ");
		var germanPhrase = "";

		splitString.forEach(function(word) {

		 germanPhrase += German[word];

		});

		return germanPhrase;

	}
		return firstTranslator;

})(Translator);
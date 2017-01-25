'use strict';

console.log('halo');

var Translator = (function(firstTranslator) {

	var German = {
		merry: "Frohe",
		christmas: "Weihnachten"
	}
 
	firstTranslator.getGerman = function(inputValue) {

		console.log('getGerman wants to run');

		var splitString = "";
		var germanPhrase = "";

		splitString = inputValue.split(" ");
		
		splitString.forEach(function(word) {

		 germanPhrase += `<p> ${German[word]} </p>`;

		});

		print(germanPhrase);
		return germanPhrase;

	}
		return firstTranslator;

})(Translator);
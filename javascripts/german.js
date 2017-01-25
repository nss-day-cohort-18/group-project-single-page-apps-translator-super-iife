'use strict';

console.log('halo');

var Translator = (function(firstTranslator) {

	var German = {
		merry: "Frohe",
		christmas: "Weihnachten",
		mischief: "unfug",
		managed: "verwaltet",
		and: "und",
		happy: "Frohes",
		new: "neues",
		year: "jahr",
	}
 
	firstTranslator.getGerman = function(inputValue) {

		console.log('getGerman wants to run');

		var splitString = "";
		var germanPhrase = "";

		splitString = inputValue.split(" ");
		
		splitString.forEach(function(word) {

		 germanPhrase += `<h1> ${German[word]} </h1>`;

		});

		print(germanPhrase);
		return germanPhrase;

	}
		return firstTranslator;

})(Translator);
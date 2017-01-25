'use strict';

console.log('hola');

var Translator = (function() {

	var Spanish = {
		merry: "feliz",
		christmas: "navidad"
	}

	return {

	  getSpanish: function(inputValue) {

		console.log('getSpanish wants to run');

		var splitString = inputValue.split(" ");
		var spanishPhrase = "";

		splitString.forEach(function(word) {

		spanishPhrase += Spanish[word];

		});

		return spanishPhrase;

		}

	}

})();
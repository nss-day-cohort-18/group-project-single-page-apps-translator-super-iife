'use strict';

console.log('hola');

var Translator = (function() {

	var Spanish = {
		merry: "feliz",
		christmas: "navidad"
	}

	return {

	  getSpanish: function () {

		console.log('getSpanish wants to run');

		var splitString = inputValue.split(" ");

		splitString.forEach(word) {

		var spanishPhrase += Spanish[word];

		}

		return spanishPhrase;

		}

	}

})();
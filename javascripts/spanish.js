'use strict';

console.log('hola');

var Translator = (function() {

	var Spanish = {
		merry: "feliz",
		christmas: "navidad",
		and: "y",
		happy: "feliz",
		new: "nuevo",
		year: "año"
	}

	return {

	  getSpanish: function(inputValue) {

		console.log('getSpanish wants to run');

		var splitString = "";
		var spanishPhrase = "";

		splitString = inputValue.split(" ");

		splitString.forEach(function(word) {

		spanishPhrase += `<h1> ${Spanish[word]} </h1>`;

		});

		console.log('spanishPhrase:', spanishPhrase);
		print(spanishPhrase);

		return spanishPhrase;

		}


	}

})();
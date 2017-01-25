'use strict';

console.log('hola');

var Translator = (function() {

	var Spanish = {
		merry: "feliz",
		christmas: "navidad",
		mischief: "mischief",
		managed: "manejado",
	}

	return {

	  getSpanish: function(inputValue) {

		console.log('getSpanish wants to run');

		var splitString = "";
		var spanishPhrase = "";

		splitString = inputValue.split(" ");

		splitString.forEach(function(word) {

		spanishPhrase += `<p> ${Spanish[word]} </p>`;

		});

		console.log('spanishPhrase:', spanishPhrase);
		print(spanishPhrase);

		return spanishPhrase;

		}


	}

})();
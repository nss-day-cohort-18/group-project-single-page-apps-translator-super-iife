'use strict';
console.log('ready');

var input = document.getElementById("input");
var select = document.getElementById("select");
var button = document.getElementById("button"); 
var output = document.getElementById("output");





button.addEventListener("click", whichLanguage);

function whichLanguage (e) {
	console.log('whichLanguage wants to run');
	var inputValue = "";
	inputValue = input.value;
	console.log('input value:', inputValue);
	var selectValue = "";
	selectValue = select.value;
	console.log('selctValue:', selectValue);
	
	switch (selectValue) {

		case "Spanish":
		Translator.getSpanish(inputValue);
		break;

		case "French":
		Translator.getFrench(inputValue);
		break;
	}
}

//		case "German":
//		Translator.getGerman(inputValue);
//		break;
//
//		default:
//		alert("please select a language.");
//	}
//}
//
//	function print(variable) {
//
//		output.innerHTML = spanishPhrase;
//	}
//
//



/* global console */
var person = "0";
function week4() {
	"use strict";
	var names = ["Yaakov", "John", "Jen", "Jason", "pual", "Frank", "Larry", "Puala", "Laura", "Jim"];

	for (var i =0; i < names.length; i++) {
	if((names[i][0]=="J")){
											person =(" Good bye " + names[i]);
	}else{
											person=(" Hello " + names[i]);
	}
		console.log(person);
}
	}
week4()



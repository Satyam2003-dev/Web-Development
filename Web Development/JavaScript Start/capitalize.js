var name = prompt("What is your name");
var firstChar = name.slice(0,1);
var upperCaseFirstChar = firstChar.toUpperCase();
var restOfChar = name.slice(1,name.length).toLowerCase();
// restOfChar = restOfChar.toLowerCase()
var capitalizedName = upperCaseFirstChar + restOfChar;
alert("Hello" + " " + capitalizedName);

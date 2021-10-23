"use strict"

const str = "каждый охотник хочет знать где сидит фазан";

function capitalize(str) {
    return str.replace(/(^|\s)\S/g, function(a) {return a.toUpperCase()})
}

console.log(capitalize(str));

////////

const subString = "JavaScript";
const string = "Я учу javascript!";

function checkSubstring (str, subStr) {
    return str
    .toLowerCase()
    .includes(subStr.toLowerCase());
}

console.log(checkSubstring(string,subString))
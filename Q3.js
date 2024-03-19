// Name Cases: Store a person’s name in a variable, and then print that person’s name in lowercase, uppercase, and titlecase.
var personName = "Muhammad Naeem Warsi";
// lower case 
console.log(personName.toLowerCase());
// upper case
console.log(personName.toLocaleUpperCase());
// Title case
console.log(personName.replace(/\bw/g, function (C) { return C.toLocaleUpperCase(); }));

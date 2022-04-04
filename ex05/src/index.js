// Only change code below this line
var sum = 0;
function addThree() {
    sum = sum + 3;
    console.log("addThree: " + sum);
}
function addFive() {
    sum = sum + 5;
    console.log("addFive: " + sum);
}
console.log(addThree());
console.log(addFive());
// Only change code above this line
module.exports = {
	addThree,
	addFive
}

// Only change code below this line
function localScope() {
	var myVariable = "I am Here!";
	console.log(myVariable);
}
// Only change code above this line
// My Variable is not defined outside of localScope
localScope();

if(typeof myVariable != "undefined") {
	console.log('outside localScope', myVariable) }
else {console.log('outside localScope UNDEFINED!!!')
	 }
module.exports = localScope;

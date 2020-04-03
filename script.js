// Assignment Code
var generateBtn = document.querySelector("#generate");

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);

//ask user to type the number of letters for a new password
let passLength = prompt("How many characters the password should consist of?");
let passLenghtNum = parseInt(passLength);
console.log("promt " + passLength);
console.log("PromtNum" + passLenghtNum);

//ask user does he/she want the lowercase chars in the password
//ask user does he/she want the uppercase chars in the password
//ask user does he/she want the special chars in the password
//ask user does he/she want the numbers in the password

if (passLength >= 8 && passLength <= 128) {
  let lowerCaseChar = confirm("Do you want lowercase chars in your password?");
  let upperCaseChar = confirm("Do you want uppercase chars in your password?");
  let specialChar = confirm("Do you want special chars in your password?");
  let numChar = confirm("Do you want numbers in your password?");
} else if (passLength !== "" && passLength !== null) {
  alert("Please choose the number from 8 to 128");
} else {
  alert("Password will not be generated.");
}

// console.log(lowerCaseChar);
// console.log(upperCaseChar);
// console.log(specialChar);
// console.log(numChar);

let charTypes = [];

function createCharType(char) {
  if (char == true) {
    charTypes.push("true");
  }
}

createCharType(lowerCaseChar);
createCharType(upperCaseChar);
createCharType(specialChar);
createCharType(numChar);

console.log(charTypes);
//generate the password based on the user's choice, fill it with randomly chosen types of chars
//with the length according to the user's choice
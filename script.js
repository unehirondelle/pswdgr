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

function generatePassword() {

  let passLength = "";
  console.log("promt " + passLength);

  //ask user does he/she want the lowercase chars in the password
  //ask user does he/she want the uppercase chars in the password
  //ask user does he/she want the special chars in the password
  //ask user does he/she want the numbers in the password

  let lowerCaseChar = false;
  let upperCaseChar = false;
  let specialChar = false;
  let numChar = false;

  //randomly choose the datatype for each chars

  let charSet = {
    "lowerCaseArr": ["a", "b", "c", "d", "e"],
    "upperCaseArr": ["F", "G", "H", "E", "I"],
    "specialCharArr": ["~", "!", "&", "$", "?"],
    "numCharArr": [0, 3, 4, 8, 9]
  };

  //generate the password based on the user's choice, fill it with randomly chosen types of chars
  //with the length according to the user's choice

  let newPass = "";
  let newChar = "";

  passLength = prompt("How many characters the password should consist of? \nChoose a number from 8 and 128");
  if (passLength >= 8 && passLength <= 128) {
    lowerCaseChar = confirm("Do you want lowercase chars in your password?");
    upperCaseChar = confirm("Do you want uppercase chars in your password?");
    specialChar = confirm("Do you want special chars in your password?");
    numChar = confirm("Do you want numbers in your password?");
  } else if (passLength !== "" && passLength !== null) {
    alert("Please choose a number from 8 to 128");
  } else {
    alert("Password will not be generated.");
  }

  console.log(lowerCaseChar);
  console.log(upperCaseChar);
  console.log(specialChar);
  console.log(numChar);

  let charTypes = [];

  /* function createCharType(char) {
    if (char == true) {
      charTypes.push("true");
    } else {
      charTypes.push("false");
    }
  } */

  if (lowerCaseChar) {
    charTypes.push("lowerCaseArr");
  }
  if (upperCaseChar) {
    charTypes.push("upperCaseArr");
  }
  if (specialChar) {
    charTypes.push("specialCharArr");
  }
  if (numChar) {
    charTypes.push("numCharArr");
  }

  /* createCharType(lowerCaseChar);
  createCharType(upperCaseChar);
  createCharType(specialChar);
  createCharType(numChar); */

  console.log(charTypes);


  for (let i = 0; i < passLength; i++) {
    let typeIndex = Math.floor(Math.random() * charTypes.length);
    console.log("charTypeIndex: " + typeIndex);

    console.log(charTypes[typeIndex]);
    if (charTypes[typeIndex] === "lowerCaseArr") {
      let lowerCaseIndex = Math.floor(Math.random() * charSet.lowerCaseArr.length);
      newChar = charSet.lowerCaseArr[lowerCaseIndex];
      console.log("new lowercase char " + charSet.lowerCaseArr[lowerCaseIndex]);
      console.log("------------");
    } else if (charTypes[typeIndex] === "upperCaseArr") {
      let upperCaseIndex = Math.floor(Math.random() * charSet.upperCaseArr.length);
      newChar = charSet.upperCaseArr[upperCaseIndex];
      console.log("new uppercase char " + charSet.upperCaseArr[upperCaseIndex]);
      console.log("------------");
    } else if (charTypes[typeIndex] === "specialCharArr") {
      let specialCharIndex = Math.floor(Math.random() * charSet.specialCharArr.length);
      newChar = charSet.specialCharArr[specialCharIndex];
      console.log("new special char " + charSet.specialCharArr[specialCharIndex]);
      console.log("------------");
    } else if (charTypes[typeIndex] === "numCharArr") {
      let numCharIndex = Math.floor(Math.random() * charSet.numCharArr.length);
      newChar = charSet.numCharArr[numCharIndex];
      console.log("new numeric char " + charSet.numCharArr[numCharIndex]);
      console.log("------------");
    }
    newPass += newChar;
  }
  console.log("newPass " + newPass);
  return newPass;
}
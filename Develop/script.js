// Assignment Code
var generateBtn = document.querySelector("#generate");

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");
  
  passwordText.value = password;

}

function generatePassword() {
  var parametersSelected = 0;
  var FinalLength = 0;
  var possibleCharacters = "";
  var lowerCase = prompt("Lower case letters? y/n", "y");
  if (lowerCase === null) {
    return;
  }
  if (lowerCase === "y"){
    parametersSelected = parametersSelected + 1;
    FinalLength = FinalLength + 26;
    possibleCharacters += "qwertyuiopasdfghjklzxcvbnm"
  }
  var capitals = prompt("Upper case letters? y/n","y");
  if (capitals === null) {
    return;
  }
  if (capitals === "y"){
    parametersSelected = parametersSelected + 1;
    FinalLength = FinalLength + 26;
    possibleCharacters += "QWERTYUIOPASDFGHJKLZXCVBNM"
  }
  var specialCharacters = prompt("Special characters? y/n", "y");
  if (specialCharacters === null) {
    return;
  }
  if (specialCharacters === "y"){
    parametersSelected = parametersSelected + 1;
    FinalLength = FinalLength + 31;
    possibleCharacters += "!#$%&'()*+,-./:;<=>?@[\\]^_`{|}~"
  }
  var numbers = prompt("Would you like numbers? y/n", "y");
  if (numbers === null) {
    return;
  }
  if (numbers === "y"){
    parametersSelected = parametersSelected + 1;
    FinalLength = FinalLength + 10;
    possibleCharacters += "1234567890"
  }
  if (parametersSelected === 0) {
    return;
  } 
  console.log(possibleCharacters);
  var passwordLength = prompt("How long do you want your password? (please type a number, not the work for that number)");
  if (passwordLength === null) {
    return("You canceled the operation");
  }
  if (passwordLength > 128 || passwordLength < 8 ) {
    return("Invalid number, must be between 8 and 128");
  }
  parseInt(passwordLength);
  console.log(passwordLength);
  var finalPassword = "";
  var randomNumber = 0;
  console.log(parametersSelected);
  for (;passwordLength > 0; passwordLength--) {
   randomNumber = Math.floor(Math.random() * FinalLength);
   finalPassword += possibleCharacters.charAt(randomNumber);
  }
  console.log(FinalLength);
  console.log(possibleCharacters.length);
  console.log(finalPassword.length);
  console.log(finalPassword);
  return(finalPassword);
}


// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);

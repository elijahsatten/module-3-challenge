// Assignment code here

/* Initialize each character */
var lowerCase = "abcdefghijklmnopqrstuvwxyz".split("");
var upperCase = "abcdefghijklmnopqrstuvwxyz".toUpperCase().split("");
var numbers = "1234567890".split("");
var special = "!#$%&'()*+,-./:;<=>?@[]^_`{|}~".split("");

/* Function for generating password */
function generatePassword() {
  var passwordOptions = [];
  var finalpass = [];

  /* Initializing prompts */
  var passwordLen = prompt("How long do you want your password?");
  var upper = prompt("Do you want any uppercase in your password?");
  var lower = prompt("Do you want any lowercase in your password?");
  var num = prompt("Do you want any numbers in your password?");
  var spec = prompt("Do you want any special characters in your password?");

  if(upper) {
    passwordOptions = passwordOptions.concat(upperCase);
  } else if (lower) {
    passwordOptions = passwordOptions.concat(lowerCase);
  } else if (num) {
    passwordOptions = passwordOptions.concat(numbers);
  } else if (spec) {
    passwordOptions = passwordOptions.concat(special);
  }
  console.log(passwordOptions);

  /* For loop to generate secure password */
  for (var i = 0; i < passwordLen; i++) {
    var ran = Math.floor(Math.random() * passwordOptions.length);

    finalpass.push(passwordOptions[ran]);
  }
  console.log(finalpass);
  return finalpass.join("");
}

// Get references to the #generate element
var generateBtn = document.querySelector("#generate");

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);

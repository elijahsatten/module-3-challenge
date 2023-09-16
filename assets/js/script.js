// Assignment code here

/* Initialize each character */
var lowerCase = "abcdefghijklmnopqrstuvwxyz".split("");
var upperCase = "abcdefghijklmnopqrstuvwxyz".toUpperCase().split("");
var numbers = "1234567890".split("");
var special = "!#$%&'()*+,-./:;<=>?@[]^_`{|}~".split("");
var minLength = 8;
var maxLength = 128;

/* Function for generating password */
function generatePassword() {
  var finalPass = [];
  var passwordOptions = [];

  while (true) {
     var passwordLen = prompt("How long do you want your password? (Must be between " + minLength + " and " + maxLength + ")");

    if (passwordLen === null || passwordLen.trim() === "") {
      return "";
    }

    if (parseInt(passwordLen) >= minLength && parseInt(passwordLen) <= maxLength) {
      break;
    } else {
      alert("Must be between 8 and 128 characters."
      );
    }
  }

  /* Initializing prompts */
  while (true) {
    var upper = confirm("Do you want uppercase in your password?");
    var lower = confirm("Do you want lowercase in your password?");
    var num = confirm("Do you want numbers in your password?");
    var spec = confirm("Do you want special characters in your password?");

    if (upper || lower || num || spec) {
      break;
    } else {
      alert("Must choose at least one criteria.");
    }
  }

  if (upper) {
    passwordOptions = passwordOptions.concat(upperCase);
  }

  if (lower) {
    passwordOptions = passwordOptions.concat(lowerCase);
  }

  if (num) {
    passwordOptions = passwordOptions.concat(numbers);
  }

  if (spec) {
    passwordOptions = passwordOptions.concat(special);
  }

  if (passwordLen.length >= minLength && passwordLen <= maxLength) {
    return true;
  }
  console.log(passwordOptions);

  /* For loop to generate secure password */
  for (var i = 0; i < passwordLen; i++) {
    var ran = Math.floor(Math.random() * passwordOptions.length);

    finalPass.push(passwordOptions[ran]);
  }
  console.log(finalPass);
  return finalPass.join("");
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

// Assignment code here
function generatePassword() {
  // Converting User input from a string value that can then be interpreted 
    passwordLength = parseInt(passwordLength)
    var passwordLength = prompt("How many characters would you like your password to contain?")

    if( passwordLength < 8 || passwordLength > 128 ) {
      alert("Error: Password must be between 8 and 128 characters, please try again.")
      generatePassword();
    }
    else {
        var special = confirm("Click OKAY to confirm including special characters."); 
        var numeric = confirm("Click OKAY to confirm including numeric characters."); 
        var lowerCase = confirm("Click OKAY to confirm including lowercase characters."); 
        var upperCase = confirm("Click OKAY to confirm including Uppercase characters."); 
    }
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

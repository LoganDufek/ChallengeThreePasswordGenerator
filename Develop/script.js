// Assignment code here
// var passwordArray = [];

// Converting User input from a string value that can then be interpreted 



  
function generatePassword() {

    passwordLength = parseInt(passwordLength)
        var passwordLength = prompt("How many characters would you like your password to contain?")

        if ( passwordLength < 8 || passwordLength > 128 ) {
          alert("Error: Password must be between 8 and 128 characters, please try again.")
          return "Click Button Again For New Attempt"
          }
      
        else {
        passwordLength =  passwordLength;
        var special = confirm("Click OKAY to confirm including special characters."); 
        var numeric = confirm("Click OKAY to confirm including numeric characters."); 
        var lowerCase = confirm("Click OKAY to confirm including lowercase characters."); 
        var upperCase = confirm("Click OKAY to confirm including Uppercase characters."); 
        
         if(special === true && numeric === true && lowerCase === true && upperCase === true) {

              var options = "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789!@#$%^&*()_+~`|}{[]\:;?><,./-=";
              passwordString = "";

          for ( i= 0, n = options.length; i <= passwordLength; ++i ){
             passwordString += options.charAt(Math.floor(Math.random() * n));
          }
          
          return passwordString;
        }
}
}
  
// }



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

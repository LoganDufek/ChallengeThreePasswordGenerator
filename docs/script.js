// Assignment code here


function generatePassword() {
// Converting User input from a string value that can then be interpreted 
    passwordLength = parseInt(passwordLength)
      //Get User Input
        var passwordLength = prompt("How many characters would you like your password to contain?")
        // If Statement to end the function if the input is invalid
        if ( passwordLength < 8 || passwordLength > 128 ) {
          alert("Error: Password must be between 8 and 128 characters, please try again.")
          return "Click Button Again For New Attempt"
          }
        //Else statement to ask for various confimations
        else {
        passwordLength =  passwordLength;
        var special = confirm("Click OKAY to confirm including special characters."); 
        var numeric = confirm("Click OKAY to confirm including numeric characters."); 
        var lowerCase = confirm("Click OKAY to confirm including lowercase characters."); 
        var upperCase = confirm("Click OKAY to confirm including Uppercase characters."); 
        
        //Nested if statments for the various combinations of the above options
         if(special === true && numeric === true && lowerCase === true && upperCase === true) {

              var options = "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789!@#$%^&*()_+~`|}{[]\:;?><,./-=";
              passwordString = "";

        //For loop within each if statment that determins the randomly generated password based on the above string and the User's input
          for ( i= 0, n = options.length; i <= passwordLength; i++ ){
             passwordString += options.charAt(Math.floor(Math.random() * n));
          }
         //Return the generated password to the User 
          return passwordString;
        }

        else if(special === false && numeric === true && lowerCase === true && upperCase === true) {

          var options = "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789";
          passwordString = "";

          for ( i= 0, n = options.length; i <= passwordLength; ++i ){
          passwordString += options.charAt(Math.floor(Math.random() * n));
      }
          return passwordString;
    }
      else if(special === false && numeric === false && lowerCase === true && upperCase === true) {

          var options = "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ";
          passwordString = "";

          for ( i= 0, n = options.length; i <= passwordLength; ++i ){
          passwordString += options.charAt(Math.floor(Math.random() * n));
            }
          return passwordString;
              }  
      else if(special === false && numeric === false && lowerCase === false && upperCase === true) {

          var options = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
          passwordString = "";
      
          for ( i= 0, n = options.length; i <= passwordLength; ++i ){
          passwordString += options.charAt(Math.floor(Math.random() * n));
              }
          return passwordString;
             }  

      else if(special === true && numeric === false && lowerCase === true && upperCase === true) {

              var options = "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ!@#$%^&*()_+~`|}{[]\:;?><,./-=";
              passwordString = "";

          for ( i= 0, n = options.length; i <= passwordLength; ++i ){
             passwordString += options.charAt(Math.floor(Math.random() * n));
          }
          
          return passwordString;
        }


      else if(special === true && numeric === false && lowerCase === false && upperCase === true) {

          var options = "ABCDEFGHIJKLMNOPQRSTUVWXYZ!@#$%^&*()_+~`|}{[]\:;?><,./-=";
          passwordString = "";

          for ( i= 0, n = options.length; i <= passwordLength; ++i ){
            passwordString += options.charAt(Math.floor(Math.random() * n));
      }
      
          return passwordString;
        }

      else if(special === true && numeric === false && lowerCase === false && upperCase === false) {

          var options = "!@#$%^&*()_+~`|}{[]\:;?><,./-=";
          passwordString = "";

          for ( i= 0, n = options.length; i <= passwordLength; ++i ){
            passwordString += options.charAt(Math.floor(Math.random() * n));
      }
      
          return passwordString;
        }

      else if(special === true && numeric === false && lowerCase === true && upperCase === false) {

          var options = "abcdefghijklmnopqrstuvwxyz!@#$%^&*()_+~`|}{[]\:;?><,./-=";
          passwordString = "";

          for ( i= 0, n = options.length; i <= passwordLength; ++i ){
            passwordString += options.charAt(Math.floor(Math.random() * n));
      }
      
          return passwordString;
    }

    else if(special === false && numeric === false && lowerCase === true && upperCase === false) {

      var options = "abcdefghijklmnopqrstuvwxyz";
      passwordString = "";

        for ( i= 0, n = options.length; i <= passwordLength; ++i ){
        passwordString += options.charAt(Math.floor(Math.random() * n));
  }
  
        return passwordString;
}

    else if(special === true && numeric === true && lowerCase === false && upperCase === false) {

      var options = "0123456789!@#$%^&*()_+~`|}{[]\:;?><,./-=";
      passwordString = "";

      for ( i= 0, n = options.length; i <= passwordLength; ++i ){
      passwordString += options.charAt(Math.floor(Math.random() * n));
}

      return passwordString;
}

  else if(special === false && numeric === true && lowerCase === false && upperCase === true) {

  var options = "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789";
  passwordString = "";

    for ( i= 0, n = options.length; i <= passwordLength; ++i ){
    passwordString += options.charAt(Math.floor(Math.random() * n));
      }

      return passwordString;
      }
    else {
      alert("Error: Can't Generate Password from no Characters, Please Try Again.")
      return "Click Button Again For New Attempt"
    }  
    
  }
};

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

// Assignment Code
// var generateBtn = document.querySelector("#generate");

function myFunction() {
  let passwordLength = prompt("How many characters would you like in your password? Enter 8-128", 8);
  
  let numbers = prompt("Would you like numbers in you password? Y for Yes N for No", "Y"); 
  
  let upperCase = prompt("Would you like uppercase letters in you password? Y for YES N FOR NO", "Y");
  
  let lowerCase = prompt("Would you like lowercase letters in you password? Y for YES N FOR NO", "Y");

  let specialC = prompt("Would you like special characters in you password? Y for YES N FOR NO", "Y");

  if (numbers === "Y" && upperCase === "Y" && lowerCase === "Y" && specialC === "Y"){
    var chars = "0123456789abcdefghijklmnopqrstuvwxyz!@#$%^&*()ABCDEFGHIJKLMNOPQRSTUVWXYZ";
  }
  else if (numbers === "Y" && upperCase === "Y" && lowerCase === "Y" && specialC === "N"){
    var chars = "0123456789abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ";
  }
  else if (numbers === "Y" && upperCase === "Y"&& lowerCase === "N"&& specialC === "N"){
    var chars = "0123456789ABCDEFGHIJKLMNOPQRSTUVWXYZ";
  }
  else if (numbers === "Y" && upperCase === "N" && lowerCase === "N" && specialC === "N"){
    var chars = "0123456789";
  }
  else if (numbers === "N" && upperCase === "Y" && lowerCase === "Y" && specialC === "Y"){
    var chars = "abcdefghijklmnopqrstuvwxyz!@#$%^&*()ABCDEFGHIJKLMNOPQRSTUVWXYZ";
  }
  else if (numbers === "N" && upperCase === "N" && lowerCase === "Y" && specialC === "Y"){
    var chars = "abcdefghijklmnopqrstuvwxyz!@#$%^&*()";
  }
  else if (numbers === "N" && upperCase === "N" && lowerCase === "Y" && specialC === "N"){
    var chars = "abcdefghijklmnopqrstuvwxyz";
  }
  else if (numbers === "Y" && upperCase === "N" && lowerCase === "Y" && specialC === "N"){
    var chars = "0123456789abcdefghijklmnopqrstuvwxyz";
  }
  else if (numbers === "N" && upperCase === "N" && lowerCase === "N" && specialC === "N"){
    alert("This would make a terrible password.  Try again.");
    var chars = null;
  }
  
  var password = ""
  for (var i = 0; i < passwordLength; i++) {
    var randomNumber = Math.floor(Math.random() * chars.length);
    password += chars.substring(randomNumber, randomNumber +1);
   }
         document.getElementById("password").value = password;

         
  
}

// Write password to the #password input
// function writePassword() {
//   var password = generatePassword();
//   var passwordText = document.querySelector("#password");

//   passwordText.value = password;

// }


// document.getElementById("password").innerHTML =
// "Your password will be " + characters + " characters long!";

// Add event listener to generate button
// generateBtn.addEventListener("click", writePassword);

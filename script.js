
//Listen for clicks on both buttons

var genButton = document.querySelector("#generate");
genButton.addEventListener("click", passwordGen);

var copyButton = document.querySelector("#copyPB");
copyButton.addEventListener("click", copyPswrd)

//Generate password function

function passwordGen() {
  
//Prompts to determine character preferences

  let passwordLength = prompt("How many characters would you like in your password? Enter a value between 8-128", 8);
  while(passwordLength > 128 || passwordLength < 8 || Number.isNaN(Number(passwordLength))){
    alert('Please enter a value between 8-128');
    passwordLength = prompt("How many characters would you like in your password? Enter 8-128", 8);
  } 
  alert("Your password will be " + passwordLength + " characters long!");


  let numbers = prompt("Would you like numbers in you password? \"y\" for Yes \"n\" for No", "y").toLowerCase();
  while(numbers !== "y" && numbers !== "n"){
    alert('Please type \"y\" or \"n\"');
    numbers = prompt("Would you like numbers in you password? \"y\" for Yes \"n\" for No", "y").toLowerCase();
  } 
  if (numbers=="y"){
    alert("Numbers are all up in this password!");
  }else{
    alert("No Numbers for you!!")
  }
  
  let upperCase = prompt("Would you like uppercase letters in you password? \"y\" for Yes \"n\" for No", "y").toLowerCase();
  while(upperCase !== "y" && upperCase !== "n"){
    alert('Please type \"y\" or \"n\"');
    upperCase = prompt("Would you like uppercase letters in you password? \"y\" for Yes \"n\" for No", "y").toLowerCase();
  } 
  if (upperCase=="y"){
    alert("Capital Letters Represent!!!");
  }else{
    alert("No Cap!!");
  }
  
  let lowerCase = prompt("Would you like lowercase letters in you password? \"y\" for Yes \"n\" for No", "y").toLowerCase();
  while(lowerCase !== "y" && lowerCase !== "n"){
    alert('Please type \"y\" or \"n\"');
    lowerCase = prompt("Would you like lowercase letters in you password? \"y\" for Yes \"n\" for No", "y").toLowerCase();
  } 
  if (lowerCase =="y"){
    alert("Score one for the little guy!!!");
  }else{
    alert("How dare you? Little letters have feelings too.");
  }

  let specialC = prompt("Would you like special characters in you password? \"y\" for Yes \"n\" for No", "y").toLowerCase();
  while(specialC !== "y" && specialC !== "n"){
    alert('Please type \"y\" or \"n\"');
    specialC = prompt("Would you like special characters in you password? \"y\" for Yes \"n\" for No", "y").toLowerCase();
  } 
  if (specialC == "y"){
    alert("Whoooo You fancy!");
  }else{
    alert("Guess you're not special");
  }

  //Define characters based on preferences

   chars = ""

  if (numbers === "y"){
    chars = chars + "0123456789";
  }

  if (specialC === "y"){
    chars = chars + "!@#$%^&*()";
  }

  if (upperCase === "y"){
    chars = chars + "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
  }

  if (lowerCase === "y"){
    chars = chars + "abcdefghijklmnopqrstuvwxyz";
  }
  
  // Convert current state of chars to an array

  chars = chars.split("")

  // Generate random password with character set defined by preference prompts

  var password = []
  for (var i = 0; i < passwordLength; i++) {
    var randomNumber = Math.floor(Math.random() * chars.length); //1 -128
    var truevalue = chars[randomNumber] // a, b, 3, *
    password.push(truevalue)
   }

   //Write password to "password" area and convert array back to string 


  document.getElementById("password").value = password.join(""); 

}

//Copy Password Function

function copyPswrd() {
  var pswrdCopy = document.getElementById("password");
  pswrdCopy.select();
  document.execCommand("copy");  
}

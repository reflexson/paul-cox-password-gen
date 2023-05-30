

function passwordGen() {
  
  
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
  if(specialC == "y"){
    alert("Whoooo You fancy!");
  }else{
    alert("Guess you're not special");
  }

  if (numbers === "y" && upperCase === "y" && lowerCase === "y" && specialC === "y"){
    var chars = "0123456789abcdefghijklmnopqrstuvwxyz!@#$%^&*()ABCDEFGHIJKLMNOPQRSTUVWXYZ";
  }
  else if (numbers === "y" && upperCase === "y" && lowerCase === "y" && specialC === "n"){
    var chars = "0123456789abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ";
  }
  else if (numbers === "y" && upperCase === "y" && lowerCase === "n" && specialC === "n"){
    var chars = "0123456789ABCDEFGHIJKLMNOPQRSTUVWXYZ";
  }
  else if (numbers === "n" && upperCase === "n" && lowerCase === "n" && specialC === "y"){
    var chars = "!@#$%^&*()";
  }
  else if (numbers === "y" && upperCase === "n" && lowerCase === "n" && specialC === "n"){
    var chars = "0123456789";
  }
  else if (numbers === "n" && upperCase === "y" && lowerCase === "y" && specialC === "y"){
    var chars = "abcdefghijklmnopqrstuvwxyz!@#$%^&*()ABCDEFGHIJKLMNOPQRSTUVWXYZ";
  }
  else if (numbers === "n" && upperCase === "n" && lowerCase === "y" && specialC === "y"){
    var chars = "abcdefghijklmnopqrstuvwxyz!@#$%^&*()";
  }
  else if (numbers === "n" && upperCase === "n" && lowerCase === "y" && specialC === "n"){
    var chars = "abcdefghijklmnopqrstuvwxyz";
  }
  else if (numbers === "y" && upperCase === "n" && lowerCase === "y" && specialC === "n"){
    var chars = "0123456789abcdefghijklmnopqrstuvwxyz";
  }
  else if (numbers === "n" && upperCase === "n" && lowerCase === "n" && specialC === "n"){
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


function copyPswrd() {
  var pswrdCopy = document.getElementById("password");
  pswrdCopy.select();
  document.execCommand("copy");  
}

// Variables that are set
var generateBtn = document.querySelector("#generate");
var lowercaseAlphabet = "abcdefghijklmnopqrstuvwxyz";
var lowercaseArr = lowercaseAlphabet.split("");
var uppercaseAlphabet = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
var uppercaseArr = uppercaseAlphabet.split("");
var sym = "!@#$%^&*()/?;:<>[]{}";
var symArr = sym.split("");
var number = "0123456789";
var numArr = number.split("");



window.onload = alert("Click to Generate password to start");

 //Password Generator

 function writePassword() {
   var password = generatePassword();
   var passwordText = document.querySelector("#password");
   passwordText.value = password;

  }
function generatePassword() {
  var allChars = [];
  var resultPass = "";


// Variables set

var totlength = prompt("How many characters would you like your password to be?");

if(totlength <8 || totlength > 128){
    alert("Choose a length of at least 8 characters and no more than 128 characters!/nPlease start over.");
}

else{
  if(confirm("Would you like your password to contain lower case letters?")){
      Array.prototype.push.apply(allChars, lowercaseArr);
  }

  if(confirm("Would you like your password to contain upper case letters?")){
    Array.prototype.push.apply(allChars, uppercaseArr);
}  

  if(confirm("Would you like your password to contain symbols?")){
    Array.prototype.push.apply(allChars, symArr );
} 

  if(confirm("Would you like your password to contain numbers?")){
    Array.prototype.push.apply(allChars, numArr);
}

 if(allChars.length===0){
  alert("You must select 1 character type to generate a password!\nPlease start over.");
}
 // four loop

else{
  for(var i=0; i<totlength; i++){
      var random = Math.floor(Math.random()*allChars.length);
      resultPass += allChars[random];
  }
   //Display the result
  return resultPass;
}
}



// // Add event listener to generate button
 
}



generateBtn.addEventListener("click", writePassword);
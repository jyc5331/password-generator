// Assignment code here
//HELP these things aren't quite functioning, if I add a bracket, they highlight, but then nothing else works
function generatePassword() {
  var alpha = "abcdefghijklmnopqrstuvwxyz";
  var caps = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
  var numeric = "0123456789";
  var special = "!$^&*-=+_?";

  var selectedCharacters = "";
  var password = "";

  var passwordLength = getPasswordLength();
}

//end of generatePassword

// Write password to the #password input HELP get a function loop going in here
function writePassword() {
  console.log("hello");
  //Lowercase characters
  var includeAlpha = window.confirm("Click OK to include lowercase letters");
  if (includeAlpha) {
    selectedCharacters += alpha;
  }
  console.log(includesAlphaCharacters);

  //Capital characters
  var includeCaps = window.confirm("Click OK to include uppercase letters");
  if (includeCaps) {
    selectedCharacters += caps;
  }
  console.log(includesCapitalCharacters);

  //Numeric characters
  var includeNumeric = window.confirm("Click OK to include uppercase letters");
  if (includeNumeric) {
    selectedCharacters += numeric;
  }
  console.log(includesCapitalCharacters);

  //Special Characters
  var includeSpecial = window.confirm("Click OK to include special characters");
  if (includeSpecial) {
    selectedCharacters += special;
  }
  console.log(includesSelectedCharacters);
  // HELP This should return writePassword or generatePassword
}

//end of write password

//getting password length
function getPasswordLength() {
  var length = window.prompt(
    "How many characters will your password contain? Please enter a number between 8 and 126."
  );
  if (length < 8) {
    window.alert("Please enter a numeric value greater than 7");
    return getPasswordLength;
  }
  if (length > 126) {
    window.alert("Please enter a numeric value lesser than 126");
    return getPasswordLength;
  } else {
    window.alert("Please enter a numeric value between 8 and 126");
    return getPasswordLength;
  }
} //HELP does this need a ";"?

//HELP window.alert that takes passwordLength + selectedCharacters and generates the actual password

// Add event listener to generate button
// document.body.addEventListener("click", writePassword);
// Get references to the #generate element

//HELP should I delete the commented out document line? 
var generateBtn = document.querySelector("#generate");
generateBtn.addEventListener("click", writePassword);
//document.getElementById("myBtn").addEventListener("click", writePassword);

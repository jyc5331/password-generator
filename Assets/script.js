//Global variables 

var alpha = "abcdefghijklmnopqrstuvwxyz";
var caps = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
var numeric = "0123456789";
var special = "!$^&*-=+_?";

var selectedCharacters = "";
var password = "";



//end of generatePassword

//getting password length
function getPasswordLength() {
  var length = window.prompt(
    "How many characters will your password contain? Please enter a number between 8 and 128."
  );
  if (length < 8) {
    window.alert("Please enter a numeric value greater than 7");
  }
  if (length > 128) {
    window.alert("Please enter a numeric value lesser than 128");
  } else {
    return getPasswordLength;
  }
}

// Write password to the #password input HELP get a function loop going in here
function writePassword() {
  var passwordLength = getPasswordLength();
  console.log("hello");
  //Lowercase characters
  var includeAlpha = window.confirm("Click OK to include lowercase letters");
  if (includeAlpha) {
    selectedCharacters += alpha;
  }
  console.log("includesAlphaCharacters");

  //Capital characters
  var includeCaps = window.confirm("Click OK to include uppercase letters");
  if (includeCaps) {
    selectedCharacters += caps;
  }
  console.log("includesCapitalCharacters");

  //Numeric characters
  var includeNumeric = window.confirm("Click OK to include numeric characters");
  if (includeNumeric) {
    selectedCharacters += numeric;
  }
  console.log("includesNumericCharacters");

  //Special Characters
  var includeSpecial = window.confirm("Click OK to include special characters");
  if (includeSpecial) {
    selectedCharacters += special;
  }
  console.log("includesSelectedCharacters");
  //var response = generatePassword;
}

//end of write password

// generate password and window alert
function generatePassword (length) {
  var password = ""
for(var i = 0; i < length; i++) {
  password = password + selectedCharacters.charAt(Math.floor(Math.random() * selectedCharacters.passwordLength));
  alert (password);
}
  return password;
};


// Add event listener to generate button
// document.body.addEventListener("click", writePassword);
// Get references to the #generate element

var generateBtn = document.querySelector("#generate");
generateBtn.addEventListener("click", writePassword);


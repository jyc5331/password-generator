//Global variables 

var alpha = "abcdefghijklmnopqrstuvwxyz";
var caps = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
var numeric = "0123456789";
var special = "!$^&*-=+_?";



//end of generatePassword

//getting password length
function getPasswordLength() {
  var passwordLength = window.prompt(
    "How many characters will your password contain? Please enter a number between 8 and 128."
  );
  //HELP something, maybe While? for if length=0 || length=null then call function getPasswordLength
  if (passwordLength < 8) {
    window.alert("Please enter a numeric value greater than 7");
    getPasswordLength ();
  }
  else if (passwordLength > 128) {
    window.alert("Please enter a numeric value lesser than 128");
    getPasswordLength ();
  } else {
    return passwordLength = passwordLength;
  }
}
// console.log (passwordLength); HELP why is this not working?

// Write password to the #password input HELP get a function loop going in here
function writePassword() {
  var selectedCharacters = "";
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
  return selectedCharacters;
  //var response = generatePassword;
}

//end of write password

// generate password and window alert

function generatePassword () {
  var length = getPasswordLength ();
  var selectedCharacters = writePassword ();
  var password = ""
for(var i = 0; i < length; i++) {
  password = password + selectedCharacters.charAt(Math.floor(Math.random() * selectedCharacters.length));
}
alert (password);
};



// Add event listener to generate button
var generateBtn = document.querySelector("#generate");
generateBtn.addEventListener("click", generatePassword);

// window.alert(password); HELP this doesn't actually return any values and runs first?

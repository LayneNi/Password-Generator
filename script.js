// Assignment Code
var generateBtn = document.querySelector("#generate");


function generatePassword() {
// arrays listing possible character options
var lowercase = [ "a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"]
var uppercase = ["A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z"]
var numbers = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9]
var specialChar = ["!", "@", "#", "$", "%", "^", "&", "*", "(", ")", "+", "="]
var selectedCharacters = []
// different prompts and confirms that user must interact with
var passwordLength = prompt("How many characters would you like in your password? *Between 8 and 128*");
var lowercaseOption = confirm("Would you like lowercase letters in your password?")
var uppercaseOption = confirm("Would you like Uppercase letters in your password?")
var numbersOption = confirm("Would you like numbers in your password?")
var specialCharOption = confirm("Would you like special characters in your password?")

// final characters is the array of the randomly selected characters
var finalCharacters = []
// character count is used to count the number of selected characters in order to subtract the given number from the final characters which will include the randomly characters equating to the user selected length plus the gaurunteed characters selected by the user in the confirms
var characterCount = 0
// if statements meant to randomly generate 1 random character from the length of the given array and add it to the final character array
// each time a character type is selected it adds 1 to character count to later subtract from total number of characters in the final characters array
if (
  lowercaseOption == true
) { 
  selectedCharacters = selectedCharacters.concat(lowercase)
  finalCharacters.push(lowercase[Math.floor(Math.random() * lowercase.length)])
  characterCount ++
  console.log(selectedCharacters)
} 
if (
  uppercaseOption == true
) { 
  selectedCharacters = selectedCharacters.concat(uppercase)
  finalCharacters.push(uppercase[Math.floor(Math.random() * uppercase.length)])
  characterCount ++
  console.log(selectedCharacters)
}
if (
  numbersOption == true
) {
  selectedCharacters = selectedCharacters.concat(numbers)
  finalCharacters.push(numbers[Math.floor(Math.random() * numbers.length)])
  characterCount ++
  console.log(selectedCharacters)
}
if (
  specialCharOption == true
) {
  selectedCharacters = selectedCharacters.concat(specialChar)
  finalCharacters.push(specialChar[Math.floor(Math.random() * specialChar.length)])
  characterCount ++
  console.log(selectedCharacters)
}

// GIVEN I need a new, secure password
// WHEN I click the button to generate a password

// THEN I am presented with a series of prompts for password criteria
// WHEN prompted for password criteria
  // prompts
// THEN I select which criteria to include in the password
// WHEN prompted for the length of the password

// THEN I choose a length of at least 8 characters and no more than 128 characters
// WHEN asked for character types to include in the password
  // between 8 and 128
// THEN I confirm whether or not to include lowercase, uppercase, numeric, and/or special characters
// WHEN I answer each prompt
  // 4 confirms
// THEN my input should be validated and at least one character type should be selected
// WHEN all prompts are answered

// THEN a password is generated that matches the selected criteria
// WHEN the password is generated

// THEN the password is either displayed in an alert or written to the page


  return "password"
}




// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);

////////////////////////////////////////////////////////////////

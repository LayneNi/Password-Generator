// Assignment Code
var generateBtn = document.querySelector("#generate");


function generatePassword() {
// arrays listing possible character options
var lowercase = [ "a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"]
var uppercase = ["A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z"]
var numbers = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9]
var specialChar = ["!", "@", "#", "$", "%", "^", "&", "*", "(", ")", "+", "="]
// array to hold total selected characters
var selectedCharacters = []
// different prompts and confirms that user must interact with
var passwordLength = prompt("How many characters would you like in your password? *Between 8 and 128*");

// if statement to keep password length between 8-128 characters
if (passwordLength >= 8 && passwordLength <= 128) {
  console.log("Valid Length");




var lowercaseOption = confirm("Would you like lowercase letters in your password?")
var uppercaseOption = confirm("Would you like Uppercase letters in your password?")
var numbersOption = confirm("Would you like numbers in your password?")
var specialCharOption = confirm("Would you like special characters in your password?")
// final characters is the array of the randomly selected characters
var finalCharacters = []
// character count is used to count the number of selected characters in order to subtract the given number from the final characters which will include the randomly characters equating to the user selected length plus the gaurunteed characters selected by the user in the confirms
var characterCount = 0
// if statements meant to randomly generate 1 random character from the length of the given array and add it to the final character array
// (characterCount ++) each time a character type is selected it adds 1 to character count to later subtract from total number of characters in the final characters array
// Math.random to get a random character everytime
// only if statements with no else statements to ensure code runs each option
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

// for loop used to keep randomly generated password within the length of characters selected by user
// used to randomly gererate characters within the selected password length adding 1 character at a time each time it is repeated within that length
// used to subtract the number of additional characters added by if statements by subtracting character count
// .Math.floor to round down as to not lose our 0 indexed number
for (var i=0; i<passwordLength - characterCount; i++){
  var random = Math.floor(Math.random() * selectedCharacters.length)
  finalCharacters.push(selectedCharacters[random])
}
 console.log(finalCharacters)
// .join to turn an array into a string
  return finalCharacters.join("")


// alert if password length selected is outside range of 8-128 or if user selects "cancel"
}else {
  alert("Please enter a number between 8 and 128")
}
}
// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);

///////////////////////////////////////////////////////

var generateBtn = document.querySelector("#generate");

generateBtn.addEventListener("click", writePassword);

function writePassword() {

  let characters = {
    upperCase: ['A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I', 'J', 'K', 'L', 'M', 'N', 'O', 'P', 'Q', 'R', 'S', 'T', 'U', 'V', 'W', 'X', 'Y', 'Z'],
    lowerCase: ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm', 'n', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z'],
    numbers: ['1', '2', '3', '4', '5', '6', '7', '8', '9', '0'],
    special: ['+', '-', '&', '!', '(',')', '{','}', '[',']','^', '~', '*', '?', ':']
  }

  let pwLength = parseInt(prompt('Between 8 to 128 characters, how long would you like your password?'))
  if (pwLength < 8 || pwLength > 128) {
    alert('Please pick within the character limits')
    return
  }

  let pwUpperCase = confirm('Would you like uppercase?')
  let pwLowerCase = confirm('Would you like lowercase?')
  let pwNumber = confirm('Would you like numbers?')
  let pwSpecial = confirm('Would you like special case characters?')
  

  let pw = ''

  for (let i = 0; i < pwLength; i++) {

    let choice = Math.floor(Math.random() * 4)

    if (choice === 0) {

      if (pwUpperCase === true) {
        let change = characters.upperCase[Math.floor(Math.random() * characters.upperCase.length)]
        pw = pw + change
      } else {
        i--
      }

    } else if (choice === 1) {
      if (pwLowerCase === true) {
        let change = characters.lowerCase[Math.floor(Math.random() * characters.lowerCase.length)]
        pw = pw + change
      } else {
        i--
      }
    } else if (choice === 2) {
      if (pwNumber === true) {
        let change = characters.numbers[Math.floor(Math.random() * characters.numbers.length)]
        pw = pw + change
      } else {
        i--
      }
    } else if (choice === 3) {
      if (pwSpecial === true) {
        let change = characters.special[Math.floor(Math.random() * characters.special.length)]
        pw = pw + change
      } else {
        i--
      }
    }
  }

  document.getElementById('password').innerHTML = `${pw}`

}
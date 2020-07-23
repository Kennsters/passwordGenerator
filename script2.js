var generateBtn = document.querySelector("#generate");

let lowerCase = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm', 'n', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z']

let upperCase = ['A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I', 'J', 'K', 'L', 'M', 'N', 'O', 'P', 'Q', 'R', 'S', 'T', 'U', 'V', 'W', 'X', 'Y', 'Z']

let numbers = ['1', '2', '3', '4', '5', '6', '7', '8', '9', '0']

let special = ['+', '-', '&', '!', '(', ')', '{', '}', '[', ']', '^', '~', '*', '?', ':']

const writePassword = () => {

    let possibleCharacters = []
    let guaranteedCharacters = []
    let characters = []

    let pwLength = parseInt(prompt('Between 8 to 128 characters, how long would you like your password?'))

    if (pwLength < 8 || pwLength > 128) {
        alert('Please pick within the character limits')
        return
    }

    if (confirm('Would you like lowercase?')) {
        possibleCharacters = possibleCharacters.concat(lowerCase)
        guaranteedCharacters.push(lowerCase[Math.floor(Math.random() * lowerCase.length)])
    }

    if (confirm('Would you like uppercase?')) {
        possibleCharacters = possibleCharacters.concat(upperCase)
        guaranteedCharacters.push(upperCase[Math.floor(Math.random() * upperCase.length)])
    }

    if (confirm('Would you like numbers?')) {
        possibleCharacters = possibleCharacters.concat(numbers)
        guaranteedCharacters.push(numbers[Math.floor(Math.random() * numbers.length)])
    }

    if (confirm('Would you like special characters?')) {
        possibleCharacters = possibleCharacters.concat(special)
        guaranteedCharacters.push(special[Math.floor(Math.random() * special.length)])
    }

    for (let i = 0; i < pwLength; i++) {
        characters.push(possibleCharacters[Math.floor(Math.random() * possibleCharacters.length)])
    }

    for (let i = 0; i < guaranteedCharacters.length; i++) {
        characters[i] = guaranteedCharacters[i]
    }

    return characters.join(``)
}

document.getElementById('generate').addEventListener('click', () => {
    let characters = writePassword ()

    document.getElementById('password').textContent = characters
})

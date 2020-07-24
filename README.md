# passwordGenerator Homework

###What it's about
In this homework assignment we were told to create a random password generator.

###Rules
We will prompt the user to choose if they'd like lower case, upper case, numbers, special characters and the length. Based on their choices, the password generator will generate a password that meets those specifications. 

###How the JavaScript Code Works

We created the function 'writePassword' and in this function we created 3 different arrays called: possibleCharacters which are the random characters that will be chosen, guaranteedCharacters which are the guaranteed characters, and characters which is the combined characters from both the possibleCharacters and guaranteedCharacters. 

We prompt the user to enter in a number to let us know how long the password will be and we store that value in our loop as that will be how many iterations we will have as we generate our password. 

We use confirm prompts nested into if statements to run the random character generator while also pushing in the a random guaranteed character. Soon we have 2 arrays of random characters and guaranteed characters.

We then run a loop of the array of random characters and push them into our characters array as well as loop through the guaranteed array and push those value onto characters. Then we will return the characters 'joined' together. 

After we will push the new generated password onto the screen through the getElementById in which we display the password. 
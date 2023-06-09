# Description:

Display 5 different random numbers on page. From there, a 30-second timer starts.
After 30 seconds the numbers disappear and the user has to enter, one at a time, the numbers he has seen previously, using the prompt().
After the 5 numbers have been entered, the software tells how many and which of the numbers to guess have been found.

# Bonuses:

We show the 30 second countdown on the page
Let the user enter the numbers via 5 input fields instead of via prompt.

# Procedure

1. I get the elements (timer and number display) from the DOM.
2. I set the timer with a timing function.
3. I set the numbers with math random.
   3a. I create an array to store the numbers.
   3b. I generate 5 random numbers.
   3c. I check if the numbers are already in the array.
   3d. I print the result.
4. I create an event listener for the submit button.
5. I create a function to check the user's guesses.
6. I compare the user's guesses with the random numbers using a for loop.
7. I get the result element from the dom.
   7a. I display the result.

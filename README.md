# project_Game for Founders & Coders

Classic rock paper scissors game with a bit of animation.

Regarding the possible result of the game I opted for an object to make the code more readable and easier to understand,rather than a list of "if" statements.

The roll_dice() function does not return any result, it is merely visual. Based on the constant (randomized) change of the img src.
The actual result is determined by the randomize() function, which will be taken as the index of the items[] array.

The whole game is based on a few asynchronous functions such as setInterval() and setTimeout()

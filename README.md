### Problems I experienced while building this game:
- Creating divs on the fly, but selecting them before I created them resulting in an empty nodelist

- Forgetting that an array is an object so that when I did typeof on an array, I expected it to return array

- Couldn't use my createEl function to create an image tag, but didn't need to as I was able to use innerHTML on the boxes to append the images

- Problems hiding and showing my ships on the gameboard:  unsure whether to use display: none, or visibility: hidden.  Decided not to use either as the first one changed my gameboard by removing divs, and the second one left the hidden image in place, but it was obviously there because there was a color difference in the divs.  I decided to use opacity to hide my ships because then I could blend the colors nicely to produce a uniformly colored gameboard.

- I repurposed the startGame() and endGame() functions from a game I built over the summer, as well as some sounds, but then had problems incorporating them into the current game.

- When a ship sinks, I want to hear a specific sound, but I can't get that to work.  I'm not sure exactly where to put it.

- I want to shatter my page if all ships are sunk by the user.

- I had trouble with increasing my counter, and when I did get it to work, then it continues to increase even when a user toggles the same ship.

- When the countdown ends, the game continues.

- At one point the game started by telling me to try harder.  I fixed that by changing the order in which I called my functions.

- The game was counting down by twos instead of by 1, then I realized I had included my createEl function inside the start function, in lieu of including the createBoard function

- When I start the game, the score goes to 1 automatically before I clicked.  Removing the createEl from inside the start function fixed that.

- Without even starting the game, I hear the death sounds and increment the counter  when I click on the gameboard.

- I would like to hide the numbering system to I use to choose where to place my ships, but when I used innerContent, everything was hidden from the board.





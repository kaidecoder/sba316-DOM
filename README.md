### The DOCUMENT OBJECT MODEL

The Battleship app is a modern-day take on the classic version of the game. Mine uses a mouse to hunt for ships to blow up. As the user clicks around the page while hunting for their passenger-less ships, they have to guess where the ships are located, and sink enough of them in order to win high praise from the Game Master. As a ship is sunk, a red X will mark each sunken ship. The user only has 20 seconds to accomplish this great feat.

At the start of the game, the user will be prompted with questions on color, class, or id choices. Once they choose, the game will update those attributes in real time. If the colors don't match well, please do not blame the Game Master. Onward and Hoity HO Maties!!!!

### Introduction

This assessment measures your understanding of the Document Object Model (DOM) and your capability to implement its features in a practical manner. You have creative freedom in the topic, material, and purpose of the web application you will be developing, so have fun with it! However, remember to plan the scope of your project to the timeline you have been given.

This assessment has a total duration of two (2) days. This is a take-home assessment.

You have two total days (including weekends and holidays) to work on this assessment. This assessment will be due at 5:00pm on the second day after it is assigned. Your instructor may provide you with class time to work on the assessment, schedule permitting.

### Objectives

Use DOM properties, methods, and techniques to create a web application that provides a dynamic user experience.
Use BOM properties, methods, and techniques to facilitate creation of a dynamic web application.
Demonstrate proficiency with event-driven programming and DOM events.
Implement basic form validation using any combination of built-in HTML validation attributes and DOM-event-driven JavaScript validation.

### Submission

Submit the link to your completed assessment using the Start Assignment button on the Assignment page in Canvas.

### Instructions

- You will create a small single-page web application. The topic and content of this application is entirely up to you; be creative!
- Your work will be graded according to the technical requirements listed in the following section. Creativity and effort always work in your favor, so feel free to go beyond the scope of the listed requirements if you have the time.
- Keep things simple. Like most projects you will encounter, you should finish the absolute minimum requirements first, and then add additional features and complexity if you have the time to do so. This will also help you understand what you can get done in a specific allotment of time if you were to be asked to do something similar in the future.
- Once you have an idea in mind, approach your design through the user's perspective. User experience is one of the most important aspects of successful web design. If users enjoy their time on with your application, they are more likely to trust whatever services or information you offer, and more likely to come back and use the application again in the future.
- Since topic and content are secondary to functionality for this assessment, we have included some resources below for free content that you can use to populate your application. Once you have gotten your functionality in place, you can return and fill in the content with something interesting.

### Resources for free content:

Text: Lipsum, a Lorem Ipsum text generator.
Images: Pexels, a resource for stock photos (and other media).
GIFs: Motion Elements, a resource for GIFs (and other media).

### Requirements

The requirements listed here are absolute minimums. Ensure that your application meets these requirements before attempting to further expand your features.
Create your application locally, and initialize a local git repo. Make frequent commits to the repo. When your application is complete, push your repo to GitHub and submit the link to the GitHub page using the submission instructions at the top of this document.

### Reflection (Optional)

Once you have completed your project, answer the following questions to help solidify your understanding of the process and its outcomes, as well as improve your ability to handle similar tasks in the future.
What could you have done differently during the planning stages of your project to make the execution easier?
Were there any requirements that were difficult to implement? What do you think would make them easier to implement in future projects?
What would you add to, or change about your application if given more time?
Use this space to make notes for your future self about anything that you think is important to remember about this process, or that may aid you when attempting something similar again:

### Problems I experienced while building this game:

- Creating divs on the fly, but selecting them before I created them resulting in an empty nodelist

- Forgetting that an array is an object so that when I did typeof on an array, I expected it to return array

- Couldn't use my createEl function to create an image tag, but didn't need to as I was able to use innerHTML on the boxes to append the images

- Problems hiding and showing my ships on the gameboard: unsure whether to use display: none, or visibility: hidden. Decided not to use either as the first one changed my gameboard by removing divs, and the second one left the hidden image in place, but it was obviously there because there was a color difference in the divs. I decided to use opacity to hide my ships because then I could blend the colors nicely to produce a uniformly colored gameboard.

- I repurposed the startGame() and endGame() functions from a game I built over the summer, as well as some sounds, but then had problems incorporating them into the current game.

- When a ship sinks, I want to hear a specific sound, but I can't get that to work. I'm not sure exactly where to put the sound file.

- I wanted to shatter my page if all ships are sunk by the user but settled for a red X shape on each sunken ship.

- I had trouble with increasing my counter, and when I did get it to work, then it continued to increase even when a user toggled the same ship.

- When the countdown ends, the game continues.

- At one point the game started by telling me to try harder. I fixed that by changing the order in which I called my functions.

- The game was counting down by twos instead of by 1, then I realized I had included my createEl function inside the start function, in lieu of including the createBoard function

- When I started the game, the score went to 1 automatically before I clicked. Removing the createEl from inside the start function fixed that.

- Without even starting the game, I hear the death sounds and can increment the counter when I click on the gameboard. I don't know how to fix that as yet.

- I would like to hide the numbering system I used to choose where to place my ships, but when I used innerContent, everything was hidden from the board.

- I was able to create the Document Fragment, but had to hide it from the code as it interfered with the eventListener on my play button. I didn't bother using the cloneNode method to copy the HTML template and add it to the DOM, as it interfered with my game after I appended it.

- I had the Register page link to the Battleship page despite not passing the validation, as I had trouble using the window.location.href BOM property.

- Verifying that both passwords match was quite an ordeal because regex is an object, and objects are pass-by-value so are not easy to compare. I tried stringifying but that did not work. I ended up having to use the eyeball method.

- I fixed some of the previous problems like the endGame() not working by adding a timer to the endGame.

- I tried to vary how many ships I can put on the game board by asking for input, but that broke the game. I still don't know why adding a variable amount of ships would break the game.

- When the timer ran out, I got an error of "cannot read properties of undefined reading target" in the sinkShip() method. I'm not sure if it's because I stopped clicking because the death sound played or if the stoppage of the timer triggered that error. I'm afraid my knowledge at this point is not enough to fix this seemingly huge problem. I tried to debug, but after stepping over the function that creates the 49 divs, I kept ending up on an index.js page that isn't mine. So that was a major source of frustration.

- All in all this was a great project, and my new knowledge in the DOM, BOM ad-infinitum helped me immensely.

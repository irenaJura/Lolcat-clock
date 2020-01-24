### Lolcat clock with wake up, lunch, nap and party time!

This JavaScript clock shows you different cat images for morning, wake up time, lunch, nap, evening and even party time!

There are default times set for wake up, lunch and nap time, and the clickable party button.

THe user can set the times on these 3 dropdowns to make sure the images change according to the new set time.

Function updateTime sets up the clock and time-dependable conditions for different images and text message.

We call the updateTime on page load and then each second with setInterval function. 

We add the event listeners to each dropdown and listen for a change event. 

Then we take the value and reassign the variables with custom times.
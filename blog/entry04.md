# Entry 4
##### 03/17/24

## Content
Little by little more change is happening to my education about [kaboom](https://kaboomjs.com/). It has become significantly more advanced than what it was. I am working each week doing a little more each time and the little things add up and make a difference. Each time I work on this project I discover something new each time and it is quite amazing seeing it all add up and come together.


I recently found a new template that had **multiple levels** which is what I wanted to add to my game. The player would go through a portal and transfer to the next level, however the code of how that works exactly is still confusing to me but I intend on learning it very soon. This made the hard part done for me and this added a significant level of difficulty to the platformer game. The way that I added levels was by having multiple arrays of different levels. So instead of just this


```js
const LEVELS = [
   [
       "                        0                                                     @ ",
       "           --      ------------------------------------------------------------------ ",
       "                 $$   ",
       "         %    ===   ",
       "                                  ",
       "              ^^  > = @",
       "========================",
   ],
```
I made the array have multiple elements,


```js
const LEVELS = [
   [
       "                        0                                                     @ ",
       "           --      ------------------------------------------------------------------ ",
       "                 $$   ",
       "         %    ===   ",
       "                                  ",
       "              ^^  > = @",
       "========================",
   ],
   [
       "                          $",
       "                          $",
       "                          $",
       "                          $",
       "                          $",
       "           $$         =   $",
       "  %      ====         =   $",
       "                      =   $",
       "                      =    ",
       "       ^^      = >    =   @",
       "===========================",
   ],
   [
       "     $    $    $    $     $",
       "     $    $    $    $     $",
       "                           ",
       "                           ",
       "                           ",
       "                           ",
       "                           ",
       "     ^^^^>^^^^>^^^^>^^^^>^^^  @",
       "===============================",
   ],
```
This was a huge component of my game and now that I have it added, I add as many levels as I want to increase the difficulty as well as make the game last longer than just a minute or two if need be.


Something else that I have been working on is sound. Sound is definitely a factor when it comes to one playing a game. I was very skeptical about my ability to add it to my game. That was until I saw my friend Johnathan who was working on sound specifically. I saw on his screen that he made it happen and I immediately asked how it was done. He told me that I could download sounds by searching up [mp3 sounds](https://pixabay.com/sound-effects/search/mp3/). Once I downloaded sounds I was able to input them easily into the code as it was already part of the template. I originally commented out the code for the sounds because it wasn't downloaded into my ide, meaning no sound would play, and then the screen just would display anything. And when I commented out the code relating to sound, it all worked fine. So I added an mp3 sound and made it so that whenever the player collects a coin, the sound is played. I did that by,


```js
player.onCollide("coin", (c) => {
       destroy(c)
       play("coin", {
       detune: coinPitch,
        })
       coinPitch += 100
       coins += 1
       coinsLabel.text = coins
   })


```
The `play` code is what would activate the sound if that specific action occurred. Because of this, I am now able to add sounds for a variety of different actions in the future.


## EDP
Throughout the past month, I have worked towards step 5 of the **Engineering Design Process** which is **creating a prototype**. This prototype is a lot better then what I believed it would have been. Everytime I become worried that I won't be able to figure out how to complete the next steps but I have done so each time so far. Each time I have improved something regarding the prototype and there were changes that I planned to do a while back once I figured out kaboom. Now that the changes are actually made, it is nice to see the hard work paying off. The next step in my Engineering Design process is step 6 which is testing the prototype. There is still so much more I have to do to make this project perfect for me. I have more things to change, and add towards the platformer which I indeed intend to. I also need to figure out how I will include the requirements for this project such as including the learning of my software engineering class into this project. I will figure it out however it just might take a little more time.


## Skills
From my last entry, I have worked on the skills of **collaboration** as well as having a **growth mindset**. When I talked to Johnathan about how to add sounds, it was very helpful because he was there to help explain exactly how to do it. Asking others has been very useful as they always end up helping me in some way, even if their advice doesn't help exactly how I wanted it to, I still learned in some way. It's like the saying, **I have not failed, I have just found 10,000 ways that do not work**. I may not get the code on the first try, but I learned something each time I tried. Demonstrating how this project has assisted my growth mentally to keep me going.



[Previous](entry03.md) | [Next](entry05.md)

[Home](../README.md)
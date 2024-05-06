# Entry 5
##### 05/04/2024


## Content


I have officially completed my MVP of my freedom project meaning I have completed the mandatory parts of the project. The first thing I did since the last entry was changing the sprites. I wanted the game to feel a little more personalized so I changed the sprite images to become parts of games that I loved growing up. I found images online then I used a [background remover](https://www.remove.bg/). I changed the blocks to minecraft blocks and blocks from mario as well as changed the coins to dumplings.


The hardest part for me personally was trying to add my own Javascript. At this point I understood [kaboom](https://kaboomjs.com/) quite well and now that I had everything laid out it was time to add my own stuff to make the game original. For instance I added my own conditional. I had an idea to make it so that if a certain amount of dumplings (coins) were collected the player would go to the winning screen so I attempted to do this,


```js
if(coins=="50"){
   go("win")
}
```


However this attempt did not work and didn't do anything because coins were not defined. Then I remembered that there was already a bunch of code already there for when the player touches the dumplings(coins). So what I did was I added the conditional to it,


```js
player.onCollide("coin", (c) => {
       destroy(c)
       play("coin", {
       detune: coinPitch,
        })
       coinPitch += 100
       coins += 1
       coinsLabel.text = coins
       if(coins=="100"){
           go("win")
       }
   })
```


And this worked exactly how I wanted it to, which was perfect as I completed adding a little of my own Javascript to my game. Another way that I added my own javascript was how I added my own function. I wanted to do something with the size of the player and I wasn't sure exactly how I could make this happen. Then I remembered how I used `scale` to change the size of the sprites to fit the screen so all I had to do was add it into a function.


```js
function idk(){
       player.scale =.5
   }
   onKeyPress("p", idk)
```


This is a function I made so that every time the player presses on the key "p", Kung Fu panda's sprite will scale it's image larger however the only issue is once the player presses on the key, the sprite does become larger just like I wanted yet the player falls right through the floor and I am unsure as to why that occurs. To make that stop from happening I intend to put that as a part of the next steps of my plan which is to go beyond the MVP. I also intend on adding it so that the player could press on other keys to change the sprite to different sizes and not just one different size.


## EDP


In the **engineering design process** I am still currently in step 5 which is **creating the prototype** and step 6 which is **improving the prototype**. I have been working on finalizing the basic functions of the game. Adding my own functions and conditionals was relatively fun and enjoyable as it was my own ideas being added onto the game. The conditional to make the player win if a certain amount of dumplings were collected had its difficulty as was the making of the function to increase the scale size of the player yet I was able to get it done. The next steps in the Engineering Design Process of my Freedom Project is step 7 which is, improve as needed. I will soon ask for feedback from my peers to improve the game, see their point of view of what can be changed, and incorporate their ideas into my game.


## Skills


Two skills I have worked on since my last blog entry has been **logical resoning** and **embrassing failure**. While creating my function to change the sprite size I had to use logic for it so that if the player decides to click on the key, then something would haveto happen which is exactly what I put into code. When I failed to create my conditional for the player winning for collecting a certain amount of dumplings I didn't stop and try something different. I kept on trying and eventually after some time I figured it out and was able to make it work. It may not have been right away but I did figure it out.






[Previous](entry04.md) | [Next](entry06.md)


[Home](../README.md)


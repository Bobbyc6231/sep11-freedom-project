# Entry 3
##### 02/05/2024

## Content

It has now been a while that I have started messing around with[kaboom](https://kaboomjs.com/) and I have learned little by little and those little things are helping me make progress towards my final freedom project. Since my last blog entry I have created a small game where there is some obsticles, coins for the character to collect, and just some basic componants when it comes to my final game idea of having a character collect fruits to get to a new level.
The first thing I did was I took a basic template off of [Kaboom](https://kaboomjs.com/play?example=level) and put it into my ide. Then I tried to see what would happen when I actually tried to run it and it kept on giving me the error that the sprites are not defined. I then saw my friend and peer Leonel who is working on the same tool as I am and he was able to get his sprites running. I asked him how and he said he took a screenshot of the sprite he wanted and uploaded it to his ide. That made so much sense afterwards as I realized that the sprites I was trying to run didn't exist in my ide. So I took his advice and took screenshots of all the sprites I needed to add and it worked. I got the template working and now I had to customize it.
```js
"@  ^ $$",
"=======",
```
This was the template given to me. The @ is the player, the ^ is a spike, the $ is the coin and the ==== is the grass. Throughout tinkering I remembered to customize it, all I had to do was add more symboles because now the symbols are already defined because kaboom did it for us. so my final layout ended up being

```js
    "@   $                      ",
	" ==========================",
	"    $$$$$$$$$$$$  p        ",
	"                           ",
	" ==========================",
	"     $$               $$   ",
	"  $$.    ^     $$   ^      ",
	" =========================",
	"                          ",
	"                          ",
	"                          ",
	"                          ",
	"                          ",
	"                          ",
	"                          ",
	"                          ",
	"^^^^^^^^^^^^^^^^^^^^^^^^^^^^",
```
Everything was going according to plan and at this point I wanted to make the code a little more customized. So I tried thinking of ideas to make it a little more creative and I forgot how I came up with the idea, I think it was because I was thinking about my favorite animal but I came up with the idea that I could make this game based on Kung Fu panda. It sounds rediculous but this made the game more intreging to myself to make this happen. I then came up with the idea that I should make the player kung fu panda, and he has to collect his favorite foods to enter the next level. I really liked this idea so I stuck to it. I did a bunch of research how to make the background something else. And after coming up with the idea of wanting to make this game fit my personal likes I thought I could make the background minecraft, a game I grew up with and still enjoy to this day. I searched a bunch of different ways of how I could do that but a lot of them didn't work and I was about to give up on the idea. However I then found this [youtube](https://www.youtube.com/watch?v=hgReGsh5xVU) video. This video said to do this

```js
add([
	sprite("minecraft2", {width: width(), height: height()})
]);
```
What I did was added a screenshot of a minecraft background which would act as a sprite, then I would have to add it using the code shown above and this would make it so that the image would be the entire width and height of the screen. I was really proud of making this work because I tried for quite some time without any sucess.

There are a few things that I have planned that I want to complete. My next thing I have to do is understand how to create new levels. For my game I want there to be multiple levels to make it more interesting. I have tried to do this by taking templates from Kaboom howvere it doesn't work. What I need to do now is look up tutorials and follow step by step how it is done and then try to add my own personallity to the mix. In addition to that I would like to also try to find better sprites, better quality images and include more to make the game more pleasing to the eye and more enjoyable for the user by adding things such as score and sound towards different actions like when the splaer collects a coin or dies. The way I see it is the small things will add up towards making this a project that I am proud of. As of right now the game I have is still a very rough draft of the final. There is still plenty more to add and plenty more to figure out but currently I am satisfied with what I have completed in the school year regarding this project so far.

## EDP

In the Engineering Design Process I am currently in steps 4 which is plannning and 5 which is creating a prototype. For a while I have been working on this project and now that I actually have something down I need to plan what is next. I now have my plan of what I will attempt to do next and trying to do these things are a little more complicated that what I am currently doing. Before this I have been working on the small things, and yes there is more small things I want to work on however now I have to add a big thing and that is adding new levels. As of right now that will make or break my game. If I can't make more levels then I will have to figue out some other type of challenge to make my game more interesting. I believe that if I can't do that then I would have to make it so that the player just has a bigger playground on one single level but that is only a back up plan. All the work I have been doing, learning, watching videos, trying new things, reserching, has been towards creating this prototype. This has not been easy for me as every bit of what I have been doing is new to me but on the other hand I have ben enjoying it. The process is fun especially when I am able to make something that ends up working. My next step would be 6 and that is testing the prototype. Once I work on my product and it ends up being somewhat better I will then ask others to try what I have made so that I can get honest feedback as to how to improve my game but before that step comes I ave a lot to change, lot to think about and a lot to work on.

### Skills

Two main skills that I have been working on for this project has been time manegement and Embracing failure. Time manegemet has always been a hard thing for me but I have realized that I have changed and definetly become more organized. I have to turn in my progress to my teacher and I have always turned in something everytime I needed to and on time which I don't believe my younger self would do. Every week I have worked on something regarding the project wheather it was working on a part of my project, watching a video, or just reserching something, i have done that every single week. Embracing failure is another skill I have worked on. When I couldnt get how to change the background and tried a variety of different lines of code, I didn't quit on it. Yes it was discuriging however I kept on going and eventually I got it which was quite relieving. 

[Previous](entry02.md) | [Next](entry04.md)

[Home](../README.md)
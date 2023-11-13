# Entry 1
11/13/2023

## Content
In my school I am a part of a software engineering program which is taken throughout all 4 years of my high school career. Each year we learn a different language and this year in my junior year, we are learning javascript. I find it very interesting yet very hard at the same time. Javascript can be used to create a variety of things such as games, things related to music, databases, etc. In my software engineering class, each year we are tasked to create something we are interested in using what we learned throughout the year and a specific tool we would choose on our own to help us make it. This year, I came up with two ideas of things that I wanted to make. The first thing being a scheduling website that can help people with organizing what  they have going on in their lives. The reason this was my first choice was because I understand that life can get messy sometimes so having something that can help you organize it, can be very useful. The website would color code things, would have different sections for different things, etc. Yet completing this was much harder than I thought. When I first brought the idea up, my teacher Mr. Mueller had mentioned that I would need a database and use a tool like [firebase](https://firebase.google.com/) which is pretty hard to learn about. I understand my limits when it comes to coding and I know I am not capable of learning the complex code of a database mainly on my own. I didn’t want to challenge myself too much to where I wouldn’t be able to get anything done. So I went to my second idea, which is less complicated, but still fun in my opinion. This idea was to create a game where there are multiple levels and there is a character that has to collect fruits to get to the next level. I enjoy games like these so creating one intrigued me. After looking at the tools that could help me create this, I decided to stick with the tool called [kaboom](https://kaboomjs.com/#kaboom). I was looking at the movement of how kaboom works and was looking at this code 

```js
onKeyDown("left", () => {
	// .move() is provided by pos() component, move by pixels per second
	player.move(-SPEED, 0)
})

onKeyDown("right", () => {
	player.move(SPEED, 0)
})

onKeyDown("up", () => {
	player.move(0, -SPEED)
})

onKeyDown("down", () => {
	player.move(0, SPEED)
})
```
I realized that changing the speed argument to a -speed made the sprite move in the opposite driection, which gave me an idea. This made me want to create the challenge that if the user for instance presses the key to go right, it will make the sprite move left, and vis versa, the same going with up and down. 



## EDP
The engineering design process has multiple different parts/steps to it which helps people to complete the task of creating something. I am currently in the process of the first 3 steps which are defining the problem, researching the problem, and coming up with possible solutions. I am defining what I want to make, which throughout the beginning process has led me to wanting to create a game with multiple levels with challenges. I am also researching what I am going to do to be able to create this game while still making it interesting. And lastly I am coming up with possible ways for me to get these tasks done. In addition to finding a way for me  to be able to learn how to create an interesting working game, as I have close to no knowledge about where to begin or where to go from here. 


## Skills
One skill I have been working on from the timespan of the beginning of this project to now, is the skill of how to learn. The tool Kaboom is something I have never even heard of beforehand. It was completely new to me and now with a little bit of tinkering I understand it a little more however I just dipped my pinkie toe into the pool of kaboom and javascript and have an incredible amount of knowledge to obtain. Another skill I have been working on in this project is creativity. Something about this project that was told to us when creating games, is to come up with something that makes ours different from others. The idea to have the character or sprite in my game move in the opposite direction then what the user inputs is something I came up with on my own while tinkering with the code. Even though that idea has been used in games before, it isn’t common and I really like that idea of that challenge.






[Next](entry02.md)

[Home](../README.md)

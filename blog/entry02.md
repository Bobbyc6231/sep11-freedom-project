# Entry 2
##### 12/11/2023

### Content
In the past month or so, I have been tinkering and trying to learn more about (https://kaboomjs.com/)[Kaboom]. This has been definetly a new experience and something very different from what I am used to. I looked at a bunch of different componants of kaboom and tried different things to switch it up. For instance, one way I was tinkering was playing around with the width an height of the screen. I reaized that the change of `height` would effect how tall the screen would be and the `width` changed how wide the screen would be. The code below shows the screen being a square however after playing around with it such as changing the height to 100, the screen becomes more rectangle as the height is now half of how wide the screen is.

```js
kaboom({
	// without specifying "width" and "height", kaboom will size to the container (document.body by default)
	width: 200,
	height: 200,
	// "stretch" stretches the defined width and height to fullscreen
	// stretch: true,
	// "letterbox" makes stretching keeps aspect ratio (leaves black bars on empty spaces), have no effect without "stretch"
	letterbox: true,
})
```
Another example of my tinkering has been with the `isStatic` element. In kaboom, when you go to the [collision section](https://kaboomjs.com/play?example=collision), it has a sprite that you can move around using the keyboard and there are 3 obsticles on the screen, there is ghosts, a grass block and a steel block. Once the sprite touches the ghosts, the ghosts disapear. When the sprite presses against the steel block, it moves, and once the sprite pushes against the grass black, it doesn't move. I was wondering what made it so that the steel block moved, but the grass block not. I then fund out that `isStatic` is responsible for that because I then added that element to the steel block and it didn't move when I pushed the sprite against it.


```js
add([
	sprite("grass"),
	pos(center()),
	area(),
	body({ isStatic: true }),
	"grass",
])

add([
	sprite("steel"),
	pos(100, 200),
	area(),
	body({ isStatic: true }),
	"steel",
])

```

### Engineering Design Process
In the Engineering Design Process, I am currently in steps 2 and 3 which is *research* and *brainstorming*. Throughout the time of my tinkering I have been researching different things and trying new things that I could potentially add to my future game. Researching hasn't been as bad as I first thought it would be. For me in this whole process so far, I think that the hardest part has been the beginning when I was first getting started because I didn't have any clue where to begin. When I first was lost, I started to do the small things, changing small bits of code and whenever it would work the way I thought it might, I would genuinely be shocked. While changing different things I would also be brainstorming which parts I would like to add to my game and what I don't necessarlly need. An example of this was when I was tinkering with designing the levels, I knew I would need to have that in my future game, yet when I was tinkering with the `offscreen` code I knew I wasn't going to use it in my freedom project.


### Skills
Two skills I've worked on during the last few weeks is practicing *how to learn* and better *time management*. I have been learning many different aspects about *kaboom* all on my own. I am not used to learning without guidence and this is one of the first times I am doing so. Practicing those skills by trying it on my own was educational and in a small way kind of fun. Trying something new and whenever it would work would make me feel a small amount of satisfaction and a little prould of myself. Last year when I was doing my freedom project, I did not manage my time well at all and did not practice with my tool when I should have. This year has been different and I have been keeping up with practicing with my tool when I should be. In class whenever it is time to practice, I do so and I actually make a small amount of progress. It hasn't been the easiest thing I have ever done however I have been trying harder and putting more effort then I have last year.



[Previous](entry01.md) | [Next](entry03.md)

[Home](../README.md)

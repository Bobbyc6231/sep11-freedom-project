# Tool Learning Log

Tool: Kaboom

Project: A game where a sprite has to collect fruits while avoiding obstacles to get to the next level



### 10/23/2023
https://jsbin.com/neqazijeyo/edit?html,output 
- ^ tried to put it in jsbin
-  Changed the positioning of the text by changing the coordinates

### 11/06/2023
- worked with the code on kaboom.js, worked with movement
- changed speed (speed) to negative speed (-speed) which made it move in opposite direction
- Made me come up with the idea to create a challenge where you have to press the opposite key to go in the direction you want 

### 11/08/23
- Worked with the gravity code
- Learned the higher the number, the less time it takes for the sprite to fall
- the smaller the number, the less gravity that is applied to the sprite and it kinda floats

### 11/09/23
- Played with Camera learned how to alter the camera Scale to become wider and closer by changing the `camScale()` (the higher the number, the more zoomed in it is, the smaller the number, the more zoomed out it is)
```js
player.onCollide("coin", (coin) => {
	destroy(coin)
	play("score")
	score++
	// Zoooom in!
	camScale(0.5)
})
```
### 11/11/23
- Played with tiles
```js
const level = addLevel([
	// Design the level layout with symbols
	"@ ^^^ $$",
	"=======",
], {
	// The size of each grid
	tileWidth: 200,
	tileHeight: 64,
	// The position of the top left block
	pos: vec2(100, 200),
	// Define what each symbol means (in components)
	tiles: {
		"@": () => [
			sprite("bean"),
			area(),
			body(),
			anchor("bot"),
			"player",
		],
		"=": () => [
			sprite("grass"),
			area(),
			body({ isStatic: true }),
			anchor("bot"),
		],
		"$": () => [
			sprite("coin"),
			area(),
			anchor("bot"),
			"coin",
		],
		"^": () => [
			sprite("spike"),
			area(),
			anchor("bot"),
			"danger",
		],
	},
})


```
- The symbols actually have a reason of being there, the symbols are defined in such that is is defined, and the symbols then put the sprites in the order of which it is called.
- Added more symbols to the level which added more objects to the level



- Putting assets
```js
// Load assets
loadSprite("bean", "/sprites/bean.png")
loadSprite("ghosty", "/sprites/ghosty.png")
loadSprite("grass", "/sprites/grass.png")
loadSprite("steel", "/sprites/steel.png")
```
- Have to give the sprite a name and then have to go into a folder and select the image

### 11/14/2023
- Played around with the timer, changed it to a higher time leading to it being easier to get a higher score.

```js
let timeLeft = 30

	const timer = add([
		anchor("topright"),
		pos(width() - 24, 24),
		text(timeLeft),
	])

	onUpdate(() => {
		timeLeft -= dt()
		if (timeLeft <= 0) {
			go("win", score.value)
		}
		timer.text = timeLeft.toFixed(2)
	})
```
### 11/16/23

- Played with the width and height of the screen
- Changed it which made screen larger which made me realize I like that in a game and will make my future game with a larger screen and smaller obsticles
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
### 11/17/23

- Learned how to create multiple levels using symbols, it's the same as setting a regular level, however all you have to do is add another set of symbols within another set of brackets. (still confused how to get from one level to the other)
```js
const LEVELS = [
	[
		"    0       ",
		"   --       ",
		"       $$   ",
		" %    ===   ",
		"            ",
		"   ^^  > = @",
		"============",
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
		" ^^^^>^^^^>^^^^>^^^^>^^^^^@",
		"===========================",
	],
]
```
- This will come in handy as I wanted to create multiple levels (still debating on multiple easy levels or 1 hard one)



  








<!-- 
* Links you used today (websites, videos, etc)
* Things you tried, progress you made, etc
* Challenges, a-ha moments, etc
* Questions you still have
* What you're going to try next
-->

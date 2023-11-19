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


- Putting assets
```js
// Load assets
loadSprite("bean", "/sprites/bean.png")
loadSprite("ghosty", "/sprites/ghosty.png")
loadSprite("grass", "/sprites/grass.png")
loadSprite("steel", "/sprites/steel.png")
```
- Have to give the sprite a name and then have to go into a folder and select the image



  








<!-- 
* Links you used today (websites, videos, etc)
* Things you tried, progress you made, etc
* Challenges, a-ha moments, etc
* Questions you still have
* What you're going to try next
-->

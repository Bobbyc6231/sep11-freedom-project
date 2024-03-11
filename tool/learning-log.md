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

### 11/18/23
- Played around with the score, changed how much the score increased when the sprite collided with the heart, made me think of if the player collides with a different sprite, it'll minus the score

```js
player.onCollide("heart", (heart) => {
		addKaboom(player.pos)
		score += 10
		destroy(heart)
		scoreLabel.text = score
		burp()
		shake(12)
	})

```

### 11/20/23
- Leaned about `isStatic`. Added it to a different sprite so that it doesn't move (origionally just on the grass sprite, now it it also added onto the steel sprite)

```js
add([
	sprite("grass"),
	pos(center()),
	area(),
	// This game object also has isStatic, so our player won't be able to move pass this
	body({ isStatic: true }),
	"grass",
])

add([
	sprite("steel"),
	pos(100, 200),
	area(),
	// This will not be static, but have a big mass that's hard to push over
	body({ isStatic: true }),
	"steel",
])

```

- Practiced with `.isHovering`, pretty simple as you just add it to whatever sprite you want, and them add a action you want to happen as the player hovers above the sprite.
```js
player.onUpdate(() => {
	// .isHovering() is provided by area() component, which returns a boolean of if the object is currently being hovered on
	if (player.isHovering()) {
		player.color = rgb(35, 100, 255)
	} else {
		player.color = rgb()
	}
}
```
### 11/24/23

- I played in the playground for so long not realising that the [kaboom](https://kaboomjs.com/#area) website has all the componants listed out and it is kind of like bootstrap but for javascript as it has every componant lised out and all you have to do is add it to whatever project you are using

- learned about `offscreen` things however I don't think I will be using that in my game as I don't know how it would be used. However low chance but I could use that as a way to collect a easter egg fruit in my game.
```js
add([
    pos(player.pos),
    sprite("bullet"),
    offscreen({ destroy: true }),
    "projectile",
])
```

### 11/26/23

- Took a look at the [discord](https://discord.com/channels/883781994583056384/1047066099587502110) that Kaboom has and realised it has a help channel with other people that have had issues in the past so I can learn from other people's mistakes which could be useful if I don't have anyone else available.

- Get to see other peoples, bugs, projects and hardships they have had/made

### 12/01/23

1) Took a look at the `anchor` element
```js
add([
    rect(40, 10),
    rotate(45),
    anchor("center"),
])
```
- Changed the ancor to be all around the screen
- Learned ancor can be used for a variety of differnt objects

2) Explored how `Drag` elements can work

```js
bean.onDrag(() => {
		// Remove the object and re-add it, so it'll be drawn on top
		readd(bean)
	})
```
-Understood how it intakes whatever sprite the user clicks and removes it from wherever the location is and adds it toward the front of the screen

3) played around with the maze they made and the `onclick` code they used

```js
onClick(() => {
	const pos = mousePos()
	bean.setTarget(vec2(
		Math.floor(pos.x / TILE_WIDTH) * TILE_WIDTH + TILE_WIDTH / 2,
		Math.floor(pos.y / TILE_HEIGHT) * TILE_HEIGHT + TILE_HEIGHT / 2,
	))
})
```
- Still confused on the math that was used to make the sprite move wherever the user clicked

### 12/06/23
- First time added stuff into my ide and trying a project from scratch
- Added a sprite and got it being able to move
- tried many different componants of kaboom however I kept on getting the error that a png is not defined
```js
kaboom()

// define gravity
setGravity(0)

// load a default sprite
loadBean()

// add character to screen, from a list of components
const player = add([
    sprite("bean"),  // renders as a sprite
    pos(120, 80),    // position in world
    area(),          // has a collider
    body(),          // responds to physics and gravity
])

const SPEED = 320

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
- Pretty simple however it is satisfying to put what I have learned into an actual practice project
- Also tried adding different types of games into my ide such as the pong game (learned that it is easy to bring the kaboom code into my ide, however for certain games and componants I still need to find out where to find the pngs from)

```js
kaboom({
	background: [ 255, 255, 128 ],
})

// add paddles
add([
	pos(40, 0),
	rect(20, 80),
	outline(4),
	anchor("center"),
	area(),
	"paddle",
])

add([
	pos(width() - 40, 0),
	rect(20, 80),
	outline(4),
	anchor("center"),
	area(),
	"paddle",
])

// move paddles with mouse
onUpdate("paddle", (p) => {
	p.pos.y = mousePos().y
})

// score counter
let score = 0

add([
	text(score),
	pos(center()),
	anchor("center"),
	z(50),
	{ update() { this.text = score }},
])

// ball
let speed = 480

const ball = add([
	pos(center()),
	circle(16),
	outline(4),
	area({ shape: new Rect(vec2(-16), 32, 32) }),
	{ vel: Vec2.fromAngle(rand(-20, 20)) },
])

// move ball, bounce it when touche horizontal edges, respawn when touch vertical edges
ball.onUpdate(() => {
	ball.move(ball.vel.scale(speed))
	if (ball.pos.x < 0 || ball.pos.x > width()) {
		score = 0
		ball.pos = center()
		ball.vel = Vec2.fromAngle(rand(-20, 20))
		speed = 320
	}
	if (ball.pos.y < 0 || ball.pos.y > height()) {
		ball.vel.y = -ball.vel.y
	}
})

// bounce when touch paddle
ball.onCollide("paddle", (p) => {
	speed += 60
	ball.vel = Vec2.fromAngle(ball.pos.angle(p.pos))
	score++
})
```

### 12/30/23

- I used a template from kaboom.js
- I was able to use the code however I had to upload my own sprites
- I now need to find where I could find better images of the sprites instead of taking screenshots of them and uploading them
([code to the example](../index.html))

- Once I used the template, I changed it up even more by adding more obsticles and completly customizing the game to my liking
 (added more land, obsticles, and coins)

- Completed my goal for what I wanted to do over Christmas break/realizing I am getting closer to creating my Freedom Project

### 01/07/23

- Wanted to cusomixe my game and make it a little more intreging to the user
- Changed the background to be different colors and just played around with the background (changed up the rbg numbers)
- I want to figure out how to change the background to become a specific image of my choosing
- Changed my sprite to Kung fu panda instead of a bean

```js
kaboom({
	background: [ 55, 25, 128 ],
})
```

- I want to figure out how to add smaller things to make my game more interesting such as music (have to do more reserach on adding sounds and music)
- Other things to potentially add(Easter eggs, two players)
- Change it so that Kung fu Panda has to collect the food that he loves to get to the next level!!!!!!!!


### 01/15/24

- Tried `set size` to resize my sprite and it didn't work
- Did research about how to resize however the only solution was to take a new image
- I was able to choose a smaller image which was fine however I still need to find out how to shrink the image just to make it a little more easy to customize the images/sprites


### 01/22/24

- I finally added a custom background by creating a sprite then setting that sprite the size of the entire scren so it looks like a background image
- Figured this out with this video (https://www.youtube.com/watch?v=hgReGsh5xVU)
- Added the difficulty of reversing the controls
- I put spikes below the screen that the usar can't see so that when a user falls off they will respawn without having to reset the page

### 01/28/24
- I tried to create multiple levels using portals to travel to a diffierent levels (DID NOT WORK)
- Attempted to use the templates from kaboom.js but something is missing that is making my website just not appear at all

### 02/04/24
-  I added
```js
player.onPhysicsResolve(() => {
		// Set the viewport center to player.pos
		camPos(player.pos)
	})
```
-  this made the camera position it so the character is always in the center of the screen wherever you move which I really like
-  Only issue with this is it made the custom background to be only a small part of the screen and now I have to figure out how to always make it the back of the screen

- I attempted to add
```js
player.onCollide("apple", (a) => {
		destroy(a)
		// as we defined in the big() component
		player.biggify(3)
		hasApple = false
		play("powerup")
	})
```
- I attempted to change the size of the player when it hits a coin however nothing was working
- I tried to remove each line one by one that was causing the entire screen to shut down and become white but couldn't figure it out
- I believe it is because of either the `player.biggify` or `play("powerup")`

### 02/24/2024

- I started from scratch a whole new project and I followed a template
- Put in a bunch of new sprites that follow the exact formula for the template
- However I found the issue of adding sounds because without the sounds some aspects wouldn't work such as hitting a block wouldn't make the apple appear
- I removed every aspect that played a sound and everything regarding how the game is supposed to work, works fine
- I attempted to create and call a function to shrink the sprite but nothing worked
```js
smal() {
			destScale = .5
			timer = 0
			isBig = true
		},
```


- (Goal)Figure out how to shrink a sprite


### 02/26/24

- Ask Mr.Mueller how to shrink sprite
- `scale(.5),` would shrink it but the function `big()` was making it to it's original size
- All I had to do was remove the `big()` function however this made it so that the apple didn't increase the size but just makes the `biggify()` function not work
```js
biggify(time) {
			destScale = 1
			timer = time
			isBig = true
		},
	}
```
```js
player.onCollide("apple", (a) => {
		destroy(a)
		// player.biggify(3)
		hasApple = false
		play("powerup")
	})
```
- I attempted to comment out each line to find out which was causing the screen to black out and it was the biggify as in the console it says it is no longer defined
- (Must ask around to see why it is no longer defined)



### 03/04/2024

- I figured out how to add sound to my code
- I saw my friend Johnathan using sound and I asked him how it was done and he told me how to upload mp3 sounds
- This is huge because this will make it more kung fu panda related
```js
loadSound("coin", "/examples/sounds/score.mp3")
```

- I still need to figure out the sizing issue however This is a huge step in the right direction


<!--
>>>>>>> 2493ab47781e40839cd9a255c5622d2e60742569
* Links you used today (websites, videos, etc)
* Things you tried, progress you made, etc
* Challenges, a-ha moments, etc
* Questions you still have
* What you're going to try next
-->

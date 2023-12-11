// import kaboom from "https://unpkg.com/kaboom@3000.0.1/dist/kaboom.mjs";

// Simple dialogues

kaboom({
	background: [ 255, 209, 253 ],
})

loadSprite("bean", "/sprites/bean.png")
loadSprite("mark", "/sprites/mark.png")

// Define the dialogue data
const dialogs = [
	[ "mark", "hi my butterfly" ],
	[ "mark", "i love u" ],
	[ "mark", "you love me? pretty baby" ],
	[ "mark", "mark is a stupid" ],
	[ "mark", "he did not know how to take care of you..." ],
	[ "mark", "you don't know me ..." ],
	[ "mark", "what! mark???" ],
	[ "mark", "oh...hi " ],
]

let curDialog = 0

// Text bubble
const textbox = add([
	rect(width() - 200, 120, { radius: 32 }),
	anchor("center"),
	pos(center().x, height() - 100),
	outline(4),
])

// Text
const txt = add([
	text("", { size: 32, width: width() - 230, align: "center" }),
	pos(textbox.pos),
	anchor("center"),
	color(0, 0, 0),
])

// Character avatar
const avatar = add([
	sprite("bean"),
	scale(5),
	anchor("center"),
	pos(center().sub(0, 50)),
])

onKeyPress("space", () => {
	// Cycle through the dialogs
	curDialog = (curDialog + 1) % dialogs.length
	updateDialog()
})

// Update the on screen sprite & text
function updateDialog() {

	const [ char, dialog ] = dialogs[curDialog]

	// Use a new sprite component to replace the old one
	avatar.use(sprite(char))
	// Update the dialog text
	txt.text = dialog

}

updateDialog()

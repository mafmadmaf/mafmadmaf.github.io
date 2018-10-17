var x = 1
var y = 1
var easing = 0.05

function setup() {
  createCanvas(900, 900)
  background("pink")
}

function draw() {
  // background("pink")
  var targetX = mouseX
  var targetY = mouseY

  x = x + (targetX - x) * easing
  y = y + (targetY - y) * easing

  if (targetX - x > targetY - y) {
    var d = targetX - x
  } else {
    var d = targetY - y
  }

  ellipse(x, y, d, d)

  if (mouseIsPressed) {
    fill("Olive")
  } else {
    fill(255)
  }
}

// function mousePressed() {
//   fill("Olive")
// }

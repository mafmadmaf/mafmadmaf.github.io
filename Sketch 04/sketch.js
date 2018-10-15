function setup() {
  createCanvas(500, 500)
  background(244, 255, 253)
  strokeWeight(1)
  frameRate(120)
}

function draw() {
  //   background("Pink")
  for (var i = 0; i <= 500; i = i + 1) {
    var r = random(0, 500) // random!!
    var t = random(0, 500)
    var x = random(0, 500)
    var y = random(0, 500)

    stroke(237, 37, 78, x)
    line(x, y, i, r)
    stroke(249, 220, 92, y)
    line(x, y, i, t)
    stroke(1, 25, 54, x)
    line(x, y, r, i)
    stroke(70, 83, 98, y)
    line(x, y, t, i)
  }
  //   stroke(239, 123, 69)
  //   fill(239, 123, 69)
  //   ellipse(mouseX, mouseY, 2, 2)

  stroke(255, 0)
  fill(255)
  ellipse(width / 2, height / 2, 380, 380)
}

// function mousePressed() {
//   stroke(255, 0)
//   fill(255)
//   ellipse(width / 2, height / 2, 380, 380)
// }

function setup() {
  createCanvas(500, 500)
  noStroke()
}

function draw() {
  //   background("Pink")
  for (var y = 0; y <= height; y = y + 40) {
    for (var x = 0; x <= width; x = x + 40) {
      fill(255, 12, 255, 1)
      ellipse(x, y, 40, 40)
    }
  }
  //   fill("Teal")
  //   textSize(100)
  //   textAlign(CENTER)
  //   text("Eric", width / 2, height / 2)
  //   text("Liang", width / 2, height / 2 + 80)

  for (var y = 80; y <= 440; y = y + 40) {
    fill(255, 12, 255, 3)
    ellipse(240, y, 40, 40)
  } // middle 1

  for (var y = 160; y <= 320; y = y + 40) {
    fill(255, 12, 255, 3)
    ellipse(120, y, 40, 40)
  } // left 1
  for (var y = 160; y <= 320; y = y + 40) {
    fill(255, 12, 255, 3)
    ellipse(360, y, 40, 40)
  } // right 1

  for (var x = 120; x <= 360; x = x + 40) {
    fill(255, 12, 255, 3)
    ellipse(x, 160, 40, 40)
  } // up 1
  for (var x = 120; x <= 360; x = x + 40) {
    fill(255, 12, 255, 3)
    ellipse(x, 320, 40, 40)
  } // down 1

  var a = random(0, 500)
  var b = random(0, 500)
  fill(255)
  ellipse(a * 2, b, 40, 40)
  fill(211, 212, 233)
  ellipse(a, b * 3, 40, 40)
  fill("Lightblue")
  ellipse(a / 2, b, 40, 40)
}

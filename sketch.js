function setup() {
  createCanvas(500, 500)
  noStroke()
}

function draw() {
  background("Pink")
  for (var y = 0; y <= height; y = y + 40) {
    for (var x = 0; x <= width; x = x + 40) {
      fill("Olive")
      ellipse(x, y, 40, 40)
    }
  }
  //   fill("Teal")
  //   textSize(100)
  //   textAlign(CENTER)
  //   text("Eric", width / 2, height / 2)
  //   text("Liang", width / 2, height / 2 + 80)

  for (var y = 80; y <= 440; y = y + 40) {
    fill(0)
    ellipse(240, y, 40, 40)
  } // middle 1

  for (var y = 160; y <= 320; y = y + 40) {
    fill(0)
    ellipse(120, y, 40, 40)
  } // left 1
  for (var y = 160; y <= 320; y = y + 40) {
    fill(0)
    ellipse(360, y, 40, 40)
  } // right 1

  for (var x = 120; x <= 360; x = x + 40) {
    fill(0)
    ellipse(x, 160, 40, 40)
  } // up 1
  for (var x = 120; x <= 360; x = x + 40) {
    fill(0)
    ellipse(x, 320, 40, 40)
  } // down 1

  var a = random(0, 10)
  var b = random(0, 10)
  fill(255)
  ellipse(a * 40, b * 40, 40, 40)
  fill("Yellow")
  ellipse(a * 50, b * 20, 40, 40)
  fill("Lightblue")
  ellipse(a * 60, b * 60, 40, 40)
}

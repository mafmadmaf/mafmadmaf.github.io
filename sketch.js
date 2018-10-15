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
  fill("Teal")
  textSize(100)
  textAlign(CENTER)
  text("Eric", width / 2, height / 2)
  text("Liang", width / 2, height / 2 + 80)

  var a = random(0, 10)
  var b = random(0, 10)
  fill(255)
  ellipse(a * 40, b * 40, 40, 40)
  fill("Yellow")
  ellipse(a * 50, b * 20, 40, 40)
  fill("Lightblue")
  ellipse(a * 60, b * 60, 40, 40)
}

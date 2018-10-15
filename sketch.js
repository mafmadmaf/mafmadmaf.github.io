function setup() {
  createCanvas(300, 300)
  background(0)
  noSmooth()
}

function draw() {
  //   background(0)
  for (var y = 20; y <= height - 20; y += 10) {
    // height-20 -> in the CENTER
    for (var x = 20; x <= width - 20; x += 10) {
      // Draw a line to the center of the display
      stroke(244, 96, 54, 150)
      var a = random(20, height - 20)
      var b = random(20, width - 20)
      line(x, y, a, b)
      noStroke()
      fill(255)
      ellipse(x, y, 4, 4)
    }
  }
  // arc(90, 250, 80, 80, 0, HALF_PI)
  arc(width / 2, height / 2, 80, 80, 0, PI + HALF_PI)
  //   arc(290, 250, 80, 80, PI, TWO_PI + HALF_PI)
  // arc(390, 250, 80, 80, QUARTER_PI, PI + QUARTER_PI)

  if (frameCount % 15 === 0) {
    // frameCount 除以 60 的余数，为 0 -> 被整除
    clear()
    background(0)
  }
  if (frameCount % 60 === 0) {
    // frameCount 除以 60 的余数，为 0 -> 被整除
    ellipse(0, 0, 300, 300)
    ellipse(0, 300, 300, 300)
    ellipse(300, 0, 300, 300)
    ellipse(300, 300, 300, 300)
  }
}

function setup() {
  createCanvas(500, 500)
  background("Pink")
  strokeWeight(2)
}

function draw() {
  for (var i = 20; i <= 310; i = i + 10) {
    var r = random(0, 500)
    stroke("Teal")
    line(r, 20, i + i / 2, 250)
    line(i + i / 2, 250, r, 480)
    var e = random(0, 500)
    stroke("Pink")
    line(e, 20, i + i / 2, 250)
    line(i + i / 2, 250, e, 480)
    var l = random(0, 500)
    stroke(0)
    line(l, 20, i + i / 2, 250)
    line(i + i / 2, 250, l, 480)

    textSize(90)
    textStyle(BOLD)
    text("Hello,", width / 2, height / 2)
    text("Eric!", width / 2, height / 2 + 80)
  }
}

var y = 60
var d = 80
var fontRegular
var fonrItalic
// set "var" for different fonts

// function preload() {
// fontRegular = loadFont("DankMono-Regular.ttf")
// fonts that not included in the system must use "preload() & loadFont()"
// plased the font-file in the SAME doc with the .html
// }

function setup() {
  createCanvas(480, 480)
  background("Olive")
  frameRate(60)
  textSize(90)
  // textFont(fontRegular)
  textStyle(ITALIC)
  textAlign(CENTER)
  // strokeWeight(100)
}

function draw() {
  // background("Olive")
  noStroke()
  // strokeWeight(1)
  // stroke(100, 150, 200, 200)
  text(sin(frameCount), width / 2, height / 2 + 30)
  // strokeWeight(50)
  ellipse(
    sin(frameCount) * 200 + width / 2,
    height / 2,
    sin(frameCount) * 150,
    sin(frameCount) * 150
  )
  // stroke(2, 2, 2, 222)
  // strokeWeight(2)
  // ellipse(
  //   sin(frameCount) * 200 + width / 2,
  //   height / 2,
  //   sin(frameCount) * 2,
  //   sin(frameCount) * 300
  // )
  stroke(100, 150, 200, 200)
  // strokeWeight(300)
  ellipse(
    width / 2,
    sin(frameCount) * 200 + height / 2,
    sin(frameCount) * 50,
    sin(frameCount) * 2
  )
  for (var i = 20; i < 400; i = i + 60) {
    stroke(200, 150, 160, 80)
    strokeWeight(80)
    //strokeWeight(20)
    line(i, 400, i + 60, 80)
  }
}

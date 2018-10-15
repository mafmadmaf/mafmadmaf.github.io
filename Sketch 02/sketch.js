function setup() {
  createCanvas(480, 120)
  // background(241, 81, 82, 200) // 
  colorMode(RGB,255)
  noStroke()
}

function draw() {
  clear() // 这个指令使得 draw 每次清除上一次的画面，这样 alpha 就不会叠加
  background(241, 81, 82, 1)
  fill(244, 216, 205, 100)
  ellipse(132, 82, 200, 200)
  fill(30, 85, 92, 180)
  ellipse(228, -16, 200, 200)
  fill(237, 177, 131, 150)
  ellipse(268, 118, 200, 200)
  fill(58, 46, 57, 200)
  // beginShape()
  // vertex(180, 82)
  // vertex(207, 36)
  // vertex(214, 63)
  // vertex(407, 11)
  // vertex(412, 30)
  // vertex(219, 82)
  // vertex(226, 109)
  // endShape(CLOSE)
}


// function setup() {
//   createCanvas(480, 120);
//   noStroke();
//  }
//  function draw() {
//   background(204, 226, 225); // Light blue color
//   fill(255, 0, 0, 160); // Red color
//   ellipse(132, 82, 200, 200); // Red circle
//   fill(0, 255, 0, 160); // Green color
//   ellipse(228, -16, 200, 200); // Green circle
//   fill(0, 0, 255, 160); // Blue color
//   ellipse(268, 118, 200, 200); // Blue circle
//  }
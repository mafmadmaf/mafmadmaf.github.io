var blueValue

function setup() {
  createCanvas(480, 480);
  blueValue = blue(color(120, 123, 88))
}

function draw() {
  blueValue = blueValue-1;
  if (blueValue == 0){
  blueValue = blueValue + 255
  }
  print(blueValue);
  background(blueValue +200, blueValue +60, blueValue +120);
  fill(blueValue +50, blueValue +100, blueValue +20);
  stroke("teal");
  line(20, 50, 420, 110);
  line(50, 100, 300, 12);
  triangle(20, 20, 50, 50, 100, 30);
  rect(320, 20, 100, 40);
  fill("gold")
  ellipse(300,300,400,400)
  
  

}
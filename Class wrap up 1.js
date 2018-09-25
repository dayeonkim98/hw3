function setup() {
  createCanvas(400, 400);
  background(0, 20, 80);
}

var fromX;
var fromY;
var toX;
var toY;
var step = 2.5;

function draw() {
  // draw background that fades stars slowly
  background(0, 20, 80, 1);
  
  // draw stars
  if (random() > 0.8) {
    stroke(150);
    fill(255, 204, 0)
    point(random(width), random(height));
  }
  
  
  
  
  // create shooting stars
  if (random() > 0.5 && step >= 2.0) {
    fromX = random(width);
    fromY = random(height/5);
    toX = random(fromX+10, width);
    toY = random(fromY+10, height/2);
    step = 0;
  }
  
  // draw shooting stars
  if (step < 2.5) {
    // fade background
    let nextStep = step + 0.02;
    strokeWeight(10);
    stroke(0, 20, 80, 20);
    line(fromX, fromY, toX, toY);
    strokeWeight(random(2, 5));
    // draw star
    if (step < 1) {
      stroke(255, (1-step) * 200);
      line(lerp(fromX, toX, step),     lerp(fromY, toY, step),
           lerp(fromX, toX, nextStep), lerp(fromY, toY, nextStep));
    }
    step = nextStep;
  }
  
  fill(255, 204, 0)
  noStroke();
  ellipse(320, 80, 100, 100)
  
  // draw ground
  noStroke();
  fill(0, 10, 20);
  rect(0, height*0.6, width, height);
  
  // draw lake
  noStroke();
  fill(0, 20, 60);
  ellipse(0, height, width*2.5, height*0.75);
}

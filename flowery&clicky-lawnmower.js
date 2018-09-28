function setup() {
  createCanvas(400, 200);
  colorMode(HSB, 360, 100, 100, 100);
}

var x = 0;
var h = 10;

 // grasssss	
function draw() {
  stroke(random(60, 90), 80, 90);
  line(x, height-10, x + random(-10, 10), height-10-random(h));
  
  x = x + 10;
  
  if (x > width) {
    x = random(10);
    h = h + 5;
  }
 
 // press for lownmower! 
   if (mouseIsPressed) {
    
    noStroke();
    fill(255);
    rect(-1, -1, width+2, height-15);
    h = 10;
  }
  
 // flowers!
  if (h > 40) {
    if (random() > 0.9) {
    	noStroke();
    	fill(random(250, 320), random(50, 150), 150, 30);
   	ellipse(random(width), height-10-(h), random(5, 10));
    }  
  }  
   
  noStroke();
  fill(40, 100, 60);
  rect(0, height-10, width, 10);
}

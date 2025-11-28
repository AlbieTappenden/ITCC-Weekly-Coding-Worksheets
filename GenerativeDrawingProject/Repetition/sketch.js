
function setup()
{
	createCanvas(700, 700);
	angleMode(DEGREES);
	rectMode(CENTER);
	background("black");
    console.log("Repetition Canvas created successfully");
}

function draw()
{
  translate(width/2, height/2);
  for (let squareSize = 0; squareSize < 20; squareSize = squareSize + 1 )
  {
    for (let angle = 0; angle < 100; angle += 0.5)
    {
      stroke("cyan");
      strokeWeight(0.4);
      noFill(0);
      rotate(angle);
      scale(0.99)
      ellipse(0,0, width, height); 
    }
  }
}
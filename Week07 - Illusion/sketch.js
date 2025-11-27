
function setup()
{
	createCanvas(700, 700);

	angleMode(DEGREES);
  // using degrees rather than the default radians
	rectMode(CENTER);
  // draw from the centre of the rectangle rather than the default top left corner
	background("green");
  // black background
}

function draw()
{
  translate(width/2, height/2);
  // change origin point of square to the middle of the canvas

  for (let squareSize = 0; squareSize < 20; squareSize = squareSize + 1 )
  // squareSize is 0. is squareSize bigger than 20?, if not = squareSize + 1
  {
    for (let angle = 0; angle < 20; angle += 0.5)
    // angle is 0. is angle greater than 20?, if not = angle + 0.5
    {

      stroke("yellow");
      strokeWeight(1);
      noFill(0);
      rotate(angle);
      scale(0.9)
      rect(0,0, width, height); 
    }
  }
}
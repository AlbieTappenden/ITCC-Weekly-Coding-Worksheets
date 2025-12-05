





let angle = 0;

function setup()
{
	createCanvas(1000,1000);
	angleMode(DEGREES);
}

function draw()
{
	background("grey");
	
	translate(width/2, height/2);


	for (let a = 0; a < 360; a += 22.5)
		{
			
			rotate(a)
			push();
				for(let i = 0; i < 100; i++)
				{
					fill("white");
					scale(0.95);
					rotate(angle);
					ellipse(width, 0, 120);
				}
			pop();

			push();
				for(let i = 0; i < 100; i++)
				{
					fill("black");
					scale(0.95);
					rotate(-angle);
					ellipse(width, 0, 120);
				}
			pop();
		}

	angle += 0.01;

}






























// function setup()
// {
// 	createCanvas(700, 700);

// 	angleMode(DEGREES);
//   // using degrees rather than the default radians
// 	rectMode(CENTER);
//   // draw from the centre of the rectangle rather than the default top left corner
// 	background("green");
//   // black background
// }

// function draw()
// {
//   translate(width/2, height/2);
//   // change origin point of square to the middle of the canvas

//   for (let squareSize = 0; squareSize < 20; squareSize = squareSize + 1 )
//   // squareSize is 0. is squareSize bigger than 20?, if not = squareSize + 1
//   {
//     for (let angle = 0; angle < 20; angle += 0.5)
//     // angle is 0. is angle greater than 20?, if not = angle + 0.5
//     {

//       stroke("yellow");
//       strokeWeight(1);
//       noFill(0);
//       rotate(angle);
//       scale(0.9)
//       rect(0,0, width, height); 
//     }
//   }
// }
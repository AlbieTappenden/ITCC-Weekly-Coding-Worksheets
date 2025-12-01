function setup()
{
  createCanvas(800, 800);
  background(0);
  noStroke();

  for (let i = 0; i < 100; i++)
    {
        fill(random(255), random(255), random(255));

        let x = random(width);
        let y = random(height);
        let size = random(20, 80);

        if (random() < 0.5)
        {
            // Triangle with rotation
            push();
            translate(x, y);
            rotate(random(TWO_PI)); // random rotation of up to 360 degrees.
            triangle(-size/2, size/2, size/2, size/2, 0, -size/2);
            // randomize x and y points, then rotate it randomly, and then draw it at the centered point
            pop();
        }
        else
        {
            // Circle
            ellipse(x, y, size); // circle doesnt need rotation as its a circle, duh.
        }
    }
}

function draw()
{

}

// for this piece, I was inspired by Sonia Delaunay, who was known for 
// experimenting colours and shapes, with repetition to create visually
// appealing patterns. In my work I used code to randomise circles around 
// the canvas as well as triangles with random rotation points. Again with 
// my last piece my work is made so that when refreshed, it shows a new unique 
// version whilst keeping all the colours.

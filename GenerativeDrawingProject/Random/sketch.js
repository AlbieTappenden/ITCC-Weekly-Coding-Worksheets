function setup() 
{
  createCanvas(800, 800); // canvas of 800 x 800 pixels
  background(0); // black background
  noStroke(); // no outline on objects

  for (let i = 0; i < 100; i++) // for loop
    {
        fill(random(255), random(255), random(255)); // fill objects with random colours

        let x = random(width); // create a variable with a random y value
        let y = random(height); // create a variable with a random x value
        let size = random(20, 80); // create a variable with a random size of 20 height and width of 80

        if (random() < 0.5)
        { 
            // Triangle with rotation
            push(); // single out functions inside push and pop
            translate(x, y); // mpve object to x, y
            rotate(random(TWO_PI)); // random rotation of up to 360 degrees.
            triangle(-size/2, size/2, size/2, size/2, 0, -size/2);
            // randomize x and y points, then rotate it randomly, and then draw it at the centered point
            pop(); // stop singling out functions
        }
        else
        {
            // Circle
            ellipse(x, y, size); // circle doesnt need rotation as its a circle, duh.
        }
    }
}

function draw() // runs 60 frames a second
{
    // art is static so [function draw()] is not used
}

// for this piece, I was inspired by Sonia Delaunay, who was known for 
// experimenting colours and shapes, with repetition to create visually
// appealing patterns. In my work I used code to randomise circles around 
// the canvas as well as triangles with random rotation points. Again with 
// my last piece my work is made so that when refreshed, it shows a new unique 
// version whilst keeping all the colours.

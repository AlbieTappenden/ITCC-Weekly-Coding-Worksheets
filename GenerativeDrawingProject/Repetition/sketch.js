function setup() 
{
  createCanvas(800, 800);
//  noStroke(); - commented out because it gave it a cool outline to each object somehow.

  let grid = 10; // a 10 x 10 grid
  let size = width / grid; // how big each cell is

  for (let y = 0; y < grid; y++) 
  {
    for (let x = 0; x < grid; x++) 
    {

      // Random colours for square and circle
      fill(random(255), random(255), random(255));
      rect(x * size, y * size, size, size);

      fill(random(255), random(255), random(255));
      ellipse(x * size + size / 2, y * size + size / 2, size * 0.7);
    }
  }
}

function draw()
{

}

// for this piece, I have taken insperation from the hungarian-french
// artist Victor Vasarely who specialised in creating art that tricked
// the eyes most commonly, but for this specific piece i recreated a
// simplified version of his style by using coloured squares and circles
// inside them. And how when the page is refreshed, each time the colours
// will be new.

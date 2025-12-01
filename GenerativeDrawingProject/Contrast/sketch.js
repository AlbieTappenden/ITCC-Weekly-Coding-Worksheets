function setup()
{
  createCanvas(800, 800);
  background(10);
  noStroke();

  let cols = 10; // number of columns
  let rows = 10; // number of rows


  // Loop over each column and row to create a grid
  for (let i = 0; i < cols; i++)
    {
        for (let j = 0; j < rows; j++)
        {

            // Calculate the x and y position for each ellipse in the grid
            let x = i * (width / (cols - 1));
            let y = j * (height / (rows - 1));

            // Determine the size of each ellipse based on its position
            // Bottom-left is small, top-right is large
            let s = map(x + y, 0, width + height, 10, 150);

            // Alternate shading: checkerboard pattern
            if ((i + j) % 2 === 0)
            {
                fill(255, 0, 0); // red
            }
            else
            {
                fill(200, 0, 0); // darker red
            }

            ellipse(x, y, s);
        }
    }
}

function draw()
{

}

// for my final piece, I came up with this one myself,
// I realised for my other pieces i used randomization
// in colours but for this one i wanted to keep just 2
// colours as well as keeping the objects the same when
// the page was refreshed. I tried to look at an artist
// called Josef Albers for the resizing of shapes but his
// stuff just didn't show off what I wanted to create.

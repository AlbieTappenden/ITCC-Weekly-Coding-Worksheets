
// TASK 1 - 2
/*
function setup()
{
  createCanvas(500, 500);
  background(0);
  fill(0, 0, 255);
}

function draw()
{
  for (let y = 25; y < height; y += 50)
  {
    for (let x = 25; x < width; x += 50)
    {
      fill(random(10), random(255), random(255));

      ellipse(x, y, 50, 50);
    }
  }
}
*/

// TASK 3
/*
function setup()
{
  createCanvas(500, 500);
}

function draw()
{
  background(0);
  let unit = 50;

  for (let y = unit; y < height; y += unit)
  {
    for (let x = unit; x < width; x += unit)
    {
      herringBone(x, y, unit);
    }
  }
}

function herringBone(xVal, yVal, unit)
{
  stroke("255");
  strokeWeight(2);

  line(xVal, yVal, xVal - unit, yVal + unit);
  line(xVal, yVal, xVal + unit, yVal + unit);
  line(xVal, yVal - unit, xVal - unit, yVal);
  line(xVal, yVal - unit, xVal + unit, yVal);
}
*/
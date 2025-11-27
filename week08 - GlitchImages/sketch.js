let dotsArray = [] 
function setup()
{
  let w = width;
  let h = height;
  createCanvas(710, 400);
  noFill()
  stroke(255,0,);
  for (let i = 0; i < 50; i++)
  {
    let ellipseObj =
    {
      x: random(w),
      y: random(h),
      diameter: random(10, 50),
      speedX: random(-2, 2),
      speedY: random(-2, 2),
    };
    dotsArray.push(ellipseObj);
  }
  console.log(dotsArray);
}
function draw()
{
  background(0);
  for (let i = 0; i < 50; i++)
  {
    ellipseObj = dotsArray[i];
    ellipseObj.x += ellipseObj.speedX;
    ellipseObj.y += ellipseObj.speedY;
    if (ellipseObj.x < 0 || ellipseObj.x > width)
    {
      ellipseObj.speedX *= -1;
    }
    if (ellipseObj.y < 0 || ellipseObj.y > height)
    {
      ellipseObj.speedY *= -1;
    }
    stroke("blue");
    ellipse(ellipseObj.x, ellipseObj.y, ellipseObj.diameter);
  }
}


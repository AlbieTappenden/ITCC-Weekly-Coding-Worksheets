// TASK 1
// function setup()
// {
//   createCanvas(400, 300);
//   background(color(200));
// }

// function draw()
// {
//   fill(30, 125, 300);
//   ellipse(200,150, 400,300);
//   fill(250);
//   textSize(35);
//   textAlign(CENTER);
//   text("hello world", 200, 150);
// }

// TASK 2
// function setup()
// {
//   createCanvas(400, 300);
//   background(color(200));
// }

// function draw()
// {
//   fill(30, 125, 300);
//   ellipse(200,150, 400,300);
//   fill(250);
//   textSize(35);
//   textAlign(CENTER);
//   text("hello world", 200, 150);
  
//   rect(25,50,25,25);
//   fill(0, 255, 0)
//   line(0, 50, 400, 50);
//   fill(200, 255, 0);
//   triangle(47, 54, 100, 90, 100, 200);
//   fill(200, 0, 0);
//   quad(158,55,199,14,392,66,351,107);
//   fill(0,150, 150);
//   arc(200,200,150,50,90,170);
// }

// Task 3
// let rectWidth = 100;
// let rectHeight = 40;

// function setup() {
//   createCanvas(400, 300);
//   background(color(200));
// }

// function draw() {
//   rect(25,50,rectWidth,rectHeight);
//   rect(150,70,rectWidth,rectHeight);
//   rect(250,10,rectWidth,rectHeight);
//   rect(200,250,rectWidth,rectHeight);
// }

// Task 4
// let rectWidth = 100;
// let rectHeight = 40;

// function setup()
// {
//   createCanvas(400, 300);
//   background(color(200));
// }

// function draw()
// {
//   rect(25,50,rectWidth,rectHeight+10);
//   rect(150,70,rectWidth-10,rectHeight);
//   rect(250,10,rectWidth,rectHeight*2);
//   rect(200,250,rectWidth/2,rectHeight);
// }

// Task 5
let rectWidth = 100;
let rectHeight = 125;

function setup()
{
  createCanvas(800,600);
	background(200);
	noLoop();
}

function draw()
{
  noFill();
	drawShape(rectWidth,rectHeight);
}

function drawShape(rectangleWidth,rectangleHeight)
{
	let xPos = random(0, width);
	let yPos = random(0, height);

	rect(xPos,yPos,rectangleWidth,rectangleHeight);
}

/*
  // TASK 2 - 3
  function setup() 
  {
    createCanvas(1920, 1080);
    background(255);
    strokeWeight(4);
    stroke(0, 102);
  }

  function draw() 
  {
    line(mouseX, mouseY, pmouseX, pmouseY);
    let weight = dist(mouseX, mouseY, pmouseX, pmouseY);
    strokeWeight(weight);
  }
*/

/*
// TASK 4
let x = 0;
let y = 0;
let easing = 0.01;

function setup(){
  	createCanvas(1920,1080);
    background("orange");
}

function draw() {
	let targetX = mouseX;
	x += (targetX - x) * easing;
  	ellipse(x, y, 40, 40, 12);
   	console.log("X: " + targetX + " : " + x);


  let targetY = mouseY;
	y += (targetY - y) * easing;
   	console.log("Y: " + targetY + " : " + y);

}
*/

/*
// TASK 5
function setup() {
	createCanvas(480, 480);
	strokeWeight(30);
	background(204);
}

function draw() {
	stroke(102);
	line(40,0,70,height);

	if (mouseIsPressed == true)
  {
		stroke("Red");
	}
  else if (keyIsPressed == true)
  {
    stroke("Blue");
  }
  else
  {
		stroke(255);
	}
  	line(0,70,width,50);
}
*/

// TASK 6
let x = 0;
let easing = 0.05;

function setup()
{
  createCanvas(500, 500);
}

function draw()
{
  background("white");
  strokeWeight(2);
  let targetX = mouseX;
  x += (targetX - x) * easing;
  line(x, 0, x, height);
}

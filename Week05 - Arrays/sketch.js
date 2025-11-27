
// Task 1
/*
let myWords = ["Every", "girl", "deserves", "to", "take", "part", "in", "creating", "the", "technology", "that", "will", "change", "our world"];
let xVal = 20;

function setup()
{
  createCanvas(700, 500);
  background(color(200));
  noLoop();
}

function draw()
{
  for (var i = 0; i < myWords.length; i++)
  {
    console.log(myWords[i]);
    console.log(xVal);
    textAlign(CENTER);
    text(myWords[i], xVal, 100);
    xVal += 50;
  }
}
*/
// Task 2
/*
  let myWords = ["Every", "girl", "deserves", "to", "take", "part", "in", "creating", "the", "technology", "that", "will", "change", "our world"];
  let xVal = 30;
  let yVal = 30;

  function setup()
  {
    console.log('hello world');
    createCanvas(800, 500);
    background(color(200));
    fill(0, 0, 255);
    noLoop();
  }

  function draw()
  {
    for (var i = 0; i < myWords.length; i++)
    {
      console.log(myWords[i]);
      console.log(xVal);
      fill(200, 102, 153);
      textSize(22);
      textAlign(CENTER);
      text(myWords[i], xVal, yVal);
      xVal += 50;
      yVal += 30;
    }
  }
*/

// Task 3
/*
  let myWords = ["Every", "girl", "deserves", "to", "take", "part", "in", "creating", "the", "technology", "that", "will", "change", "our world"];
  let xVal = 30;
  let yVal = 30;

  function setup()
  {
    console.log('hello world');
    createCanvas(1024, 500);
    background(color(200));
    noLoop();
    myWords.push("and");
    myWords.push("change");
    myWords.push("who");
    myWords.push("runs");
    myWords.push("it.");
    console.log(myWords);
  }

  function draw()
  {
    for (var i = 0; i < myWords.length; i++)
    {
      console.log(myWords[i]);
      console.log(xVal);
      fill(200, 102, 153);
      textSize(12);
      textAlign(CENTER);
      text(myWords[i], xVal, yVal);
      xVal += 43;
      yVal += 20;
    }
  }
*/

// Task 4
/*
  let myColors = [];
  let xPos = 0;

  function setup()
  {
    createCanvas(1024, 400);
    background(color(100));
    noLoop();

    for (var i = 0; i < 256; i++)
    {
      myColors.push(i);
    }
  }

  function draw()
  {
    noStroke();
    for (var i = 0; i < myColors.length; i++)
    {
      fill(myColors[i], 0, 120);
      rect(xPos, 0, width/256, height);
      xPos = xPos+(width/256);
    }
  }
*/

// Task 5
/*
  let myCommands = ["STOP", "GO"];
  let i = 0;

  function setup()
  {
    createCanvas(600, 600);
    background(color(200));
    frameRate(1);
  }

  function draw()
  {
    noStroke();
    background(color(0));
    fill(0, 255, 0);
    
    translate(width / 2, height / 2);
    rotate(0.6);
    rect(26, -200, 30, 302);
    rotate(-1.5);
    rect(-100, -90, 30, 150);
    rotate(0.9);
    translate(-width / 2, -height / 2);
    fill(255, 255, 255);
    i++;
    if (i >= myCommands.length)
    {
      background(color(255));
      noStroke();
      fill(255, 0, 0);
      ellipse(width/2, height/2, 600, 600);
      fill(255, 255, 255);
      i = 0;
    }
    textSize(200);
    textAlign(CENTER, CENTER);
    text(myCommands[i], 300, 300);

  }
*/

// Array Alternations
/*
  let myCommands = ["Hello", "Goodbye", "See You later"];
  let i = 0;

  function setup()
  {
    createCanvas(600, 600);
    background(color(200));
    frameRate(1);
  }

  function draw()
  {
    background(color(200));
    text(myCommands[i], 300, 300);
    i++;
    if (i > myCommands.length)
    {
      i = 0;
    }
  }
*/
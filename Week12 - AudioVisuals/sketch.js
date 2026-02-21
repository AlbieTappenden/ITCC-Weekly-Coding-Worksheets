


let mySound;
let amp;

fft = new p5.FFT();
fft.setInput(mySound);


function preload()
{
  mySound = loadSound('assets/FunkyBeat.wav');
}


function setup()
{
  let cnv = createCanvas(1000, 1000);
  cnv.mousePressed(canvasPressed);
  textAlign(CENTER);
  textSize(30);
  strokeWeight(5);
  stroke("blue");

  amp = new p5.Amplitude();
  amp.setInput(mySound);
}



function draw()
{
  background(0,50);

  if (!mySound.isPlaying())
  {
    console.log('paused');
    strokeWeight(6);
    stroke("white");
    text('click to play', width/2, height/2);
  }

  let spectrum = fft.analyze();
  let treble = fft.getEnergy("treble");
  let mid = fft.getEnergy("mid");
  let bass = fft.getEnergy("bass");

  console.log(bass);

  let scaleMidLine = map(mid, 0, 255, 0, width); 
  let mappedTreble = map(treble, 0, 0.09, 0, 100); 
  let mappedMid = map(mid, 0, 160, -150, 100); 
  let mappedBass = map(bass, 0, 160, -200, 50);
  let mappedLevel = map(spectrum, 0, 0.2, 0, 100);

  translate(width / 2, height / 2);
  let noOfPoints = 100;

  for (let i = 0; i < noOfPoints; i++)
  {
    rotate(TWO_PI / noOfPoints);
    point(mappedLevel, height/4);

    // treble
    strokeWeight(20);
    stroke("white");
    point(mappedTreble, height/4);

    // mid 2
    strokeWeight(6);
    stroke(0,0,255);
    point(mappedMid, height/4);
    strokeWeight(2);
    line(0, height/4, scaleMidLine, height);

    // bass
    strokeWeight(15);
    stroke("red");
    point(mappedBass, height/4);
  }
}


function canvasPressed()
{
  mySound.play();
  mySound.loop();
}

let x, y;
let radius = 100;
let r,g,b;
let timer = 10;
let interval = 60;

let score = 0;
let gameOver = false;

function setup()
{
    createCanvas(windowWidth, windowHeight);
    background(220);
}

function draw()
{
    createText();
    fill(r, g, b);

    if (frameCount % interval == 0 && gameOver == false)
    {
        console.log("Game Playing");
        timer --;
        background(220);
        newValues();
        ellipse(x, y, radius*2, radius*2);
    }

    else if(timer < 1)
    {
        console.log("Game Over!");
        gameOver = true;
        textSize(100);
        textAlign(CENTER, CENTER);
        stroke(0);
        text("Game Over!", windowWidth/2, windowHeight/2)
        promptRestart();
    }
}

function mousePressed()
{
    let d = dist(mouseX, mouseY, x, y);
    if (d < radius && timer > 1)
    {
        newValues();
        score++;
    }
}

function newValues()
{
    r = random(255);
    g = random(255);
    b = random(255);

    x = random(windowWidth);
    y = random(windowHeight);
}

function createText()
{
    textSize(32);
    stroke(-1);
    textAlign(LEFT, CENTER);
    text("Score: " + score, 10, 30);
    text("Countdown: " + timer, 150, 30);
}

function promptRestart()
{
    textSize(50);
    textAlign(CENTER, CENTER);    
    stroke(0);
    text("press c to restart", windowWidth/2, windowHeight/2+100)
}

function keyPressed()
{
    if (key === 'c');
    {
        background(0);
        gameOver = false;
        score = 0;
        timer = 10;
        console.log("c pressed");
        console.log("game is " + gameOver);
    }
    
}
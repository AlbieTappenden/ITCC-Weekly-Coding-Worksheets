let glitch;

function setup()
{
	createCanvas(windowWidth, windowHeight);
	background(0);
	imageMode(CENTER);

    
	glitch = new Glitch();
	loadImage('data/images/fishv2.png', function(im)
	{
		glitch.loadImage(im);
	});
    glitch.debug();
}

function draw()
{
	glitch.resetBytes();
	glitch.randomBytes(10);
    glitch.replaceBytes(1, 1);

	glitch.buildImage();
	image(glitch.image, width/2, height/2)
}

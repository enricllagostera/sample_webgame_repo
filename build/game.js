function setup()
{
    createCanvas(500, 500);
    background("goldenrod");
}

function draw()
{
    fill("whitesmoke");
    ellipse(mouseX, mouseY, mouseX/width * 90);
}
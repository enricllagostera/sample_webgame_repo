function setup()
{
    createCanvas(500, 500);
    background("cyan");
}

function draw()
{
    fill("whitesmoke");
    stroke('rgba(0,0,0,'+ mouseX/width * 0.9 +')');
    ellipse(mouseX, mouseY, mouseX/width * 80);
}
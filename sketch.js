var box 


function setup() {
  createCanvas(400,400);
  box = createSprite(200,200)
}

function draw() 
{
  background(30);
drawSprites()
if(keyDown("RIGHT"))
box.x += 5
if(keyDown(LEFT_ARROW))
box.x -= 5
if(keyDown(UP_ARROW))
box.y -= 5
if(keyDown(DOWN_ARROW))
box.y += 5
}





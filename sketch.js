var ball,ballimg,paddle,paddleimg;
function preload() {

ballimg = loadImage("ball.png");
  
paddleimg = loadImage("paddle.png");

}
function setup() {
  createCanvas(400, 400);
   /* create the Ball Sprite and the Paddle Sprite */
    ball = createSprite(10,280,10,10); ball.addImage("ball",ballimg); ball.velocityX=9;
  
  paddle = createSprite(320,280,100,20);
    paddle.addImage("paddle",paddleimg);

  
  /* give the ball an initial velocity of 9 in the X direction */
  

}

function draw() {
  background(205,153,0);

    edges=createEdgeSprites();

  ball.bounceOff(edges[2]);
  ball.bounceOff(edges[3]);
  ball.bounceOff(edges[0]);
  
ball.bounceOff(paddle,randomVelocity);
 
  paddle.collide(edges);
  
  if(keyDown(UP_ARROW))
  {
paddle.y=paddle.y-20;
  }
  
  if(keyDown(DOWN_ARROW))
  {
 paddle.y=paddle.y+20;
 }
  drawSprites();
  
}

function randomVelocity()
{
 ball.velocityY=random(-8,8);
}


var canvas=document.getElementById("canvas");
var ctx=canvas.getContext("2d");
canvas.width=800;
canvas.height=500;
var snakeW=10;
var snakeH=10;
var snake=[];
var snakeLength=4;
var p=0;
var dir="right";
var start;
var score=0;
x=Math.floor(Math.random()*49)*10;
y=Math.floor(Math.random()*49)*10;

//snake control
document.addEventListener("keydown",dircontrol,false);
function dircontrol(e){
  if(e.keyCode==37 && dir!="right")
  {
    dir="left";
  }
  else if(e.keyCode==38 && dir!="down")
  {
    dir="up";
  }
  else if(e.keyCode==39 && dir!="left")
  {
    dir="right";
  }
  else if(e.keyCode==40 && dir!="up")
  {
    dir="down";
  }
  

}
//fruit draw
 var fruit={
   x:Math.floor(Math.random()*(canvas.width/snakeW))*10,
   y:Math.floor(Math.random()*(canvas.height/snakeH))*10
  }
 function fruitDraw(x,y){
  ctx.fillStyle="red";
  ctx.fillRect(x,y,snakeW,snakeH);
  ctx.fillStyle="black";
  ctx.strokeRect(x,y,snakeW,snakeH);
 }
 //death check

 function deathCheck(x,y)
 {
    var i;
    for(i=1;i<snake.length;i++)
    {
       if(x==snake[i].x && y==snake[i].y)
       {
          
           alert(" GAME OVER \n your score is = " + score);
           clearInterval(loop);
       }
    }
 }
// snake draw

function draw(){
  ctx.clearRect(0,0,canvas.width,canvas.height)
  for(var i=0;i<snake.length;i++)
  {
    ctx.fillStyle="white";
    ctx.fillRect(snake[i].x*snakeW,snake[i].y*snakeH,snakeW,snakeH);
    ctx.fillStyle="black";
    ctx.strokeRect(snake[i].x*snakeW,snake[i].y*snakeH,snakeW,snakeH);
    
  }
  
  fruitDraw(fruit.x,fruit.y);

  var snakeX=snake[0].x;
  var snakeY=snake[0].y;
 // fruitDraw(3*snakeW,4*snakeH);
  

  if(dir=="right")
  {
    
    snakeX++;
    //snake.pop();
    
  }
  else if(dir=="left")
  {
    
    snakeX--;
    //snake.pop();

  }
  else if(dir=="up")
  {
    
    snakeY--;
    //snake.pop();

  }
  else if(dir=="down")
  {
    
    snakeY++;
    //snake.pop();

  }
  
  var newHead={
    x:snakeX,
    y:snakeY
  }
  
  
  
  if(snakeX*10==fruit.x && snakeY*10==fruit.y)
  {
    fruit.x=Math.floor(Math.random()*49)*10,
    fruit.y=Math.floor(Math.random()*49)*10

    score=score+10;
    document.getElementById("i").innerHTML= "SCORE = " + score;
    
    }
    
    
  
  else
  {
    snake.pop();
    
  }
  
  
  snake.unshift(newHead);
  
  if(snakeX==canvas.width/snakeW || snakeX===-1 || snakeY==-1 || snakeY==canvas.height/snakeH)
  {
    
    alert(" GAME OVER \n your score is = " + score);
    clearInterval(loop);
  }
  deathCheck(snakeX,snakeY);


  

  
  
  
  
  
  
  
}

//creating snake array

function createSnake(){
   for(var i=snakeLength-1;i>=0;i--)
   {
     snake.push(
       {
         x:i,
         y:0
       }
     )
   }
}



createSnake();


var loop=setInterval(draw,120);



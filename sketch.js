let bullet, wall, button, bulletimg;
let speed, weight;
let go, wait;
let num= 1;
let num1= 0;
let damage, wallthickness;
let remark, remarkimg;

function preload(){
  bulletimg=loadImage("bullet1.png")
  go= loadImage("go.png");
  wait= loadImage("wait.png");
  remarkimg= loadImage("remark.png");
}

function setup() {
  createCanvas(1080,400);
  button= createSprite(windowWidth*0.05,windowHeight*0.08);
  button.addImage("go", go);
  button.addImage("wait", wait);
  button.scale= 0.4;
  wall= createSprite(1000, windowHeight/2, 100, 800);
  wall.scale=0.5;
  wall.shapeColor="silver";
  wall.debug= false;
  button.debug= false;
  remark=createSprite(70,345);
  remark.addImage("instructions", remarkimg);
  remark.scale=0.5;
}



function draw() {
  background(0);
  buttonfun();
  if(num1>0){
    istouching();
  }
  drawSprites();
}

function buttonfun(){
  if(mousePressedOver(button)&&num===1) {
    wall.shapeColor="silver";
    speed= Math.round(random(223,321));
    weight= Math.round(random(30,52));
    wallthickness= Math.round(random(22,83));
    wall.width=wallthickness;
    bullet=createSprite(100,Math.round(random(100,300)),30,30);
    bullet.debug=false;
    bullet.scale=0.1;
    num1=num1+1;
    bullet.addImage("bullet",bulletimg);
    bullet.velocityX =speed;
    button.changeImage("wait");
    num=0;
    resetnum();
  }
}

function resetnum(){
  setTimeout(reset,2000);
}

function reset(){
  num=1;
  button.changeImage("go");
}

function istouching(){
   if(wall.x-bullet.x <= (bullet.width/2+ wall.width/2)){
     bullet.velocityX=0;
     bullet.lifetime=2;
     damagefunc();
    }
}

function damagefunc(){
  damage=0.5*weight*speed*speed/(wallthickness*wallthickness*wallthickness);
  damageresult();
}

function damageresult(){
  if(damage<=10){
    wall.shapeColor="green";
  }
  if(damage>10){
    wall.shapeColor="red";
  }
  console.log(damage);
}
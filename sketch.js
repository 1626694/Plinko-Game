function setup() {
  createCanvas(800,480);
  createSprite(400, 200, 50, 50);
}
var particles=[]
var plinkos=[]
var divisons=[]
var divisonheight=300
function draw() {
  background(255,255,255); 
  
  drawSprites();
}
function Forloop(){
  for (var k = 0 <=innerWidth; k = k + 80) {
    divisons.push(new divisons(k, height-divisonHeight/2,10, divisonHeight));
  } 
  for (var j = 40; j <=width;j=j+50){
    plinkos.push(new Plinko(j,75));
  }
  for (var j = 15; j <=width;j=j+50){
    plinkos.push(new Plinko(j,175));
  }
  if(frameCount%60===0){
    particles.push(new Particle(random(width/2-10, width/2+10),10,10));
  }
}
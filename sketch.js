var car,wall;
var speed,weight,deformation;

function setup() {
  createCanvas(1600,400);
  
  speed = random(50,90);
  weight = random(400,1500);
  car = createSprite(50, 200, 50, 50);
  car.velocityX = speed;
  car.shapeColor = ("white")
  wall = createSprite(1500, 200, 60, height/2);
  wall.shapeColor = (80,80,80)


}

function draw() {
  background(0); 
  
   console.log(deformation)

  if(car.x-wall.x<wall.width/2+car.width/2
     &&wall.x-car.x<wall.width/2+car.width/2)
  {
    car.velocityX = 0;
    deformation = (0.5*weight*speed*speed)/22500;
    if(deformation<=100){
      car.shapeColor = ("green")
    }
    if(deformation<180&&deformation>100){
      car.shapeColor = ("yellow")
    }
    if(deformation>180){
      car.shapeColor = ("red")
    }
  }
  else{
    deformation = 0;
    car.velocityX = speed;
    car.shapeColor = ("white")
  }

  
  drawSprites();
}
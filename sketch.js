//Create variables here
var dog,happydog,database,foodS,foodStock

function preload()
{
	dog = loadImage("happydog.png");
}

function setup() {
  database = firebase.database
	createCanvas(800, 700);
  dog = createSprite(300,300,10,10);
  dog = loadImage("happydog.png");
  foodstock = database.ref('Food');
  foodStock.on("value",readStock);

}


function draw() {  
background(46,139,87);
  drawSprites();
  if(keyWentDown(UP_ARROW)){
    writeStock(foodS);
    dog.addImage(dogHappy);
  }

}
function readStock(data){
  foodS = data.val();
}

function writeStock(x){
  database.ref('/').update({
Food:x
  })
}




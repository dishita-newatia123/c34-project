//Create variables here
var dog, happyDog, database, food, foodStock ;

function preload()
{
	//load images here
  happyDog = loadImage("images/dogImg1.png")
  dog = loadImage("images/dogImg.png")

}

function setup() {
  database = firebase.database();
	createCanvas(1000, 500);
  var Dog = createSprite(200,200,10,10);
  Dog.addImage(dog)
  Dog.scale = 0.2

  foodStock = database.ref("food");
  foodStock.on("value",readStock);




}


function draw() {  
background(46, 139, 87)
  

  //add styles here
  if (keyWentUp(UP_ARROW)){
    writeStock(food)
    foodStock=-1
    Dog.addImage(happyDog)
  }
  textSize(20)
  fill("white")
  text ("note: press UP_ARROW key to feed Drago milk!",50,200)

}

function readStock(data){
  food = data.val();
}
function writeStock(x){

  if(x<=0){
    x=0;
  }
  else{
    x=x-1;
  }
  database.ref('/').update({
    food:x
  })
  drawSprites();
}

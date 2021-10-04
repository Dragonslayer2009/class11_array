var marks = [30,40,45,35];
var s1, s2 , s3, s4;
var spriteArray = [];

function setup() {
  createCanvas(400, 400);
  s1 = createSprite (50,50,15,30);
  s2 = createSprite (350,50,15,30);
  s3 = createSprite (50,350,15,30);
  s4 = createSprite (350,50,15,30);

  spriteArray = [s1, s2, s3, s4];

  console.log (spriteArray);

  for(var i = 0; i < spriteArray.length; i = i + 1)
  {
    console.log (spriteArray[i].position.x);
  }
}

function draw() {
  background(150);
}
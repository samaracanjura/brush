
let brushCounterLimit = 5;
let brushCounter = 1;

let images;

function preload(){
  images = [
    loadImage('assets/doodle_1.png'),
    loadImage('assets/doodle_2.png'),
    loadImage('assets/doodle_3.png'),
    loadImage('assets/doodle_4.png'),
    loadImage('assets/doodle_5.png'),
    loadImage('assets/doodle_6.png'),
    loadImage('assets/doodle_7.png')
  ]
}
function setup() {
  createCanvas(windowWidth, windowHeight);
    background("#DEF0E5");
}

function draw() {
  if(mouseIsPressed){
    incrementBrushCounter();
    if (brushCounter == 0){
    tint(255, random(50, 200));
    image(random(images), mouseX, mouseY, 60, 60);
    }
  }
}

function incrementBrushCounter(){
  brushCounter++;
  if(brushCounter > brushCounterLimit){
    brushCounter = 0;
  }
}
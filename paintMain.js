var widthScreen = 500;
var heightScreen = 500;
var strokeWidth;
var strokeColor;
var gui;
var rainbow;
let hue;

function setup() {
  createCanvas(widthScreen, heightScreen);
  background(255);
  
  // Initialize main variables
  strokeWidth = 1;
  strokeColor = '#00ddff';
  rainbow = false;
  hue = 0;  
  
  // Create gui
  gui = createGui('Paint GUI');
  gui.addGlobals('strokeColor', 'strokeWidth','rainbow');
}

// Draw the lines with specific color and width
function draw() {
  
  if(!rainbow) {
    stroke(strokeColor);
  } else {
    stroke(hue,255,255);
  }
  
  strokeWeight(strokeWidth);
}

function mouseDragged() {
  
  // Draw rainbow 
  if(rainbow) {
    hue++;
    colorMode(HSB, 360);
    
    // Restart rainbow hue
    if(hue > 360) hue = 0;
  }
  // Draw lines
  line(pmouseX,pmouseY,mouseX,mouseY);
}
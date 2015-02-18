/*//holds random Hue, Sat, Value for sphere
var randomH = random(255);
var randomS = random(255);
var randomV = random(255);*/
//var randomBg = color(var(random(randomH*2)), var(random(randomS*2)), var(random(randomV*2)));

var w = Math.max(document.documentElement.clientWidth, window.innerWidth || 0);
var h = Math.max(document.documentElement.clientHeight, window.innerHeight || 0);

// setup loop
function setup (){
  //sets canvas size
  createCanvas(w, h);
  //runs at this fps
  frameRate (30);
  noLoop();
  //background(randomBg);
}

// draw loop runs at fps
function draw (){
  
/*  for(var i = 1; i <= 25; i++){
    circles();
    rectangles();
    lines();
    quads();
    triangles();
    arcs();
  }*/
  //clearCenter();
  //translate(width*2, height*2);
  circles();
  rectangles();
  lines();
  quads();
  triangles();
  arcs();
  
  //blend(0, 0, width, height, 0, 0, width, height, OVERLAY);
  
  // centerSphere();
  //prvarln(frameRate);
  
}

function mousePressed() {
  loop();
}

function mouseReleased() {
  noLoop();
}

function touchStarted(){
  loop();
}

function touchEnded(){
  noLoop();
}

function circles(){
  
  // to hold random size
  var sz = random(50);
  
  //holds random Hue, Sat, Value
  var randomH = random(255);
  var randomS = random(255);
  var randomV = random(255);
  
  //holds random in greyscale
  var monochrome = random(255);
  
  //fill and stroke values in HSV
  //fill (randomH, randomS, randomV);
  //stroke (randomH, randomS, randomV);
  
  translate(0, 0, 2);
  //1 paramater means grayscale
  fill (monochrome);
  stroke (monochrome);
  // makes circle (posX, posY, X value, Y value)
  ellipse (random(width)/2, random(height)/2, sz, sz);
  
  fill (randomH, randomS, randomV);
  stroke (randomH, randomS, randomV);
  ellipse (random(width/2, width), random(height/2), sz, sz);
  
  fill (monochrome);
  stroke (monochrome);
  ellipse (random(width/2, width), random(height/2, height), sz, sz);
  
  fill (randomH, randomS, randomV);
  stroke (randomH, randomS, randomV);
  ellipse (random(width)/2, random(height/2, height), sz, sz);
}

function rectangles(){
  
  // to hold random size
  var sz = random(50);
  
  //holds random Hue, Sat, Value
  var randomH = random(255);
  var randomS = random(255);
  var randomV = random(255);
  
  //holds random in greyscale
  var monochrome = random(255);
  
  //fill and stroke values in HSV
  //fill (randomH, randomS, randomV);
  //stroke (randomH, randomS, randomV);
  
  //1 paramater means grayscale
  fill (monochrome);
  stroke (monochrome);
  // makes circle (posX, posY, X value, Y value)
  rect (random(width)/2, random(height)/2, sz, sz);
  
  fill (randomH, randomS, randomV);
  stroke (randomH, randomS, randomV);
  rect (random(width/2, width), random(height/2), sz, sz);
  
  fill (monochrome);
  stroke (monochrome);
  rect (random(width/2, width), random(height/2, height), sz, sz);
  
  fill (randomH, randomS, randomV);
  stroke (randomH, randomS, randomV);
  rect (random(width)/2, random(height/2, height), sz, sz);
}

function lines(){
  
  // to hold random size
  var sz = random(50);
  
  //holds random Hue, Sat, Value
  var randomH = random(255);
  var randomS = random(255);
  var randomV = random(255);
  
  //holds random in greyscale
  var monochrome = random(255);
  
  //fill and stroke values in HSV
  //fill (randomH, randomS, randomV);
  //stroke (randomH, randomS, randomV);
  
  //1 paramater means grayscale
  fill (monochrome);
  stroke (monochrome);
  // makes circle (posX, posY, X value, Y value)
  line (random(width)/2, random(height)/2, random(width)/2, random(height)/2);
  
  fill (randomH, randomS, randomV);
  stroke (randomH, randomS, randomV);
  line (random(width/2, width), random(height/2), random(width/2, width), random(height/2));
  
  fill (monochrome);
  stroke (monochrome);
  line (random(width/2, width), random(height/2, height), random(width/2, width), random(height/2, height));
  
  fill (randomH, randomS, randomV);
  stroke (randomH, randomS, randomV);
  line (random(width)/2, random(height/2, height), random(width)/2, random(height/2, height));
}

function quads(){
  
  // to hold random size
  var sz = random(50);
  
  //holds random Hue, Sat, Value
  var randomH = random(255);
  var randomS = random(255);
  var randomV = random(255);
  
  //holds random in greyscale
  var monochrome = random(255);
  
  //fill and stroke values in HSV
  //fill (randomH, randomS, randomV);
  //stroke (randomH, randomS, randomV);
  
  //1 paramater means grayscale
  fill (monochrome);
  stroke (monochrome);
  // makes circle (posX, posY, X value, Y value)
  quad (random(width)/2, random(height)/2, random(width)/2, random(height)/2, random(width)/2, random(height)/2, random(width)/2, random(height)/2);
  
  fill (randomH, randomS, randomV);
  stroke (randomH, randomS, randomV);
  quad (random(width/2, width), random(height/2), random(width/2, width), random(height/2), random(width/2, width), random(height/2), random(width/2, width), random(height/2));
  
  fill (monochrome);
  stroke (monochrome);
  quad (random(width/2, width), random(height/2, height), random(width/2, width), random(height/2, height), random(width/2, width), random(height/2, height), random(width/2, width), random(height/2, height));
  
  fill (randomH, randomS, randomV);
  stroke (randomH, randomS, randomV);
  quad (random(width)/2, random(height/2, height), random(width)/2, random(height/2, height), random(width)/2, random(height/2, height), random(width)/2, random(height/2, height));
}

function triangles(){
  
  // to hold random size
  var sz = random(50);
  
  //holds random Hue, Sat, Value
  var randomH = random(255);
  var randomS = random(255);
  var randomV = random(255);
  
  //holds random in greyscale
  var monochrome = random(255);
  
  //fill and stroke values in HSV
  //fill (randomH, randomS, randomV);
  //stroke (randomH, randomS, randomV);
  
  //1 paramater means grayscale
  fill (monochrome);
  stroke (monochrome);
  // makes circle (posX, posY, X value, Y value)
  triangle (random(width)/2, random(height)/2, random(width)/2, random(height)/2, random(width)/2, random(height)/2);
  
  fill (randomH, randomS, randomV);
  stroke (randomH, randomS, randomV);
  triangle (random(width/2, width), random(height/2), random(width/2, width), random(height/2), random(width/2, width), random(height/2));
  
  fill (monochrome);
  stroke (monochrome);
  triangle (random(width/2, width), random(height/2, height), random(width/2, width), random(height/2, height), random(width/2, width), random(height/2, height));
  
  fill (randomH, randomS, randomV);
  stroke (randomH, randomS, randomV);
  triangle (random(width)/2, random(height/2, height), random(width)/2, random(height/2, height), random(width)/2, random(height/2, height));
}

function arcs(){
  
  var randomDegreeStart = radians(random(0, 360));
  var randomDegreeEnd = radians(random(0, 359.9));
  
  // to hold random size
  var sz = random(200);
  
  //holds random Hue, Sat, Value
  var randomH = random(255);
  var randomS = random(255);
  var randomV = random(255);
  
  //holds random in greyscale
  var monochrome = random(255);
  
  //fill and stroke values in HSV
  //fill (randomH, randomS, randomV);
  //stroke (randomH, randomS, randomV);
  
  //1 paramater means grayscale
  fill (monochrome);
  stroke (monochrome);
  // makes circle (posX, posY, X value, Y value)
  arc (random(width)/2, random(height)/2, random(sz)/2, random(sz)/2, randomDegreeStart, randomDegreeEnd);
  
  fill (randomH, randomS, randomV);
  stroke (randomH, randomS, randomV);
  arc (random(width/2, width), random(height/2), random(sz/2, sz), random(sz/2), randomDegreeStart, randomDegreeEnd);
  
  fill (monochrome);
  stroke (monochrome);
  arc (random(width/2, width), random(height/2, height), random(sz/2, sz), random(sz/2, sz), randomDegreeStart, randomDegreeEnd);
  
  fill (randomH, randomS, randomV);
  stroke (randomH, randomS, randomV);
  arc (random(width)/2, random(height/2, height), random(sz)/2, random(sz/2, sz), randomDegreeStart, randomDegreeEnd);
  
}
  
function centerSphere(){
  
  //holds random in greyscale
  var monochrome = random(255);
  
  lights();
  stroke(randomH, randomS, randomV);
  translate(width/2, height/2, 1);
  rotateX(mouseY/256);
  rotateY(mouseX/256);
  //fill(random(0,(mouseY/2) - (mouseX/2)), random(0, (mouseY/2) - (mouseX/2)), random(0,(mouseY/2) - (mouseX/2)));
  fill(random(0, randomH), random(0, randomS), random(0, randomV));
  sphereDetail((mouseX + mouseY) / 64);
  sphere(100);
  
}

function clearCenter(){
  
  translate(width/2, height/2, 1);
//  fill(randomBg);
//  stroke(randomBg);
  ellipse(width, height, 200, 200);
  
}
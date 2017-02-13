var system = true;


pox=30;
poy=50;

t = .05
v = 1





fil = ('rgba(120,250,120, 0.1)');

function setup() {
  bg  = loadImage("man.jpg");
 

  createCanvas(900, 600);
  system = new ParticleSystem(createVector(675, 335));


  button1 = createButton('1');
  button1.position(950, 65);
  button1.mouseClicked(chang1);

  button2 = createButton('2');
  button2.position(950, 115);
  button2.mouseClicked(chang);

  

   button3 = createButton('3');
  button3.position(950, 165);
  button3.mouseClicked(chang2);

   button4 = createButton('x');
  button4.position(950, 215);
  button4.mouseClicked(chang3);


  
}

function draw() {
  background(bg);
  noStroke();
  system.addParticle();
  system.run();


}





// A simple Particle class
var Particle = function(position) {
  this.acceleration = createVector(-.01, -.01);
  this.velocity = createVector(random(t, v), random(-v, v));
  this.position = position.copy();
  this.lifespan = 500.0;
};

Particle.prototype.run = function() {
  this.update();
  this.display();
};

// Method to update position
Particle.prototype.update = function(){
  this.velocity.add(this.acceleration);
  this.position.add(this.velocity);
  this.lifespan -= 2;
};

// Method to display
Particle.prototype.display = function() {
  
  
  fill(fil);
  ellipse(this.position.x, this.position.y, pox, poy);
};

// Is the particle still useful?
Particle.prototype.isDead = function(){
  if (this.lifespan < 0) {
    return true;
  } else {
    return false;
  }
};

var ParticleSystem = function(position) {
  this.origin = position.copy();
  this.smoke = [];
};

ParticleSystem.prototype.addParticle = function() {
  this.smoke.push(new Particle(this.origin));
};

ParticleSystem.prototype.run = function() {
  for (var i = this.smoke.length-1; i >= 0; i--) {
    var p = this.smoke[i];
    p.run();
    if (p.isDead()) {
      this.smoke.splice(i, 1);
    }
  }
};






function chang(){
  system = new ParticleSystem(createVector(250,340));

  t = .05
v = 1

  bg = loadImage("man2.jpg");

  pox= 50;
  poy= 70;

fil = ('rgba(219,0,22, 0.1)');

createCanvas(900, 600);

}

function chang1(){
  system = new ParticleSystem(createVector(675, 335));

  t = .05
v = 1

  bg = loadImage("man.jpg");

  pox=30;
poy=50;

fil = ('rgba(120,250,120, 0.1)');

createCanvas(900, 600);

}

function chang2(){
  system = new ParticleSystem(createVector(50, 500));

  bg = loadImage("man3.gif");

  t= 1;
  v= 2;

  pox=20;
poy=20;

fil = ('rgba(0,0,250, 0.1)');

createCanvas(500, 600);

}

function chang3(){
  system = new ParticleSystem(createVector(370, 370));

  t = .5;
  v= -1;



  bg = loadImage("man4.jpeg");

  pox=100;
poy=20;

fil = ('rgba(235,0, 230,.05)');

createCanvas(900, 600);

}






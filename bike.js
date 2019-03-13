function Bike (color, x, y, vx, vy, direction) {
  this.x = x;
  this.y = y;
  this.speedX = vx * scale;
  this.speedY = vy * scale;
  this.trail = [];
  this.currentDirection = direction;
  this.color = color;
  // this.muerto = false;
  // if (this.muerto) {
  //   return;
  // }
  this.update = function () {
    ctx = myGame.context;
    ctx.fillStyle = color;
    ctx.fillRect(this.x, this.y, scale, scale);
    return this.trail.push({x: this.x, y: this.y});
  };
  this.newPos = function() {
    this.x += this.speedX;
    this.y += this.speedY;
  };
  this.moveUp = function() { 
    if (this.currentDirection !== "down") {
    this.currentDirection = "up";
    this.speedY = -1 * scale;
    this.speedX = 0;
    };
  };
  this.moveDown = function() {
    if (this.currentDirection !== "up") {
    this.currentDirection = "down";
    this.speedY = 1 * scale;
    this.speedX = 0;
    };
  };
  this.moveLeft = function() {
    if (this.currentDirection !== "right") {
    this.currentDirection = "left";
    this.speedY = 0;
    this.speedX = -1 * scale;
    };
  };
  this.moveRight = function() {
    if (this.currentDirection !== "left") {
    this.currentDirection = "right";
    this.speedY = 0;
    this.speedX = 1 * scale;
    };
  };
};

//colisión con trail
Bike.prototype.collision = function(trail) {
    for (var i=0; i<trail.length; i++) {
      if (this.x === trail[i].x && this.y === trail[i].y) {
        return true;
      };
    };
    return false;
  };

//colisión con bordes
Bike.prototype.bordes = function() {
  return (this.x < 0 || this.x > myGame.canvas.width || this.y < 0 || this.y > myGame.canvas.height) 
}

Bike.prototype.muerte = function() {
  // for (var i=0; i<this.trail.length; i++) {
  //   ctx.clearRect(this.trail[i].x, this.trail[i].y, scale, scale);
  // }
  this.speedX=0;
  this.speedY=0;
  this.trail = [];
}

var player1 = new Bike("blue", 0, 0, 1, 0, "right");
var player2 = new Bike("red", myGame.canvas.width - scale, myGame.canvas.height - scale, -1, 0, "left");
var player3 = new Bike("green", 0, myGame.canvas.height - scale, 0, -1, "up");
var player4 = new Bike("yellow", myGame.canvas.width - scale, 0, 0, 1, "down");



// function color(min, max) {
//   return Math.random() * (max - min) + min;
// };
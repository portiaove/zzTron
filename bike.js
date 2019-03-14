function Bike (color, x, y, vx, vy, direction, name) {
  this.name = name;
  this.x = x;
  this.y = y;
  this.oldX = 0;
  this.oldY = 0;
  this.speedX = vx * scale;
  this.speedY = vy * scale;
  this.trail = [];
  this.currentDirection = direction;
  this.color = color;
  this.muerto = false;

  this.update = function () {
    ctx = myGame.context;
    ctx.fillStyle = color;
    if(this.muerto === false) {
      this.trail.push({x: this.x, y: this.y});
      this.trail.forEach(function(position) {
        ctx.fillRect(position.x, position.y, scale, scale);
      }.bind(this))
    }
  };

  this.newPos = function() {
    if(this.muerto === false) {
    this.x += this.speedX;
    this.y += this.speedY;
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

//muerte
Bike.prototype.muerte = function() {
  // for (var i=0; i<this.trail.length; i++) {
  //   ctx.clearRect(this.trail[i].x, this.trail[i].y, scale, scale);
  // }
  this.muerto = true;
  this.x=undefined;
  this.y=undefined;
  // this.speedX=0;
  // this.speedY=0;
  this.trail = [];
}

//movimientos
Bike.prototype.moveUp = function() { 
  if (this.currentDirection !== "down") {
  this.currentDirection = "up";
  if (this.oldX !== this.x) {
  this.speedY = -1 * scale;
  this.speedX = 0;
  };
  this.oldX = this.x;
  this.oldY = this.y;
};
};

Bike.prototype.moveDown = function() {
  if (this.currentDirection !== "up") {
  this.currentDirection = "down";
  if (this.oldX !== this.x) {
  this.speedY = 1 * scale;
  this.speedX = 0;
  };
  this.oldX = this.x;
  this.oldY = this.y;
};
};

Bike.prototype.moveLeft = function() {
  if (this.currentDirection !== "right") {
  this.currentDirection = "left";
  if (this.oldY !== this.y) {
  this.speedY = 0;
  this.speedX = -1 * scale;
  };
  this.oldX = this.x;
  this.oldY = this.y;
};
};

Bike.prototype.moveRight = function() {
  if (this.currentDirection !== "left") {
  this.currentDirection = "right";
  if (this.oldY !== this.y) {
  this.speedY = 0;
  this.speedX = 1 * scale;
  };
  this.oldX = this.x;
  this.oldY = this.y;
};
};





var player4 = new Bike("yellow", myGame.canvas.width - scale, 0, 0, 1, "down");
var player3 = new Bike("green", 0, myGame.canvas.height - scale, 0, -1, "up");
var player2 = new Bike("red", myGame.canvas.width - scale, myGame.canvas.height - scale, -1, 0, "left");
var player1 = new Bike("blue", 0, 0, 1, 0, "right");



// function color(min, max) {
//   return Math.random() * (max - min) + min;
// };
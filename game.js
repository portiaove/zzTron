function starttera () {
  // botones.style.display = "none";
  var plyrs = parseInt(btnStart.value);
  if (plyrs>=4) {
    players = 4;
  } else if (plyrs == 3) {
    players=3;
  } else if (plyrs<=2) {
    players = 2;
  }
  
  botones.style.display = "none";
  myGame.start();
  aJugar();
}

function resettera () {
  botones.style.display = "flex";
  restart.style.display = "none";
  resetVars();
  myGame.canvas.style.display = "none";
}

function range(val) {
  if(val == 50) {
    gameVel = 65;
  }
  gameVel = val;    
}

var botones = document.getElementById("p");
var velRing = parseInt(document.getElementById("gameVel").value);
var btnStart = document.getElementById("plyrs");
var scale = 5;
var pausado = false;
var players;
var winner = [];
var gameVel = 60;
var counter = 3;
var name = "";
var timmer = 3;
var restart = document.getElementById("restart");

function resetVars() {
  botones = document.getElementById("p");
  velRing = parseInt(document.getElementById("gameVel").value);
  btnStart = document.getElementById("plyrs");
  scale = 5;
  pausado = false;
  players;
  winner = [];
  counter = 3;
  name = "";
  timmer = 3;
  restart = document.getElementById("restart");
};

var myGame = {
  canvas: document.getElementById("canvas"),
  start: function() {
    this.canvas.width = parseInt(document.getElementById("wi").value);
    this.canvas.height = parseInt(document.getElementById("he").value);
    this.canvas.style.background = "#434b4d";
    this.canvas.style.border = "1px solid green";
    this.canvas.style.display = "block";
    // this.canvas.zIndex = 1;
    this.context = this.canvas.getContext("2d");
    this.interval = setInterval(updateMyGame, gameVel);
  },
  pausa : function(opt) {
    this.context.font = "50px gameplay";
    this.context.fillStyle = "white";
    this.context.textAlign = "center";
    this.context.fillText(opt, this.canvas.width/2, this.canvas.height/2);
  },
  stop : function(winner) {
    clearInterval(this.interval);
    this.context.font = "50px gameplay";
    this.context.fillStyle = winner;
    this.context.textAlign = "center";
    var pole = winner + " wins!";
    this.context.fillText(pole, this.canvas.width/2, this.canvas.height/2);
    this.restart();
  },
  restart : function() {
    // restart.style.zIndex = "1";
    restart.style.top = "5px";
    restart.style.display = "block";
    
  }
}


function updateMyGame () {

  if (pausado) { //PAUSA
    myGame.pausa("Pause");
    return;
  }

  if (players === 2) { //2 JUGADORES
    myGame.context.clearRect(0, 0, myGame.canvas.width, myGame.canvas.height);

    player1.update();
    player2.update();
    player1.newPos();
    player2.newPos();

    if (player1.collision(player2.trail) ||
      player1.collision(player1.trail) ||  player1.bordes()) {
      player1.muerte();

    } else if (player2.collision(player1.trail) || 
      player2.collision(player2.trail) || player2.bordes()) {
      player2.muerte();
    };

  } else if (players === 3) { //3 JUGADORES
    myGame.context.clearRect(0, 0, myGame.canvas.width, myGame.canvas.height);

    player1.update();
    player2.update();
    player3.update();
    player1.newPos();
    player2.newPos();
    player3.newPos();
    // console.log(player1.y, player1.x);

    if (player1.collision(player1.trail) || player1.collision(player2.trail) || 
    player1.collision(player3.trail) || player1.bordes()) {
        player1.muerte();
        console.log(player1.color, player1.muerto);

    } else if (player2.collision(player1.trail) || player2.collision(player2.trail) || 
    player2.collision(player3.trail) || player2.bordes()) {
        player2.muerte();
        console.log(player2.color, player2.muerto);

    } else if (player3.collision(player1.trail) || player3.collision(player2.trail) || 
    player3.collision(player3.trail) || player3.bordes()) {
        player3.muerte();
        console.log(player3.color, player3.muerto);
    }; 

  } else if (players === 4) { //4 JUGADORES
    myGame.context.clearRect(0, 0, myGame.canvas.width, myGame.canvas.height);

    player1.update();
    player2.update();
    player3.update();
    player4.update();
    player1.newPos();
    player2.newPos();
    player3.newPos();
    player4.newPos();
    
      if (player1.collision(player1.trail) || player1.collision(player2.trail) || 
      player1.collision(player3.trail) || player1.collision(player4.trail) || player1.bordes()) {
      player1.muerte();
      console.log(player1.color, player1.muerto);

    } else if (player2.collision(player1.trail) || player2.collision(player2.trail) || 
    player2.collision(player3.trail) || player2.collision(player4.trail) || player2.bordes()) {
      player2.muerte();
      console.log(player2.color, player2.muerto);

    } else if (player3.collision(player1.trail) || player3.collision(player2.trail) || 
    player3.collision(player3.trail) || player3.collision(player4.trail) || player3.bordes()) {
      player3.muerte();
      console.log(player3.color, player3.muerto);

    } else if (player4.collision(player1.trail) || player4.collision(player2.trail) || 
    player4.collision(player3.trail) || player4.collision(player4.trail) || player4.bordes()) {
      player4.muerte();
      console.log(player4.color, player4.muerto);
    };
  };
};


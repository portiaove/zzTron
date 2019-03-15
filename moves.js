document.onkeydown = function(e) {
switch (e.keyCode) {
  case 87:
    player2.moveUp();
    break;
  case 83:
    player2.moveDown();
    break;
  case 65:
    player2.moveLeft();
    break;
  case 68:
    player2.moveRight();
    break;
  case 38:
    player1.moveUp();
    break;
  case 40:
    player1.moveDown();
    break;
  case 37:
    player1.moveLeft();
    break;
  case 39:
    player1.moveRight();
    break;
  case 89:
    player3.moveUp();
    break;
  case 72:
    player3.moveDown();
    break;
  case 71:
    player3.moveLeft();
    break;
  case 74:
    player3.moveRight();
    break;
  case 48:
    player4.moveUp();
    break;
  case 80:
    player4.moveDown();
    break;
  case 79:
    player4.moveLeft();
    break;
  case 222:
    player4.moveRight();
    break;
  case 16:
    pausado = !pausado; //PAUSA?
    break;
  }
};


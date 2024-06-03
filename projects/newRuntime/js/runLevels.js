var runLevels = function (window) {
  window.opspark = window.opspark || {};

  var draw = window.opspark.draw;
  var createjs = window.createjs;
  let currentLevel = 0;

  window.opspark.runLevelInGame = function (game) {
    // some useful constants
    var groundY = game.groundY;

    // this data will allow us to define all of the
    // behavior of our game
    var levelData = window.opspark.levelData;

    // set this to true or false depending on if you want to see hitzones
    game.setDebugMode(true);

    // TODOs 5 through 11 go here
    // BEGIN EDITING YOUR CODE HERE
    function createSawBlade(x,y){
var hitZone = 25
var damageFromObsticale = 10
var sawBlade = game.createObstacle(hitZone, damageFromObsticale)
sawBlade.x = 600 
sawBlade.y = groundY - 50

game.addGameItem(sawBlade)

var sawBladeImage = draw.bitmap("img/sawblade.png")
sawBlade.addChild(sawBladeImage)
sawBladeImage.x = -25
sawBladeImage.y = -25
sawBladeImage.scaleX = 1.0
sawBladeImage.scaleY = 1.0
}
createSawBlade(600, groundY - 50)
createSawBlade(800, groundY - 100)

var enemy = game.createGameItem("enemy", 25)
var redSquare = draw.rect(50, 50, "red")
redSquare.x = -25
redSquare.y = -25
enemy.addChild(redSquare)

enemy.x = 400
enemy.y = groundY - 50

game.addGameItem(enemy)    

enemy.velocityX = 1
enemy.velocityY = 0
enemy.rotatonalVelocity = 0
enemy.onPlayerCollison = function (){
  game.changeIntergrity(-10)
}
enemy.onProjectileCollision = function () {
  game.increaseScore(200)
  enemy.fadeOut()
}

function createEnemy(x, y) {
  var enemy = game.createGameItem("enemy", 25)
var redSquare = draw.rect(50, 50, "red")
redSquare.x = -25
redSquare.y = -25
enemy.addChild(redSquare)

enemy.x = 400
enemy.y = groundY - 50

game.addGameItem(enemy)    

enemy.velocityX = - 1
enemy.velocityY = 0
enemy.rotatonalVelocity = 0
enemy.onPlayerCollison = function (){
  game.changeIntergrity(-10)
}
enemy.onProjectileCollision = function () {
  game.increaseScore(200)
  enemy.fadeOut()
}
 }
 createEnemy(400, groundY - 100);
 createEnemy(800, groundY - 100);
createEnemy(1200, groundY - 50);

function createReward(x, y)

var marker = game.createGameItem("marker", )
    function startLevel() {
      // TODO 13 goes below here
var level = levelData[currentLevelData]
var levelObjects = level.gameitems
for (var i = 0; i < levelObjects.length; i++){
  if (currentLevel.type === "sawblade"){
    createSawBlade(current.x, current.y)
  } else if (current.type === "enemy"){
    createEnemy(current.x, current.y)
  } else if (current.type === "reward"){
    createreward(current.x, current.y)
  } else if (current.type === "marker"){
    createMarker(current.x, current.y)
  }
}

      //////////////////////////////////////////////
      // DO NOT EDIT CODE BELOW HERE
      //////////////////////////////////////////////
      if (++currentLevel === levelData.length) {
        startLevel = () => {
          console.log("Congratulations!");
        };
      }
    }
    startLevel();
  };
};

// DON'T REMOVE THIS CODE //////////////////////////////////////////////////////
if (
  typeof process !== "undefined" &&
  typeof process.versions.node !== "undefined"
) {
  // here, export any references you need for tests //
  module.exports = runLevels;
}

// Holds collections of the asteroids, bullets, and your ship.
// Game.prototype.step method calls Game.prototype.move on all the objects, and Game.prototype.checkCollisions checks for colliding objects.
// Game.prototype.draw(ctx) draws the game.
// Keeps track of dimensions of the space; wraps objects around when they drift off the screen.
const Asteroid = require("./asteroid.js");

const Game = function () {
  this.DIM_X = 100;
  this.DIM_Y = 100;
  this.NUM_ASTEROIDS = 20;
};

Game.prototype.addAsteroids = function(){
  this.asteroids = [];
  for (let i = 0; i < this.NUM_ASTEROIDS; i++) {
    let pos = this.randomPosition();
    let asteroid = new Asteroid(pos);
    this.asteroids.push(asteroid);
  }

  return this.asteroids;
};

Game.prototype.randomPosition = function(){
  let x = Math.random() * this.DIM_X;
  let y = Math.random() * this.DIM_Y;
  return ([x, y]);
};


Game.prototype.draw = function(ctx){

  ctx.clearRect(0, 0, this.DIM_X, this.DIM_Y);

  for (let i = 0; i < this.NUM_ASTEROIDS; i++) {
    this.asteroids[i].draw(ctx);
  }
};

Game.prototype.moveObjects = function() {
  for (let i = 0; i < this.NUM_ASTEROIDS; i++) {
    this.asteroids[i].move();
  }
};


module.exports = Game;

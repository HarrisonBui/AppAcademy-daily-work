// Stores a Game instance.
// Stores a canvas context to draw the game into.
// Installs key listeners to move the ship and fire bullets.
// Installs a timer to call Game.prototype.step.
const Game = require("./game.js");

const GameView = function (ctx, game) {
  this.ctx = ctx;
  this.game = game;
};


GameView.prototype.start = function(canvasEl) {

  const ctx = canvasEl.getContext("2d");


  const animateCallback = () => {
    this.game.moveObjects();
    this.game.draw(ctx);
      //this will call our animateCallback again, but only when the browser
      //is ready, usually every 1/60th of a second
      // requestAnimationFrame(animateCallback);
      setTimeout(animateCallback, 20);
      //if we didn't know about requestAnimationFrame, we could use setTimeout
      //setTimeout(animateCallback, 1000/60);
    };

    //this will cause the first render and start the endless triggering of
    //the function using requestAnimationFrame
    animateCallback();
};

module.exports = GameView;

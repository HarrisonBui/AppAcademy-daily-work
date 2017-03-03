const Util = require("./util.js");
const MovingObject = require("./moving_object.js");
const Game = require("./game.js");
const GameView = require("./game_view.js");
window.MovingObject = MovingObject;
window.Util = Util;
window.Game = Game;
window.GameView = GameView;

document.addEventListener("DOMContentLoaded", function(){
  const canvasEl = document.getElementById("game-canvas");
  canvasEl.width = Game.DIM_X;
  canvasEl.height = Game.DIM_Y;

  const ctx = canvasEl.getContext("2d");
  const game = new Game();
  new GameView(game, ctx).start();
});

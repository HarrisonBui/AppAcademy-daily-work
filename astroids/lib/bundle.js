/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId])
/******/ 			return installedModules[moduleId].exports;
/******/
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			exports: {},
/******/ 			id: moduleId,
/******/ 			loaded: false
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.loaded = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(0);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ function(module, exports, __webpack_require__) {

	const Util = __webpack_require__(1);
	const MovingObject = __webpack_require__(2);
	const Game = __webpack_require__(3);
	const GameView = __webpack_require__(5);
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


/***/ },
/* 1 */
/***/ function(module, exports) {

	const Util = {
	  inherits (childClass, parentClass) {
	    function Surrogate(){}
	    childClass.prototype = Object.create(parentClass.prototype);
	    childClass.prototype.constructor = childClass;
	  },
	  // Return a randomly oriented vector with the given length.
	  randomVec (length) {
	    const deg = 2 * Math.PI * Math.random();
	    return Util.scale([Math.sin(deg), Math.cos(deg)], length);
	  },
	  // Scale the length of a vector by the given amount.
	  scale (vec, m) {
	    return [vec[0] * m, vec[1] * m];
	  }
	};
	
	module.exports = Util;


/***/ },
/* 2 */
/***/ function(module, exports) {

	// MovingObject.prototype.isCollidedWith(otherMovingObject)
	
	const MovingObject = function (options){
	  this.pos = options.pos;
	  this.vel = options.vel;
	  this.radius = options.radius;
	  this.color = options.color;
	};
	
	MovingObject.prototype.draw = function(ctx){
	  ctx.fillStyle = this.color;
	  ctx.beginPath();
	
	  ctx.arc(
	    this.pos[0],
	    this.pos[1],
	    this.radius,
	    0,
	    2 * Math.PI,
	    false
	  );
	
	  ctx.fill();
	};
	
	MovingObject.prototype.move = function () {
	  console.log(this.pos);
	  this.pos[0] += this.vel[0];
	  this.pos[1] += this.vel[1];
	};
	
	const mo = new MovingObject(
	  { pos: [30, 30], vel: [10, 10], radius: 5, color: "#00FF00"}
	);
	
	
	module.exports = MovingObject;


/***/ },
/* 3 */
/***/ function(module, exports, __webpack_require__) {

	// Holds collections of the asteroids, bullets, and your ship.
	// Game.prototype.step method calls Game.prototype.move on all the objects, and Game.prototype.checkCollisions checks for colliding objects.
	// Game.prototype.draw(ctx) draws the game.
	// Keeps track of dimensions of the space; wraps objects around when they drift off the screen.
	const Asteroid = __webpack_require__(4);
	
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


/***/ },
/* 4 */
/***/ function(module, exports, __webpack_require__) {

	const Util = __webpack_require__(1);
	const MovingObject = __webpack_require__(2);
	
	Util.inherits(Asteriod, MovingObject);
	
	function Asteriod(pos) {
	  MovingObject.call(this, {pos: pos, vel: Util.randomVec(20), radius: 5, color: "#00FF00"});
	}
	
	module.exports = Asteriod;


/***/ },
/* 5 */
/***/ function(module, exports, __webpack_require__) {

	// Stores a Game instance.
	// Stores a canvas context to draw the game into.
	// Installs key listeners to move the ship and fire bullets.
	// Installs a timer to call Game.prototype.step.
	const Game = __webpack_require__(3);
	
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


/***/ }
/******/ ]);
//# sourceMappingURL=bundle.js.map
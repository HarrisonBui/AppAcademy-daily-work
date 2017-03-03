const Util = require("./util.js");
const MovingObject = require("./moving_object.js");

Util.inherits(Asteriod, MovingObject);

function Asteriod(pos) {
  MovingObject.call(this, {pos: pos, vel: Util.randomVec(20), radius: 5, color: "#00FF00"});
}

module.exports = Asteriod;

Function.prototype.inherits1 = function(parent){

  function Surrogate(){}
  Surrogate.prototype = parent.prototype;
  this.prototype = new Surrogate();
  this.prototype.constructor = this;
};

Function.prototype.inherits2 = function(parent){

  function Surrogate(){}
  this.prototype = Object.create(parent.prototype);
  this.prototype.constructor = this;
};



function Animal (name) {
  this.name = name;
}

Animal.prototype.sayHello = function () {
  console.log("Hello, my name is " + this.name);
};



function Dog (name) {
  Animal.call(this, name);
}

// Dog.inherits1(Animal); // Dog now inherits from Animal
Dog.inherits2(Animal); // Dog now inherits from Animal

Dog.prototype.bark = function () {
  console.log("Bark!");
};

const liesel = new Dog("Liesel");

liesel.bark();
liesel.sayHello();

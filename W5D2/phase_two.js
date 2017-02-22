function titleize(array, cb){
  let result = array.map((el) =>  cb(el));

  return result;
}

function printCallback(item) {
  return `Mx. ${item} Jingleheimer Schmidt`;
}

// console.log(titleize(["Mary", "Brian", "Leo"], printCallback));

function Elephant(name, height) {
  this.name = name;
  this.height = height;
  this.tricks = [];
}

Elephant.prototype.trumpet = function() {
  console.log(`${this.name} the elephant goes 'phrRRRRRRRRRRR!!!!!!!'`);
};

Elephant.prototype.grow = function(){
  this.height += 12;
};

Elephant.prototype.addTrick = function(trick) {
  this.tricks.push(trick);
};

Elephant.prototype.play = function() {
  let index = Math.floor(Math.random()*(this.tricks.length));
  console.log(`${this.name} is ${this.tricks[index]}`);
};

Elephant.paradeHelper = function(elephant){
  return `${elephant.name} is trotting by!`;
};

let ellie = new Elephant("Ellie", 185, ["giving human friends a ride", "playing hide and seek"]);
let charlie = new Elephant("Charlie", 200, ["painting pictures", "spraying water for a slip and slide"]);
let kate = new Elephant("Kate", 234, ["writing letters", "stealing peanuts"]);
let micah = new Elephant("Micah", 143, ["trotting", "playing tic tac toe", "doing elephant ballet"]);

let herd = [ellie, charlie, kate, micah];

// herd.forEach((el) => console.log(Elephant.paradeHelper(el)));

function dinerBreakfast(newOrder) {
  let order = "scrambled eggs";

  function addOrder(){
    order += newOrder;
  }

  return `I'd like cheesy ${order} please`;
}

let bfastOrder = dinerBreakfast();
console.log(bfastOrder);
console.log(bfastOrder("chocolate chip pancakes"));

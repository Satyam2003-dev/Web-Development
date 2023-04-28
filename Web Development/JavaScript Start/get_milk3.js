function get_milk(money, costperbottle) {
  console.log("Leave house");
  console.log("move right");
  console.log("move right");
  console.log("move up");
  console.log("move up");
  console.log("move up");
  console.log("move up");
  console.log("move right");
  console.log("move right");
  console.log("buy " + calcBottles(money, costperbottle) + " bottles of milk");
  console.log("move left");
  console.log("move left");
  console.log("move down");
  console.log("move down");
  console.log("move down");
  console.log("move down");
  console.log("move left");
  console.log("move left");
  return calcChange(money, costperbottle);
}

function calcBottles(startingmoney, costperbottle) {
  var noOfBottles = Math.floor(startingmoney / costperbottle);
  return noOfBottles;
}

function calcChange(startingamount, costperbottle) {
  var change = startingamount % costperbottle;
  return change;
}
console.log("Hello master, here is your " + get_milk(210, 20) + " rupee change."); 

// here 20 is cost per bottles and 210 is money given.

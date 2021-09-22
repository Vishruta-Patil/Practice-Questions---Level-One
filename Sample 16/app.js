const detail1 = {
  name: "Ram",
  power: 500,
  yuga: "treta",
};

const detail2 = {
  name: "Krishna",
  power: 2325,
  yuga: "Dwapar",
};

function toFindtotalPower(obj) {
  var n = obj.name.length;
  charPower = n * 35;
  var totalPower = obj.power + charPower;
  return totalPower;
}

function maxPower(obj1, obj2) {
  return toFindtotalPower(obj1) > toFindtotalPower(obj2) ? obj1 : obj2;
}

var result = maxPower(detail1, detail2);
console.log("The max power is", toFindtotalPower(result), "of", result.name);

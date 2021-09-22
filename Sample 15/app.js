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

function maxpower(obj1, obj2) {
  return obj1.power > obj2.power ? obj1 : obj2;
}

const result = maxpower(detail1, detail2);

console.log("The max age is", result.power, "of", result.name);

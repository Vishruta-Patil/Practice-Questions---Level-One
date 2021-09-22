const detail1 = {
  name: "Ram",
  age: 25,
  yuga: "Treta",
};

const detail2 = {
  name: "Krishna",
  age: 31,
  yuga: "Dwapar",
};

function maxAge(obj1, obj2) {
  if (obj1.age > obj2.age) {
    console.log(obj1.name);
  } else console.log(obj2.name);
}

maxAge(detail1, detail2);

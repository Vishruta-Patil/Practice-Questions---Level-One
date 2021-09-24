const readlineSync = require("readline-sync");

var name = [];
var unitTestMarks = [];
var preFinalMarks = [];
var finalMarks = [];

for (var i = 0; i < 3; i++) {
  name[i] = readlineSync.question("What is your name? ");
  unitTestMarks[i] = readlineSync.question(
    "How much did you score in the unit test? "
  );
  preFinalMarks[i] = readlineSync.question(
    "How much did you score in the pre final Test? "
  );
  finalMarks[i] = readlineSync.question(
    "How much did you score in the final Test? "
  );
  console.log("\n");
}

function MaxIndex(marksOfTest) {
  return marksOfTest.reduce((iMax, x, i, arr) => (x > arr[iMax] ? i : iMax), 0);
}

function averageMarks(marksOfTest) {
  return marksOfTest.reduce((avg, x) => Number(avg) + Number(x), 0);
}

console.log(
  "Highest marks scored in Unit Test are " +
    Math.max(...unitTestMarks) +
    " by " +
    name[MaxIndex(unitTestMarks)] +
    "\n"
);

console.log(
  "Highest marks scored in pre final test are " +
    Math.max(...preFinalMarks) +
    " by " +
    name[MaxIndex(preFinalMarks)] +
    "\n"
);

console.log(
  "Highest marks scored in  final test are " +
    Math.max(...finalMarks) +
    " by " +
    name[MaxIndex(finalMarks)] +
    "\n"
);

console.log(
  "Average marks in Unit test are " + averageMarks(unitTestMarks) / 3 + "\n"
);

console.log(
  "Average marks in pre final test are " +
    averageMarks(preFinalMarks) / 3 +
    "\n"
);

console.log(
  "Average marks in final test are " + averageMarks(finalMarks) / 3 + "\n"
);

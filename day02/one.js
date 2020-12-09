const fs = require("fs");
let legitPassword = 0;
let part2Password = 0;
const input = fs
  .readFileSync("input.txt")
  .toString()
  .replace("\r", "")
  .split("\n");
for (const i in input) {
  if (i != input.length - 1) {
    getValues(input[i].split(" "));
  }
}
function getValues(val) {
  let between = val[0].split("-");
  //Part 2 modified
  let first = between[0] - 1;
  let second = between[1] - 1;

  let checkVal = val[1].replace(":", "");

  let password = val[2];
  part1(first, second, checkVal, password);
  part2(first, second, checkVal, password);
}

function part1(first, second, checkVal, password) {
  let charOccured = 0;
  let passwordSplitted = password.split("");

  for (i = 0; i < password.length; i++) {
    if (passwordSplitted[i] === checkVal) {
      charOccured++;
    }
  }
  if (charOccured >= first && charOccured <= second) {
    legitPassword++;
  }
}
function part2(first, second, checkVal, password) {
  let passwordSplitted = password.split("");
  if (
    (passwordSplitted[first] === checkVal) ^
    (passwordSplitted[second] === checkVal)
  ) {
    part2Password++;
  }
}

console.log(legitPassword);
console.log(part2Password);

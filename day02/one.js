const fs = require("fs");
const { get } = require("http");
let legitPassword = 0;
let part2Password = 0;
const input = fs
  .readFileSync("input.txt")
  .toString()
  .replace("\r", "")
  .split("\n");
//these one works.
/*
getValues(input[0].split(" "));
getValues(input[1].split(" "));
getValues(input[2].split(" "));
*/
// this doesnt

for (const i in input) {
  if (i != input.length - 1) {
    getValues(input[i].split(" "));
  }
}

/*
for (i = 0; i < input.length; i++) {
    console.log("eka", i)
    getValues(input[i].split(" "));
    console.log("ite", i);
  
}
*/
function getValues(val) {
  let between = val[0].split("-");
  let first = between[0];
  let second = between[1];

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
  accepted = false;
  if (
    passwordSplitted[first] == checkVal &&
    passwordSplitted[second] != checkVal
  ) {
    accepted = true;
  }
  if (
    passwordSplitted[first] != checkVal &&
    passwordSplitted[second] == checkVal
  ) {
    accepted = true;
  }
  if (
    passwordSplitted[first] == checkVal &&
    passwordSplitted[second] == checkVal
  ) {
    accepted = false;
  }

  if (accepted == true) {
    part2Password++;
  }
}

console.log(legitPassword);
console.log(part2Password);

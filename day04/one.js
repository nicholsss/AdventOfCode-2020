const fs = require("fs");
const input = fs.readFileSync("input.txt", {encoding: 'utf-8'}).trim().split("\n\r")
const lines = input.map(item => item.split("\n").map(line => line.split(" ")))

let passport = {
    byr : undefined,
    iyr : undefined,
    eye : undefined,
    hgt : undefined,
    hcl : undefined,
    ecl : undefined,
    pid : undefined,
    cid : undefined,
}


console.log(passport)
console.log(lines)
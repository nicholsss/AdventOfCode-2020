const fs = require('fs');


const input = fs.readFileSync("input.txt")
    .toString().replace('\r',"")
    .split("\n")
    
    console.log(input)
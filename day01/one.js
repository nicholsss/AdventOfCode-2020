const fs = require('fs');


const input = fs.readFileSync("input.txt")
    .toString()
    .split("\n")
    .map(Number)


for (i in input) {
    for (k in input) {
        if ((input[i] + input[k]) === 2020) {
            console.log(input[i] * input[k])
        }
    }
}

for (i in input) {
    for (k in input) {
        for (j in input) {
            if (input[i] + input[k] + input[j] === 2020 )
                console.log(input[i] * input[k] * input[j])
                
        }
    }
}

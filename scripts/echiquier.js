let ouput = "";
let size = 8;
for( x = 0 ; x < size ; x++) {
    for(y = 0 ; y < size ; y++) {
        if((x+y) % 2 == 0) {
            ouput += " ";
        }else {
            ouput += "#"
        }
    }
    ouput += "\n";
}
console.log(ouput);

let board = "";
for(let a = 0 ; a < 8 ; a++) {
    for(let b = 0 ; b < 8 ; 8++) {
        board += (a % 2) == (b % 2) ? " " : "#";
    }
    board += "\n";
}

console.log(board);
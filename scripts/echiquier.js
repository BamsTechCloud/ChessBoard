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

let chessboard = "";
let sizes = 8;
let conditionTernaire;
for(let x_offset = 0 ; x_offset < sizes ; x_offset++) {
    conditionTernaire = (x_offset % 2) ? "# " : " #";
    for(let y_offset =0 ; y_offset < sizes/2 ; y_offset++) {
        chessboard += conditionTernaire;
    }
    chessboard += "\n";
}

console.log(chessboard);
/*let board = "";
let condition;
for(let a = 0 ; a < 8 ; a++) {
    condition = (a % 2) ? " " : "#";
    for(let b = 0 ; b < 8/2 ; 8++) {
        board += condition;
    }
    board += "\n";
}

console.log(board);
*/
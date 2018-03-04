
const UNASSIGNED = 0;

module.exports = function solveSudoku(matrix) {
    return solvematrix(matrix);
}   

function solvematrix(matrix) {
    for (var row = 0; row < 9; row++) {
        for (var col = 0; col < 9; col++) {
            if (matrix[row][col] == UNASSIGNED){
                for (var number = 1; number <= 9; number++) {
                    if (isAllowed(row, col, number)) {
                        matrix[row][col] = number;
                        if (solvematrix()) {
                            return true;
                        } else {
                            matrix[row][col] = UNASSIGNED;
                        }
                    }
                }
                return false;
            }
        }
    }
    return true;
}

function containsInRow(row, number) {
    for (var i = 0; i < 9; i++) {
        if (matrix[row][i] == number) {
            return true;
        } else return false;
    }
}

function containsInCol(col, number) {
    for (var i = 0; i < 9; i++) {
        if (matrix[i][col] == number) {
            return true;
        } else return false;
    }
}

function containsInBox(row, col, number) {
    var r = row - row % 3;
    var c = col - col % 3;

    for (i = r; i < r + 3; i++) {
        for (j = c; j < c + 3; j++) {
            if (matrix[i][j] == number) {
                return true;
            } else return false;
        }
    }
}

function isAllowed(row, col, number) {
    return !(containsInRow(row, number) || containsInCol(col, number) || containsInBox(row, col, number));
}
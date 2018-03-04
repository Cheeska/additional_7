
  ///module.exports =

function solveSudoku(matrix) {
    var UNASSIGNED = 0;

    function solvematrix() {
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

    return  solvematrix();
}



const initial = [
    [5, 3, 4, 6, 7, 8, 9, 0, 0],
    [6, 7, 2, 1, 9, 5, 3, 4, 8],
    [1, 9, 8, 3, 4, 2, 5, 6, 7],
    [8, 5, 9, 7, 6, 1, 4, 2, 3],
    [4, 2, 6, 8, 5, 3, 7, 9, 1],
    [7, 1, 3, 9, 2, 4, 8, 5, 6],
    [9, 6, 1, 5, 3, 7, 2, 8, 4],
    [2, 8, 7, 4, 1, 9, 6, 3, 5],
    [3, 4, 5, 2, 8, 6, 1, 7, 9]
];

console.log(solveSudoku(initial));


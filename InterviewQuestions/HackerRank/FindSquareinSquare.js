const readline = require('readline');

function findLargestSquare(matrix, n)
{
    var sizes_matrix = matrix;
    var max = 0;

    for(var r = 1; r < n; r++)
    {
        for(var c = 1; c < n; c++)
        {
            if(sizes_matrix[r][c] == 1)
            {
                sizes_matrix[r][c] = Math.min(sizes_matrix[r-1][c], Math.min(sizes_matrix[r][c-1], sizes_matrix[r-1][c-1])) + 1;
                max = Math.max(max,sizes_matrix[r][c]);
            }
        }
    }

    console.log(sizes_matrix);
    return max;

}

function main()
{
    var arr = [
        [1,1,1,1,1],
        [1,1,1,1,1],
        [1,1,1,1,1],
        [1,1,1,1,1],
        [1,1,1,1,1]
    ];

    console.log(findLargestSquare(arr,5));
}

main();
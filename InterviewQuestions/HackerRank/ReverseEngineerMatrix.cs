    static int[][] findMatrix(int[][] after) {
        int n = after.GetLength(0);
        int m = after.GetLength(1);
        int s = 0;
        
        int[][] before = new int[n][m];
        
        for(int i = 0; i < n; i++)
        {
            for(int j = 0; j < m; j++ )
            {
                s = before[i][j] = after[i][j] - s;
            }
            s = after[i][0];
        }
        
    }
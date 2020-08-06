public class CalcNumOfSpaces(int n, int k, int q_c, int q_c, int[][] obstacles)
{
    List<Set<int,int>> queensspaces = new List<Se<int,int>t>();

    // Vertical
    for(int i = 0; i < n; i++)
    {
        if(i != q_c) queensspaces.Add(new Set(i,q_r));
    }
    

    // Horizontal
    for(int i = 0; i < n; i++)
    {
        if(i != q_r) queensspaces.Add(new Set(q_c,i));
    }

    //Diagonal
    for(int i = 0; i < n; i++)
    {
        
    }

    0C0C               
    CCC0
    CQCC  2,2,4 => 11  
    CCC0

    2(N-1) + 5

    CCCQ
    00CC
    0C0C 4,4,4 => 9
    C00C

    2(N-1) + 3

    00CC
    CCCQ
    00CC 4,3,3 => 8
    0C0C

    2(n-1) + 2


}
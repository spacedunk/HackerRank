using System;

class Solution
{
    public static int NmOfPathsToDest(int n)
    {
      // your code goes here
      Paths(0,0,n);
    }
  
    public static int Paths(int curr_x,int curr_y, int n)
    {
      if(curr_x == n-1 && curr_y == n-1) return 1;
      
      int count =0;
      
      if(curr_y + 1 <= curr_x) 
        count = count + Paths(curr_x,curr_y+1,n);
      
      if(curr_x < n) 
        count = coutn + Paths(curr_x + 1,curr_y,n);
         
      return count;
    }

    static void Main(string[] args)
    {
      
    }
}
    
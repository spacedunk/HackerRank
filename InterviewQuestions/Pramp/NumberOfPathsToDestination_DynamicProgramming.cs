using System;
using System.Collections.Generic;

class Solution
{
    public static int NumOfPathsToDest(int n)
    {
      // your code goes here
      return NumOfPathsToDestUtil(n-1,0, new int[n,n]);
    }
  
    public static int NumOfPathsToDestUtil(int row, int col, int[,] mem)
    {
      int n = mem.GetLength(0);
      
      if(row==0 && col==n-1)
        return 1;
      
      if(mem[row,col] > 0)
          return  mem[row,col];
      
      int count=0;
      var moveList = GetValidMove(row, col, mem);
      foreach(Cell cell in moveList)
      {
          count = count + NumOfPathsToDestUtil(cell.row, cell.col,mem);
      }
      mem[row,col] = count;
      return count;
    }
  
    public static List<Cell> GetValidMove(int row, int col,int[,] mem)
    {
         int n = mem.GetLength(0);
         List<Cell> moveList = new List<Cell>();
         int newRow = row - 1;
         if( (newRow + col) >= n-1 )
         {
             moveList.Add(new Cell(newRow,col));
         }
      
         int newCol = col + 1;
         if(newCol < n)
         {
             moveList.Add(new Cell(row,newCol));
         }
      
         return moveList;
    }

    static void Main(string[] args)
    {
      //35357670
        Console.WriteLine(NumOfPathsToDest(17));
    }
  
  
}

public class Cell{
    public Cell(int row, int col)
    {
        this.row = row;
        this.col = col;
    }
    public int row;
    public int col;
  }


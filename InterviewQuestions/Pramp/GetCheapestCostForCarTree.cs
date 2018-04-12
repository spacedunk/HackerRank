using System;

class Solution
{
  public class Node
  {
    public int cost;
    public Node[] children;
    public Node parent;
  }
    
  public static int getCheapestCost(Node rootNode)
  {
    // your code goes here
    if(rootNode == null) return 0;
    
    if(rootNode.children == null) return rootNode.cost;
    else
    {
      int minCost = Int32.MaxValue;// mincost = 2;
      for(int i = 0; i < rootNode.children.Length; i++) // ignore child 2 
      {
        minCost = Math.Min(minCost,getCheapestCost(rootNode.children[i])); // Math.Min(2,4)
      }
      return minCost + rootNode.cost;
    }
    
    return -1;
  }

  static void Main(string[] args)
  {
        
  }
  
  
}

// https://www.pramp.com/img/content/img_01.png
//     0
//   2   4
//      4 5



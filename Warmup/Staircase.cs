//Staircase

using System;
using System.Collections.Generic;
using System.IO;
using System.Linq;
class Solution {

    static void Main(String[] args) {
        int n = Convert.ToInt32(Console.ReadLine());
        List<String> stairs = BuildStairs(n);
        foreach(String s in stairs)
        {
          Console.WriteLine(s);  
        }
    }
    static List<String> BuildStairs(int n)
    {
        List<String> temp = new List<String>();
        for(int i = 1; i <= n; i++)
        {
            temp.Add(SingleStair(n,i));
        }
        return temp;
    }
    static String SingleStair(int n, int i)
    {
        String temp = "";
        for(int j = 1; j <= n-i; j++)
        {
            temp += " ";
        }
        
        for(int k = n-i;k < n;k++)
        {
            temp += "#";
        }
        
        return temp;
    }
}

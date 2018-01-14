/*
Lily has a chocolate bar consisting of a row of  squares where each square has an integer written on it. She wants to share it with Ron for his birthday, which falls on month  and day . Lily wants to give Ron a piece of chocolate only if it contains  consecutive squares whose integers sum to .

Given , , and the sequence of integers written on each square of Lily's chocolate bar, how many different ways can Lily break off a piece of chocolate to give to Ron?

For example, if ,  and the chocolate bar contains  rows of squares with the integers written on them from left to right, the following diagram shows two ways to break off a piece:



Input Format

The first line contains an integer denoting  (the number of squares in the chocolate bar). 
The second line contains  space-separated integers describing the respective values of  (the numbers written on each consecutive square of chocolate). 
The third line contains two space-separated integers describing the respective values of  (Ron's birth day) and  (Ron's birth month).
*/
using System;
using System.Collections.Generic;
using System.IO;
using System.Linq;
class Solution {

    static int solve(int n, int[] s, int d, int m){
        //n = 6
        //s = [9,3,23,5,15]
        // d = 28
        // m = 2

        for (int i = m-1; i < sizeof(s)-m-1;i++ )
        {
            for(int j = )
        }
    }

    static void Main(String[] args) {
        int n = Convert.ToInt32(Console.ReadLine());
        string[] s_temp = Console.ReadLine().Split(' ');
        int[] s = Array.ConvertAll(s_temp,Int32.Parse);
        string[] tokens_d = Console.ReadLine().Split(' ');
        int d = Convert.ToInt32(tokens_d[0]);
        int m = Convert.ToInt32(tokens_d[1]);
        int result = solve(n, s, d, m);
        Console.WriteLine(result);
    }
}
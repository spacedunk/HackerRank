using System;
using System.Collections.Generic;
using System.IO;
using System.Linq;
class Solution {

    static int[] climbingLeaderboard(int[] scores, int[] alice) {
        //Remove Dupes from Array
        //Sort the scores in reverse order
        //Check if current index is greater than alice score
        //If yes output that index and record current index

        int[] no_dupes = scores.Distinct().ToArray();
        Array.Sort(no_dupes); //O(N scores * logN of scores)
        int[] output = new int[alice.Length];
        int i_alice = 0;
        int i_scores = 0;
        while(i_alice < alice.Length) //O(N of alice)
        {
            if(i_scores >= no_dupes.Length)
            {
                output[i_alice] = 1;
                i_alice++;
            }
            else if(alice[i_alice] < no_dupes[i_scores])
            {
                output[i_alice] = (no_dupes.Length - i_scores) + 1;
                i_alice++;
            }
            else if( alice[i_alice] == no_dupes[i_scores])
            {
                output[i_alice] = no_dupes.Length - i_scores;
                i_alice++;
            }
            else
            {
                i_scores++;
            }
        }

        return output;
    }

    static void Main(String[] args) {
        int n = Convert.ToInt32(Console.ReadLine());
        string[] scores_temp = Console.ReadLine().Split(' ');
        int[] scores = Array.ConvertAll(scores_temp,Int32.Parse);
        int m = Convert.ToInt32(Console.ReadLine());
        string[] alice_temp = Console.ReadLine().Split(' ');
        int[] alice = Array.ConvertAll(alice_temp,Int32.Parse);
        int[] result = climbingLeaderboard(scores, alice);
        Console.WriteLine(String.Join("\n", result));
    }
    
}

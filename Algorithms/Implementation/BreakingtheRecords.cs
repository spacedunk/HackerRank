//Breaking the Records

/*
Maria plays  games of college basketball in a season. Because she wants to go pro, she tracks her points scored per game sequentially in an array defined as . After each game , she checks to see if score  breaks her record for most or least points scored so far during that season.

Given Maria's array of  for a season of  games, find and print the number of times she breaks her record for most and least points scored during the season.

Note: Assume her records for most and least points at the start of the season are the number of points scored during the first game of the season.
 */
using System;
using System.Collections.Generic;
using System.IO;
using System.Linq;

class Solution {

    static int[] breakingRecords(int[] score) {
        int countMin = 0 , countMax = 0;
        int min, max;
        min = max = score[0];
        for(int i = 1; i < score.Length; i++)
        {
            if(score[i] < min)
            {
                countMin++;
                min = score[i];
            }

            if(score[i] > max)
            {
                countMax++;
                max = score[i];
            }
        }

        return new int[2]{countMax,countMin};
    }

    static void Main(String[] args) {
        int n = Convert.ToInt32(Console.ReadLine());
        string[] score_temp = Console.ReadLine().Split(' ');
        int[] score = Array.ConvertAll(score_temp,Int32.Parse);
        int[] result = breakingRecords(score);
        Console.WriteLine(String.Join(" ", result));


    }
}
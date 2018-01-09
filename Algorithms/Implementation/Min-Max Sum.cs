//Min-Max Sum

using System;
using System.Collections.Generic;
using System.IO;
class Solution {
    static void Main(String[] args) {
        string[] input = Console.ReadLine().Split(' ');
        Int64[] num = Array.ConvertAll(input,Int64.Parse);
        GetMinMax(num);
    }
    static void GetMinMax(Int64[] num)
    {
        Int64 CurrentSmallest,CurrentLargest,Max,Min;
        int i = 1;
        
        CurrentSmallest = CurrentLargest = Max = Min = num[0];
        GetMinMax(num,CurrentSmallest,CurrentLargest,Min,Max,i);
    }
    static void  GetMinMax(Int64[] num,Int64 CurrentSmallest,Int64 CurrentLargest,Int64 Min, Int64 Max,int i)
    {
        if(i == 4)
        {
            
            if(num[i] > CurrentSmallest)
            {
                Max -= CurrentSmallest;
                Max += num[i];
            }
            else if(num[i] < CurrentLargest)
            {
                Max -= CurrentLargest;
                Max += num[i];
            }

            Console.WriteLine(Min +  " " + Max);
        }
        else
        {
            
            if(num[i] < CurrentSmallest)
            {
                CurrentSmallest = num[i];
            }
            
            if(num[i] > CurrentLargest)
            {
                CurrentLargest = num[i];
            }
            
            Min += num[i];
            Max += num[i];
            
            GetMinMax(num,CurrentSmallest,CurrentLargest,Min,Max,++i);
        }
    }
}
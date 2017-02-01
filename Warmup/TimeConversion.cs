//TimeConversion.cs

using System;
using System.Collections.Generic;
using System.IO;
using System.Linq;
class Solution {

    static void Main(String[] args) {
        string time = Console.ReadLine();
        String output = TwentyFourHRFormat(time);
        Console.WriteLine(output);
    }
    static String TwentyFourHRFormat(string time)
    {
       String temp = "";
       String[] hhmmss = null;
       Int32 hours = 0;
       temp = StripPM(time);
       hhmmss = SplitHourMinutesSeconds(temp);
        if(isPM(time))
       {
          
           hours = ConvertStringToInt(hhmmss[0]);
           hours = ConverHoursTo24(hours);
           hhmmss[0] = ConvertIntToString(hours);
           temp = ReConstructTimeString(hhmmss);
       }
       else if(!isPM(time) && hhmmss[0] == "12")
       {
           
           hhmmss[0] = "00";
           temp = ReConstructTimeString(hhmmss); 
       }
       return temp;
    }
    static bool isPM(string time)
    {
        String temp = time.Substring(time.Length - 2);
        return (temp == "PM"? true : false);
    }
    static String StripPM(string time)
    {
        String temp = time.Substring(0,time.Length - 2);
        return temp;
    }
    static String[] SplitHourMinutesSeconds(string time)
    {
        String[] temp = time.Split(':');
        return temp;
    }
    static Int32 ConvertStringToInt(string hours)
    {
        return Int32.Parse(hours);
    }
    static Int32 ConverHoursTo24(Int32 hours)
    {
        if(hours > 11) return hours;
        else return hours + 12;
    }
    static String ConvertIntToString(Int32 hours)
    {
        return hours.ToString();
    }
    static String ReConstructTimeString(String[] times)
    {
        return times[0] + ':' + times[1] + ':' + times[2];
    }
}
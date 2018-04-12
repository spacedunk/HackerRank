// Copyright 2016-2018 Karat, Inc.  Please do not distribute or republish.

using System;
using System.Collections.Generic;

// Expected output (in any order):
// 1320    com
//  900    google.com
//  410    yahoo.com
//   60    mail.yahoo.com
//   10    mobile.sports.yahoo.com
//   50    sports.yahoo.com
//   10    stackoverflow.com
//    3    org
//    3    wikipedia.org
//    2    en.wikipedia.org
//    1    es.wikipedia.org


/*
Array.Split(,) "900", "google.com"
Array.Split(.) google. com

Dictionary<string, int> 
*/

class Solution
{
    // Your function here:
    public static Dictionary<string,int> GetCounts(String[] counts)
    {
        //Check counts has values if not return
        if(counts.Length <= 0) return null;
        
        Dictionary<string,int> domains = new Dictionary<string,int>();
        Dictionary<string,int> multi_domains = new Dictionary<string,int>();
        string[] diff_domains;
        
        //Loop through counts getting the domain and click count as seperate entries
        domains = GetDomainsCounts(counts);
        
        //Loop thorugh  all domains and split domain into multiple
        foreach(KeyValuePair<string,int> x in domains)
        {
            string s1 = x.Key;
            string s2 = "";
            diff_domains = s1.Split('.');
            for(int i = diff_domains.Length-1; i >= 0; i--)
            {
                s2 =  diff_domains[i] + s2;
                if(multi_domains.ContainsKey(s2))
                {
                    multi_domains[s2] += x.Value;
                }
                else
                {
                    multi_domains.Add(s2,x.Value);
                }
                s2 = '.' + s2;
            }
        }
        
        return multi_domains;
    }
    
    public static Dictionary<string,int> GetDomainsCounts(String[] counts)
    {
        Dictionary<string,int> temp = new Dictionary<string,int>();
        string[] row = new string[2];
        
        foreach(string s in counts)
        {
            row = s.Split(",");
            temp.Add(row[1],Int32.Parse(row[0]));
            
        }
        
        return temp;
    }
    
    // "clicks, domain"
    static String[] counts = {
        "900,google.com",
        "60,mail.yahoo.com",
        "10,mobile.sports.yahoo.com",
        "40,sports.yahoo.com",
        "300,yahoo.com",
        "10,stackoverflow.com",
        "2,en.wikipedia.org",
        "1,es.wikipedia.org" };
    
    static void Main(string[] args)
    {
         Dictionary<string,int> x = new Dictionary<string,int>();
         x = GetCounts(counts);
        
        
        foreach(KeyValuePair<string,int> p in x)
        {
            Console.WriteLine(p.Value + " , " + p.Key);
        }

    }
}


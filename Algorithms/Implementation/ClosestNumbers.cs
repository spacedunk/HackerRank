
    /*
     * Complete the function below.
     */
    static void closestNumbers(int[] numbers) {
        int currentMin = Int32.MaxValue;
        Array.Sort(numbers);
        
        for(int i = numbers.Length -1; i > 0; --i)
        {
            currentMin = Math.Min(Math.Abs((numbers[i] - numbers[i-1])), currentMin);
        }
        
        for(int i = 0; i < numbers.Length -1; i++)
        {
            if(Math.Abs((numbers[i] - numbers[i+1])) == currentMin)
                Console.WriteLine(numbers[i] + " " + numbers[i+1]);
        }

    }

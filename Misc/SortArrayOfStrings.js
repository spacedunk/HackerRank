//SortArrayOfStrings.js

//Given an unordered set of strings sort using quicksort method

const words = ['riec','vaana','emit','noam'];
const sorted_words = [];

function SortArrayOfStrings(data)
{
    SortElementsInArray(data);
    SortArray(data);
}

function SortElementsInArray(data)
{
    
    data.forEach(function(element){
        quickSortStringHelper(element)
    });
}

function quickSortStringHelper(data)
{
    quickSortString(data,0,data.length-1);
} 

function quickSortString(data, start, end)
{
    if (start >= end)
    {
        return;
    }
    var pivot = parseInt((end + start) / 2);
    var index = partition(data, start , end , pivot);
    quickSortString(data, start, index-1);
    quickSortString(data, index, end);
}

function partition(data, start, end , pivot)
{
    while (start <= end){
        while(data.charAt(start) < data.charAt(pivot))
        {
            start++;
        }
        while(data.charAt(pivot) < data.charAt(end))
        {
            end--;
        }

        if(start <= end)
        {
            data = swap(data,start,end);
            start++;
            end--;
        }
    }
    return start;
}

function swap(data,a,b)
{
    var temp = data.charAt(a);
    data[a] = data[b];
    data[b] = temp;

    return data;
}
console.log(words);
SortElementsInArray(words);
console.log(words);
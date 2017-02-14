#! /usr/bin/python
'''
Problem Statement

Given a squared sized grid G of size 
N in which each cell has a lowercase letter. Denote the 
character in the ith row and in the 
jth column as 
G[i][j].

You can perform one operation as many times as you like: Swap two column adjacent characters in the same row G[i][j] and 
G[i][j+1] for all valid 
i,j. 

Is it possible to rearrange the grid such that the following condition is true?

G[i][1]≤G[i][2]≤⋯≤G[i][N] for 
1≤i≤N and
G[1][j]≤G[2][j]≤⋯≤G[N][j] for 
1≤j≤N

In other words, is it possible to rearrange the grid such that every row and every column is lexicographically sorted?

Note: c
1≤
c
2, if letter 
c
1 is equal to 
c
2 or is before 
c
2 in the alphabet.

Input Format

The first line begins with T, the number of testcases. In each testcase you will be given 
N. 
The following N lines contain 
N lowercase english alphabet each, describing the grid.

Output Format

Print T lines. On the 
ith line print YES if it is possible to rearrange the grid in the 
ith 
testcase or NO otherwise.

Constraints 
1≤T≤100 
1≤N≤100 
G
ij will be a lower case letter 

Sample Input
1
5
ebacd
fghij
olmkn
trpqs
xywuv

Sample Output
YES

Explanation

The grid in the first and only testcase can be reordered to 
abcde
fghij
klmno
pqrst
uvwxy

This fulfills the condition since the rows 1, 2, ..., 5 and the columns 1, 2, ..., 5 are all lexicographically sorted.

ALGORITHM:


Rearrange each row one at a time
Iterate through the list to see if it is in horizontal order


'''

testNum = int(input())

'''
->Reorder each row one by one
->Record last letter

'''
def swap(s, i, j):
    lst = list(s);
    lst[i], lst[j] = lst[j], lst[i]
    return ''.join(lst)

def alphabetizeStr(s):
    c = 0
    if len(s) == 1 :
        return s
    elif len(s) == 2 :
        if(s[0] > s[1]):
            s = swap(s,0,1)
            c = 0
        print(s)
    else:
        while c <= len(s)-2:
            if(s[c] > s[c+1]):
                s = swap(s,c,c+1)
                c = 0
            print(s)
        else :
            c = c + 1

def isLexo(s1,s2):
    for c in range(0,len(s1)-1):
        if (s1[c] > s2[c]):
            return "NO"
    return "YES"
        

for t in range(0,testNum):
    rowNum = int(input())
    inputList = []
    lastChar = ''
    answer = ''

    for i in range(0,rowNum):
        inputList.append(input())

    ##print(testNum)
    ##print(rowNum)
    ##print(inputList)

    for r in range(0,rowNum):
        alphabetizeStr(inputList[r])
    for r2 in range(0,rowNum-1):
        answer = isLexo(inputList[r2],inputList[r2+1])
        if(answer == "NO"):
            break
    print(answer)
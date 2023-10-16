# Given two strings, find the number of common characters between them.

# Example

# For s1 = "aabcc" and s2 = "adcaa", the output should be
# solution(s1, s2) = 3.

# Strings have 3 common characters - 2 "a"s and 1 "c".

def solution(s1, s2):
    count = 0
    
    array_s2 = list(s2)
    
    for c in s1:
        if c in array_s2:
            count += 1
            array_s2.remove(c)
    
    return count
        


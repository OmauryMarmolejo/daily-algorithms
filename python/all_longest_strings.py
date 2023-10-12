# Given an array of strings, return another array containing all of its longest strings.

# Example

# For inputArray = ["aba", "aa", "ad", "vcd", "aba"], the output should be
# solution(inputArray) = ["aba", "vcd", "aba"].

def solution(inputArray):
    maxSize = max(map(lambda currentString: len(currentString), inputArray))
    longest = filter(lambda currentString: len(currentString) == maxSize, inputArray)
    return list(longest)
    
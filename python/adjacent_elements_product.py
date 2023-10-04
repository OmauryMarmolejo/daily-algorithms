# Given an array of integers, find the pair of adjacent elements that has the largest product and return that product.

# Example

# For inputArray = [3, 6, -2, -5, 7, 3], the output should be
# solution(inputArray) = 21.

# 7 and 3 produce the largest product.

def solution(inputArray):
    products = []
    
    for first, second in zip(inputArray, inputArray[1:]):
        products.append((first * second))
    
    return max(products)

# Another solution

def solution_2(inputArray):
    products = [first * second for first, second in zip(inputArray, inputArray[1:])]
    return max(products)
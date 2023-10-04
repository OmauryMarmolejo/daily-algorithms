# Given an array of integers, find the pair of adjacent elements that has the largest product and return that product.

# Example

# For inputArray = [3, 6, -2, -5, 7, 3], the output should be
# solution(inputArray) = 21.

# 7 and 3 produce the largest product.

def solution(inputArray)
  inputArray.each_cons(2).map { |x, y| x*y }.max
end

def solution_2(inputArray)
    bigest_product_pair = inputArray.each_cons(2).max_by {|first_number, second_number| first_number * second_number }.reduce(:*)
end

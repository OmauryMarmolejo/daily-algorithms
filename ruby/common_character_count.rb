# Given two strings, find the number of common characters between them.

# Example

# For s1 = "aabcc" and s2 = "adcaa", the output should be
# solution(s1, s2) = 3.

# Strings have 3 common characters - 2 "a"s and 1 "c".

def solution(s1, s2)
  common_characters = 0
  
  array_s1 = s1.split('')
  array_s2 = s2.split('')
  
  array_s1.each do |s|
      if array_s2.include?(s)
        common_characters += 1 
        array_s2.delete_at(array_s2.index(s))
  
      end
  end

  common_characters
end

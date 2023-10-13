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

def solution(inputString)
  stack = []
  result = ""

  input_string.each_char do |char|
    if char == '('
      stack.push(result) 
      result = "" 
    elsif char == ')'
      result = stack.pop + result.reverse 
    else
      result << char 
    end
  end

  result
end

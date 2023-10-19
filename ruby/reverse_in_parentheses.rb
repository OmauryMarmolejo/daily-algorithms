def solution(inputString)
  return "" if inputString == "()"
  sub_string = inputString.match(/\(([^()]+)\)/)
  
  while sub_string    
      inputString = inputString.gsub(sub_string[0], sub_string[1].reverse)
      sub_string = inputString.match(/\(([^()]+)\)/)
  end
  inputString
end

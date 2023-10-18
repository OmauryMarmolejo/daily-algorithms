def solution(n)
  array_number = n.to_s.split('')
  middle_index = array_number.size / 2

  first_part = array_number.slice(0, middle_index)
  second_part = array_number.slice(middle_index, array_number.size)

  sum_array(first_part) == sum_array(second_part)
end

def sum_array(array)
  array.map(&:to_i).reduce(:+)
end

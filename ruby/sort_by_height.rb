def solution(a)
  sorted_numbers = a.sort
  sorted_numbers.delete(-1)

  a.map { |n| n == -1 ? n : sorted_numbers.shift }
end

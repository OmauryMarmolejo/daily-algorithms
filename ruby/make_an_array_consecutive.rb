# Ratiorg got statues of different sizes as a present from CodeMaster for his birthday, each statue having an non-negative integer size. Since he likes to make things perfect, he wants to arrange them from smallest to largest so that each statue will be bigger than the previous one exactly by 1. He may need some additional statues to be able to accomplish that. Help him figure out the minimum number of additional statues needed.

# Example

# For statues = [6, 2, 3, 8], the output should be
# solution(statues) = 3.

# Ratiorg needs statues of sizes 4, 5 and 7.

def solution(statues)
  required_statues = 0
  
  statues.sort.each_cons(2) do |current, next_statue|
      required_statues += (next_statue - current - 1) 
  end
  
  required_statues
end

#Another solution
def another_solution(statues)
  statues.max - statues.min - statues.size + 1
end

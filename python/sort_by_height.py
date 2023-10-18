def solution(a):
    sorted_heights = sorted([i for i in a if i != -1])
    return [-1 if i == -1 else sorted_heights.pop(0) for i in a]
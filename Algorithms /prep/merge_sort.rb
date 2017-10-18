def merge_sort(array)
  return array if array.length <= 1

  mid = array.length / 2

  left = merge_sort(array[0...mid])
  right = merge_sort(array[mid...-1])

  merge(left, right)
end


def merge(left, right)
  result = []

  until left.empty? || right.empty?
    if left.first < right.first
      result << left.shift
    else
      result << right.shift
    end
  end

  result + right + left
end

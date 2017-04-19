class QuickSort
  # Quick sort has average case time complexity O(nlogn), but worst
  # case O(n**2).

  # Not in-place. Uses O(n) memory.
  def self.sort1(array)
    return array if array.length == 0

    new_pivot = rand(array.length)
    temp = array[0]
    array[0] = array[new_pivot]
    pivot = array[0]

    left = array.select { |x| pivot > x }
    right = array.select { |x| pivot < x }
    mid = pivot

    sort1(left) + mid + sort1(right)
  end

  # In-place.
  def self.sort2!(array, start = 0, length = array.length, &prc)
    prc ||= Proc.new { |x1, x2| x1 <=> x2 }
    return array if length < 2

    pivot_i = partition(array, start, length, &prc)
    left_length = pivot_i - start
    right_length = length - (left_length + 1)
    sort2!(array, start, left_length, &prc)
    sort2!(array, pivot_i + 1, right_length, &prc)
    array
  end

  def self.partition(array, start, length, &prc)
    prc ||= Proc.new { |el1, el2| el1 <=> el2 }
    pivot = array[start]
    pivot_i = start
    ((start + 1)...(start + length)).each do |i|
      if prc.call(pivot, array[i]) > 0
        temp = array[i]
        array[i] = array[pivot_i + 1]
        array[pivot_i + 1] = temp
        pivot_i += 1
      end
    end

    temp = array[start]
    array[start] = array[pivot_i]
    array[pivot_i] = temp
    pivot_i
  end
end

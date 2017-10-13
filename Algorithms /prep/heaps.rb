class MinHeap
  attr_reader :store
  def initialize
    @store = []
  end

  def peak
    @store[0]
  end

  def insert(val)
    @store << val
    heapify_up(@store.length - 1)
    val
  end

  def extract
    @store[0], @store[-1] = @store[-1], @store[0]
    min = @store.pop
    heapify_down(0)
    min
  end

  def heapify_down(index)
    children = child_indices(index)
    left, right = @store[children[0]], @store[children[1]]
    return nil if left.nil? && right.nil?

    case left <=> right
    when -1, 0
      if left < @store[index]
        @store[children[0]], @store[index] = @store[index], @store[children[0]]
        heapify_down(children[0])
      end
    when 1
      if right < @store[index]
        @store[children[1]], @store[index] = @store[index], @store[children[1]]
        heapify_down(children[1])
      end
    when nil
        if right
          if right < @store[index]
            @store[children[1]], @store[index] = @store[index], @store[children[1]]
            heapify_down(children[1])
          end
        end

        if left
          if left < @store[index]
            @store[children[0]], @store[index] = @store[index], @store[children[0]]
            heapify_down(children[0])
          end

        end
    end
  end

  def heapify_up(index)
    parent_index = get_parent_index(index)
    if parent_index && @store[parent_index] > @store[index]
      @store[parent_index], @store[index] = @store[index], @store[parent_index]
      heapify_up(parent_index)
    end

  end

  def child_indices(index)
    [index * 2 + 1, index * 2 + 2]
  end

  def get_parent_index(index)
    index > 0 ? (index - 1) / 2 : 0
  end

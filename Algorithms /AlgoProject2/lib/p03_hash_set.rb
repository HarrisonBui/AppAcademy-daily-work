require_relative 'p02_hashing'

class HashSet
  attr_reader :count

  def initialize(num_buckets = 8)
    @store = Array.new(num_buckets) { Array.new }
    @count = 0
  end

  def insert(key)
    unless self.include?(key)
      if @count == num_buckets
        resize!
      end
      self[key] << key
      @count += 1
    end
  end

  def include?(key)
    return true if self[key].include?(key)
    false
  end

  def remove(key)
    self[key].delete(key) if self[key].include?(key)
  end

  private

  def [](num)
    # optional but useful; return the bucket corresponding to `num`
    if num == []
      @store[0]
    else
      @store[num.hash % num_buckets]
    end
  end

  def num_buckets
    @store.length
  end

  def resize!
    order_elements = @store.flatten
    @store = Array.new(num_buckets * 2) { Array.new }
    order_elements.each do |el|
      i = el % num_buckets
      @store[i] << el
    end
  end
end

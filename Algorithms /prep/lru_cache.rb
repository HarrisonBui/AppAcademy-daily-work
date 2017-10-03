class LRU
  attr_accessor :head, :tail, :count, :table
  def initialize(max_items = 10)
      @max_items = max_items
      @head = nil
      @tail = nil
      @count = 0
      @table = {}
  end

  def set(key, value)
    @count += 1
    @head = @head.next if @count > @max_items

    new_node = Node.new(value)

    @head = new_node if @tail == nil
    @tail.next = new_node if @tail != nil
    @tail  = new_node
    @table[key] = new_node
  end

  def get(key)
    res = @table[key]
    return nil if res == nil
    return res if res.next == nil
    if res.previous != nil
      res.previous.next = res.next
      res.next.previous = res.previous
    end
    @tail.next = res
    @tail = res
    res
  end
end


class Node
  attr_accessor :value, :previous, :next

  def initialize(value = nil)
    @value = value
    @previous = nil
    @next = nil
  end
end


lru = LRU.new(3)
lru.set('a', 1)
lru.set('b', 2)
lru.set('c', 3)
puts lru.head.value
lru.get('a')
puts lru.head.value
lru.get('b')
puts lru.head.value
lru.get('c')
puts lru.head.value

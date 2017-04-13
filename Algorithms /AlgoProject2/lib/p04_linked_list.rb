class Link
  attr_accessor :key, :val, :next, :prev

  def initialize(key = nil, val = nil)
    @key = key
    @val = val
    @next = nil
    @prev = nil
  end

  def to_s
    "#{@key}: #{@val}"
  end

  def remove
    previous = self.prev
    next_node = self.next
    previous.next = next_node
    next_node.prev = previous
  end
end

class LinkedList
  include Enumerable

  def initialize
    @head = Link.new
    @tail = Link.new
    @head.next = @tail
    @tail.prev = @head
  end

  def [](i)
    each_with_index { |link, j| return link if i == j }
    nil
  end

  def first
    empty? ? nil : @head.next
  end

  def last
    empty? ? nil : @tail.prev
  end

  def empty?
    @head.next == @tail
  end

  def get(key)
    each { |link| return link.val if link.key == key }
    nil
  end

  def include?(key)
    any? { |link| link.key == key }
  end

  def append(key, val)
    each { |link| return link.val = val if link.key == key }
    new_link = Link.new(key, val)
    @tail.prev.next = new_link
    new_link.prev = @tail.prev
    new_link.next = @tail
    @tail.prev = new_link
  end

  def update(key, val)
    each do |link|
      if link.key == key
        link.val = val
        return link;
      end
    end
  end

  def remove(key)
    each do |link|
      if link.key == key
        link.prev.next = link.next
        link.next.prev = link.prev
        link.next, link.prev = nil, nil
        return link.val
      end
    end
    nil
  end

  def each
    curr_link = @head.next
    until curr_link == @tail
      yield curr_link
      curr_link = curr_link.next
    end
  end

  # uncomment when you have `each` working and `Enumerable` included
  def to_s
    inject([]) { |acc, link| acc << "[#{link.key}, #{link.val}]" }.join(", ")
  end
end

class Fixnum
  # Fixnum#hash already implemented for you
end

class Array
  def hash
    each_with_index.inject(0) do |i_hash, (el, idx)|
      (el.hash + idx.hash) ^ i_hash
    end
  end
end

class String
  def hash
    self.chars.map(&:ord).hash
  end
end

class Hash
  # This returns 0 because rspec will break if it returns nil
  # Make sure to implement an actual Hash#hash method
  def hash
    # 0
    self.to_a.sort.hash
  end
end

class BinarySearchTree

  attr_accessor :el, :left, :right
  def initialize
    @root = nil
  end

  def find(el)
    BinarySearchTree.find!(@root, el)
  end

  def self.find!(node, el)
    return nil unless node
    return node if node.el == el

    if el < node.el
      return BinarySearchTree.find!(node.left, el)
    end

    BinarySearchTree.find!(node.right, el)
  end

  def insert(el)
    if self.el < el
      if(self.right)
        self.right.insert(el)
      else
        self.right = BinarySearchTree.new(el)
      end
    else
      if(self.left)
        self.left.insert(el)
      else
        self.left = BinarySearchTree.new(el)
      end
    end
  end

  def delete(el)
    @root = BinarySearchTree.delete!(@root, el)
  end

  def self.delete!(node, el)
    return nil unless node

      if el < node.el
        node.left = BinarySearchTree.delete!(node.left, el)
      elsif el > node.el
        node.right = BinarySearchTree.delete!(node.right, el)
      else
        return node.left unless node.right
        return node.right unless node.left
        t = node
        node = BinarySearchTree.min(t.right)
        node.right = BinarySearchTree.delete_min!(t.right)
        node.left = t.left
      end

      node
    end
  end

  def is_balanced?
  end

  def in_order_traversal
  end

  def maximum
    BinarySearchTree.max(@root)
  end

  def self.max(node)
    return nil unless node
    return node unless node.right

    BinarySearchTree.max(node.right)
  end

  def depth
  end
end

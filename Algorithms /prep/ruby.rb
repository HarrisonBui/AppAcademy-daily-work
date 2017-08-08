# Given two nodes in a binary tree, design an algorithm
# that computes their Least Common Ancestor (LCA).
# Assume that each node has a parent pointer.

def lca(node_0, node_1)
  depth_0 = get_depth(node_0)
  depth_1 = get_depth(node_1)

  if depth_1 > depth_0
    node_0, node_1 = node_1, node_0
  end

  depth_diff = (depth_0 - depth_1).abs
  while depth_diff
    node_0 = node_0.pare
    nt
    depth_diff -= 1
  end

  while node_0 != node_1
    node_0 = node_0.parent
    node_1 = node_1.parent
  end

  node_0
end

def get_depth(node)
  depth = 0
  while node
    depth += 1
    node = node.parent
  end
  depth
end

def valid_ip?(str)
  return false unless str =~ /^\d+(\.\d+){3}$/
  nums = str.split(".").map(&:to_i)
  nums.all? {|num| num >= 0 && num <= 255}
end

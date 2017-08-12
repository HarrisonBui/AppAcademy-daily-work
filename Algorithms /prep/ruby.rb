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


def max_number(nums1, nums2)
  result = []
  until nums1.empty? || nums2.empty?
    i = 0
    while nums1[i] == nums2[i]
      i += 1 unless nums1[i].nil? || nums2[i].nil?
    end
    if nums1[i] && nums2[i]
      result << (nums1[i] <= nums2[i] ? nums2.shift : nums1.shift)
    else
      if nums1[i].nil?
        result << (nums2[i] > nums1[0] ? nums2.shift : nums1.shift)
      else
        result << (nums1[i] > nums2[0] ? nums1.shift : nums2.shift)
      end
    end
  end
  result.concat(nums1).concat(nums2).join.to_i
end

p max_number([1,3,5,6,6], [9,1,1]) == 91356611
p max_number([9,1,1], [1,3,5,6,6]) == 91356611
p max_number([1,1,1], [1,1,2,1]) == 1121111

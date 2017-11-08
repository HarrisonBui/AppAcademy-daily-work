// Given a binary tree t and an integer s, determine whether there is a root to leaf
// path in t such that the sum of vertex values equals s.

function hasPathWithGivenSum(t, s) {
    if (!t) return s === 0;
    s -= t.value;
    return hasPathWithGivenSum(t.left, s) ||
           hasPathWithGivenSum(t.right, s);
}

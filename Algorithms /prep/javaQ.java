//Find Min Difference
public class Solution {
    public int findMinDifference(List<String> timePoints) {
        boolean[] mark = new boolean[24 * 60];
        for (String time : timePoints) {
            String[] t = time.split(":");
            int h = Integer.parseInt(t[0]);
            int m = Integer.parseInt(t[1]);
            if (mark[h * 60 + m]) return 0;
            mark[h * 60 + m] = true;
        }

        int prev = 0, min = Integer.MAX_VALUE;
        int first = Integer.MAX_VALUE, last = Integer.MIN_VALUE;
        for (int i = 0; i < 24 * 60; i++) {
            if (mark[i]) {
                if (first != Integer.MAX_VALUE) {
                    min = Math.min(min, i - prev);
                }
                first = Math.min(first, i);
                last = Math.max(last, i);
                prev = i;
            }
        }

        min = Math.min(min, (24 * 60 - last + first));

        return min;
    }
}


//Third Maximum Number
public class Solution {
    public int thirdMax(int[] nums) {
        int index = 0;
        long[] result = {Long.MIN_VALUE, Long.MIN_VALUE, Long.MIN_VALUE};

        for (int i = 0; i < nums.length; i++) {
            if (nums[i] > result[0]) {
                result[2] = result[1];
                result[1] = result[0];
                result[0] = nums[i];
                index++;
            } else if (nums[i] > result[1] && nums[i] < result[0]) {
                result[2] = result[1];
                result[1] = nums[i];
                index++;
            } else if (nums[i] > result[2] && nums[i] < result[1]) {
                result[2] = nums[i];
                index++;
            }
        }
        return index > 2 ? (int)result[2] : (int)result[0];
    }
}


//Number of Islands
public class Solution {

  private int n;
  private int m;

  public int numIslands(char[][] grid) {
      int count = 0;
      n = grid.length;
      if (n == 0) return 0;
      m = grid[0].length;
      for (int i = 0; i < n; i++){
          for (int j = 0; j < m; j++)
              if (grid[i][j] == '1') {
                  DFSMarking(grid, i, j);
                  ++count;
              }
      }
      return count;
  }

  private void DFSMarking(char[][] grid, int i, int j) {
      if (i < 0 || j < 0 || i >= n || j >= m || grid[i][j] != '1') return;
      grid[i][j] = '0';
      DFSMarking(grid, i + 1, j);
      DFSMarking(grid, i - 1, j);
      DFSMarking(grid, i, j + 1);
      DFSMarking(grid, i, j - 1);
  }
}


//First Bad Version
public int firstBadVersion(int n) {
  int start = 1, end = n;
  while (start < end) {
    int mid = start + (end - start) / 2;
    if (!isBadVersion(mid)) start = mid + 1;
    else end = mid;
  }
  return start;
}


//Jump Game
public boolean canJump(int[] A) {
    int max = 0;
    for(int i=0;i<A.length;i++){
        if(i>max) {return false;}
        max = Math.max(A[i]+i,max);
    }
    return true;
}

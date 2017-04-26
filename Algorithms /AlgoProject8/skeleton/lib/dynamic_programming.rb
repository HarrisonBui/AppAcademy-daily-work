# Dynamic Programming practice
# NB: you can, if you want, define helper functions to create the necessary caches as instance variables in the constructor.
# You may find it helpful to delegate the dynamic programming work itself to a helper method so that you can
# then clean out the caches you use.  You can also change the inputs to include a cache that you pass from call to call.
class DPProblems
  def initialize
    @fib_cache = {1 => 1, 2 => 1}
    # Use this to create any instance variables you may need
    @str_cache = Hash.new { |h, k| h[k] = {} }
    @maze_cache = Hash.new { |hash, key| hash[key] = {} }
  end

  # Takes in a positive integer n and returns the nth Fibonacci number
  # Should run in O(n) time
  def fibonacci(n)
    return @fib_cache[n] if @fib_cache[n]
     result = fibonacci(n - 1) + fibonacci(n - 2)
     @fib_cache[n] = result
     result
  end

  # Make Change: write a function that takes in an amount and a set of coins.  Return the minimum number of coins
  # needed to make change for the given amount.  You may assume you have an unlimited supply of each type of coin.
  # If it's not possible to make change for a given amount, return nil.  You may assume that the coin array is sorted
  # and in ascending order.
  def make_change(amt, coins, coin_cache = { 0 => 0 })
    return 1.0 / 0.0 if amt < 0
    return coin_cache[amt] if coin_cache[amt]

    return 0.0 / 0.0 if coins.none? { |coin| amt % coin == 0 }

    min_change = 1.0 / 0.0

    coins.each do |coin|
      temp = make_change(amt - coin, coins, coin_cache) + 1
      min_change = temp if temp < min_change
    end
    coin_cache[amt] = min_change
    min_change
  end

  # Knapsack Problem: write a function that takes in an array of weights, an array of values, and a weight capacity
  # and returns the maximum value possible given the weight constraint.  For example: if weights = [1, 2, 3],
  # values = [10, 4, 8], and capacity = 3, your function should return 10 + 4 = 14, as the best possible set of items
  # to include are items 0 and 1, whose values are 10 and 4 respectively.  Duplicates are not allowed -- that is, you
  # can only include a particular item once.
  def knapsack(weights, values, capacity)
    return 0 if capacity == 0 || weights.empty?
    ans = knapsack_helper(weights, values, capacity)
    ans[weights.length - 1][capacity]
  end

  def knapsack_helper(weights, values, capacity)
    answer = []
      (0...weights.length).each do |i|
        answer[i] = []
        (0..capacity).each do |w|
          if w == 0
            answer[i][w] = 0
          elsif i == 0
            answer[i][w] = weights[0] > w ? 0 : values[0]
          else
            option1 = answer[i - 1][w]
            option2 = w < weights[i] ? 0 : answer[i-1][w - weights[i]] + values[i]
            answer[i][w] = [option1, option2].max
          end
        end
    end
    answer
  end

  # Stair Climber: a frog climbs a set of stairs.  It can jump 1 step, 2 steps, or 3 steps at a time.
  # Write a function that returns all the possible ways the frog can get from the bottom step to step n.
  # For example, with 3 steps, your function should return [[1, 1, 1], [1, 2], [2, 1], [3]].
  # NB: this is similar to, but not the same as, make_change.  Try implementing this using the opposite
  # DP technique that you used in make_change -- bottom up if you used top down and vice versa.
  def stair_climb(n)
    ways_collection = [[[]], [[1]], [[1, 1], [2]]]

    return ways_collection[n] if n < 3

    (3..n).each do |i|
      new_way_set = []
      (1..3).each do |first_step|
        ways_collection[i - first_step].each do |way|
          new_way = [first_step]
          way.each do |step|
            new_way << step
          end
          new_way_set << new_way
        end
      end
      ways_collection << new_way_set
    end

    ways_collection.last
  end

  # String Distance: given two strings, str1 and str2, calculate the minimum number of operations to change str1 into
  # str2.  Allowed operations are deleting a character ("abc" -> "ac", e.g.), inserting a character ("abc" -> "abac", e.g.),
  # and changing a single character into another ("abc" -> "abz", e.g.).
  def str_distance(str1, str2)
    return str2.length unless str1
    return str1.length unless str2
    return @str_cache[str1][str2] if @str_cache[str1][str2]

    if str1 == str2
      dist = 0
    elsif str1[0] == str2[0]
      dist = str_distance(str1[1..-1], str2[1..-1])
    else
      move_both = 1 + str_distance(str1[1..-1], str2[1..-1])
      move_left = 1 + str_distance(str1[1..-1], str2)
      move_right = 1 + str_distance(str1, str2[1..-1])
      dist = [move_both, move_left, move_right].min
    end

    @str_cache[str1][str2] = dist
  end

  # Maze Traversal: write a function that takes in a maze (represented as a 2D matrix) and a starting
  # position (represented as a 2-dimensional array) and returns the minimum number of steps needed to reach the edge of the maze (including the start).
  # Empty spots in the maze are represented with ' ', walls with 'x'. For example, if the maze input is:
  #            [['x', 'x', 'x', 'x'],
  #             ['x', ' ', ' ', 'x'],
  #             ['x', 'x', ' ', 'x']]
  # and the start is [1, 1], then the shortest escape route is [[1, 1], [1, 2], [2, 2]] and thus your function should return 3.
  def maze_escape(maze, start)
    ans = maze_escape_helper(maze, start)
    @maze_cache = Hash.new { |hash, key| hash[key] = {} }
    ans
  end

  def maze_escape_helper(maze, start)
    return @maze_cache[start[0]][start[1]] if @maze_cache[start[0]][start[1]]
    # base case
    if (start[0] == 0 || start[1] == 0) || (start[0] == maze.length - 1 || start[1] == maze[0].length - 1)
      @maze_cache[start[0]][start[1]] = 1
      return 1
    end

    # find all possible places to go
    x = start[0]
    y = start[1]
    adj_spaces = [[x + 1, y], [x - 1, y], [x, y + 1], [x, y - 1]]
    possible_moves = []
    adj_spaces.each do |space|
      if maze[space[0]][space[1]] == ' '
        possible_moves << space
      end
    end

    way_found = false
    best = maze.length*maze[0].length

    possible_moves.each do |move|
      temp_maze = make_temp_maze(maze, start)
      possible_path = maze_escape_helper(temp_maze, move)
      if possible_path.is_a?(Fixnum) && possible_path < best
        way_found = true
        best = possible_path
      end
    end

    if way_found
      @maze_cache[start[0]][start[1]] = best + 1
      return best + 1
    else
      @maze_cache[start[0]][start[1]] = 0.0/0.0
      return 0.0/0.0
    end
  end

  def make_temp_maze(maze, filled_pos)
    temp_maze = []
    maze.each_with_index do |_, col|
      temp_maze << []
      maze[col].each { |el| temp_maze[col] << el }
    end

    temp_maze[filled_pos[0]][filled_pos[1]] = 'x'
    temp_maze
  end
end

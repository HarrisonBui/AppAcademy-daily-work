require 'set'
# 8.1

class MaxStack

  def initialize(input)
    @main = [input]
    @max_value = [input]
  end

  def push(input)
    @main << input
    if @max_value.last < input
       @max_value << input
    else
      @max_value << @max_value.last
    end
    @main.last
  end

  def pop
    raise 'stack is currently empty' if @main.empty?
    @max_value.pop
    @main.pop
  end

  def max
    @max_value.last
  end
end


def rpn_calc(expression)
  stack = expression.split(',')
  result = []

  stack.each do |x|
    if is_integer?(x)
      result << x.to_f
    else

      raise 'incorrect expression form' if result.length != 2
      result = [result[0].send(x, result[1])]
    end
  end

  result.first
end

def is_integer?(num)
  num.to_i.to_s == num
end

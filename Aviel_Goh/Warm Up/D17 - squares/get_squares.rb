=begin

Ruby Squares!

A perfect square is defined as a whole number that when square rooted is a whole number (such as 1, 4, 9, 16, etc.).

Make a new file called get_squares.rb.

Write a method called get_squares that takes an argument, an array of numbers. This method will return a new array of numbers that qualify as perfect squares from the argument array.

Note: The returned array of perfect squares should be in ascending order with no duplicates.

get_squares([4, 1, 16, 1, 10, 35, 22]) # => [1, 4, 16]

=end

def get_squares(array)
  array.select { |num| (Math.sqrt(num) % 1) == 0 }.sort.uniq
end

get_squares([4, 1, 16, 1, 10, 35, 22])

=begin

Ruby Practice - REPS!
Learning Objectives... or rather... REPS!!!!

...REPS with creating methods
...REPS with iteration
...REPS with functions on numbers, strings, arrays

Round 1

Write a function lengths that accepts a single parameter as an argument, namely an array of strings. The function should return an array of numbers. Each number in the array should be the length of the corresponding string.

words = ["hello", "what", "is", "up", "dude"]
lengths(words)  # => [5, 4, 2, 2, 4]

Round 2

Write a Ruby function called transmogrifier This function should accept three arguments, which you can assume will be numbers. Your function should return the "transmogrified" result

The transmogrified result of three numbers is the product (numbers multiplied together) of the first two numbers, raised to the power (exponentially) of the third number.

For example, the transmogrified result of 5, 3, and 2 is (5 times 3) to the power of 2 is 225.

Use your function to find the following answers.

transmogrifier(5, 4, 3)
transmogrifier(13, 12, 5)
transmogrifier(42, 13, 7)

Round 3

Write a function called toonify that takes two parameters, accent and sentence.

If accent is the string "daffy", return a modified version of sentence with all "s" replaced with "th".
If the accent is "elmer", replace all "r" with "w".
Feel free to add your own accents as well!
If the accent is not recognized, just return the sentence as-is.
toonify("daffy", "so you smell like sausage")
#=> "tho you thmell like thauthage"

Round 4

Write a function wordReverse that accepts a single argument, a string. The method should return a string with the order of the words reversed. Don't worry about punctuation.

wordReverse("Now I know what a TV dinner feels like")
# => "like feels dinner TV a what know I Now"

Round 5

Write a function letterReverse that accepts a single argument, a string. The function should maintain the order of words in the string but reverse the letters in each word. Don't worry about punctuation. This will be very similar to round 4 except you won't need to split them with a space.

letterReverse("Now I know what a TV dinner feels like")
# => "woN I wonk tahw a VT rennid sleef ekil"
letterReverse("Put Hans back on the line")
# => "tuP snaH kcab no eht enil"

Round 6

Write a function longest that accepts a single argument, an array of strings. The method should return the longest word in the array. In case of a tie, the method should return either.

longest(["oh", "good", "grief"]) # => "grief"
longest(["Nothing" , "takes", "the", "taste", "out", "of", "peanut", "butter", "quite", "like", "unrequited", "love"])
# => "unrequited"

=end

puts 'hello'

# Round 1

words = ["hello", "what", "is", "up", "dude"]

def lengths(array)
  array.map { |word| word.length }
end

p lengths(words)

# Round 2

def transmogrifier(num1, num2, num3)
  (num1 * num2) ** num3
end

puts transmogrifier(5, 4, 3)
puts transmogrifier(13, 12, 5)
puts transmogrifier(42, 13, 7)

# Round 3

def toonify(accent, sentence)

  if accent == 'daffy'
    puts sentence.gsub('s', 'th')
  elsif accent == 'elmer'
    puts sentence.gsub('r', 'w')
  else
    puts sentence
  end

end

toonify("daffy", "so you smell like sausage")

# Round 4

def wordReverse(string)
  string.split(' ').reverse.join(' ')
end

puts wordReverse('Now I know what a TV dinner feels like')

# Round 5

def letterReverse(string)
  string.reverse.split(' ').reverse.join(' ')
end

puts letterReverse('Now I know what a TV dinner feels like')
puts letterReverse("Put Hans back on the line")

# Round 6

def longest(array)
  array.max_by { |word| word.length }
end

longest(["oh", "good", "grief"])
longest(["Nothing" , "takes", "the", "taste", "out", "of", "peanut", "butter", "quite", "like", "unrequited", "love"])

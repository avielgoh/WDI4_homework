require 'pry'

def letter_count(str)

  # create blank hash
  counter = {}

  # modify string to remove spaces and upcase
  str = str.gsub(' ', '').downcase

  str.each_char do |char|
    counter[char] = 0 unless counter.include? (char)
    counter[char] += 1
  end

  counter

end

binding.pry

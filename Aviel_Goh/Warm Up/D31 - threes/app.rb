require 'pry'

def input_one(num)

  # while num is greater than one, keep checking
  while num > 1 do
    if num % 3 == 0
      new_num = num / 3
      puts "#{num} 0"
    elsif (num + 1) % 3 == 0
      new_num = (num + 1) / 3
      puts "#{num} 1"
    elsif (num - 1) % 3 == 0
      new_num = (num - 1) / 3
      puts "#{num} -1"
    end
    num = new_num
  end

  # print out 1
  puts num
end

def input_two(num)

  num_added = 0

  # while num is greater than one, keep checking
  while num > 1 do
    if num % 3 == 0
      new_num = num / 3
      puts "#{num} 0"
    elsif (num + 1) % 3 == 0
      new_num = (num + 1) / 3
      num_added = num_added + 1
      puts "#{num} 1"
    elsif (num - 1) % 3 == 0
      new_num = (num - 1) / 3
      num_added = num_added - 1
      puts "#{num} -1"
    elsif (num + 2) % 3 == 0
      new_num = (num + 2) / 3
      num_added = num_added + 2
      puts "#{num} 2"
    elsif (num - 2) % 3 == 0
      new_num = (num - 2) / 3
      num_added = num_added - 2
      puts "#{num} -2"
    end
    num = new_num
  end

  # print out 1
  puts num
  puts num_added
end

binding.pry

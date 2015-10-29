require 'pry'

class Dice

  def self.roll(num = 1)
    roll_array = Array.new

    num.times do |i|
      roll_array.push(('0'..'6').to_a.sample.to_i)
    end

    roll_array
  end

end


def pretty_roll

  num = ('0'..'6').to_a.sample.to_i



  num.times do |i|
    puts '*'
  end

end

binding.pry

require 'pry'

letter_prefix = ['atta','bibbity','city','dickety','ebbity','fleventy']

letter_suffix = ['a','bee','cee','dee','e','eff']

letter_index = ['a','b','c','d','e','f']

number = ['','one','two','three','four','five','six','seven','eight','nine']

number_index =

pronounced_hex = []

print "Hexidecimal: " #0xFFF5
input = gets.chomp.downcase!

hex_value = input.gsub('0x','').split('')

for i in 0..hex_value.length-1

  if hex_value.length <= 2

    if i.even?
      if letter_index.include?(hex_value[i])
        hex_value_index = letter_index.index(hex_value[i])
        pronounced_hex.push(letter_prefix[hex_value_index])
      elsif hex_value[i] != 0
        pronounced_hex.push(number[hex_value[i].to_i])
      else
        pronounced_hex.push('')
      end
    end

    if i.odd?
      if letter_index.include?(hex_value[i])
        hex_value_index = letter_index.index(hex_value[i])
        pronounced_hex.push(letter_suffix[hex_value_index])
      elsif hex_value[i] != 0
        pronounced_hex.push(number[hex_value[i].to_i])
      else hex_value[i] == 0
        pronounced_hex.push('bitey')
      end
    end

  else

    if i.even?
      if letter_index.include?(hex_value[i])
        hex_value_index = letter_index.index(hex_value[i])
        pronounced_hex.push(letter_prefix[hex_value_index])
      elsif hex_value[i] != 0
        pronounced_hex.push(number[hex_value[i].to_i])
      else
        # do nothing
      end
    end

    if i.odd?
      if letter_index.include?(hex_value[i])
        hex_value_index = letter_index.index(hex_value[i])
        pronounced_hex.push(letter_suffix[hex_value_index])
      elsif hex_value[i] != 0
        pronounced_hex.push(number[hex_value[i].to_i])
      else hex_value[i] == 0
        pronounced_hex.push('bitey')
      end
    end

    if pronounced_hex.include?('bitey')
      # do nothing
    else
      pronounced_hex.push('bitey')
    end

  end


end

puts pronounced_hex.join(' ')


binding.pry

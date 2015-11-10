require 'pry'

class Coffee

  attr_accessor :type, :sugar, :size, :name, :collected

  def initialize(type, sugar, size, name)
    @type = type
    @sugar = sugar
    @size = size
    @name = name
    @ready = ""
    @collected = false
  end

  def to_s
    puts "#{@name}'s #{@type}, #{@size}, #{@sugar}."
  end

  def ready

  end

  def collected

  end

end



binding.pry

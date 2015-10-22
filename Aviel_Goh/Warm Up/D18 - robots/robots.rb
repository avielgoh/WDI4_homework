require 'pry'

class Robots

  def initialize(name)
    @name = name
    @instruction_count = 0
  end

  def name
    puts "#{@name}"
    @instruction_count = @instruction_count + 1
  end

  def instruction_count(name)
    puts "#{@instruction_count}"
  end

  def reset
    @name = (0...2).map { (65 + rand(26)).chr }.join + (0...3).map { Random.rand(9) }.join
  end


end


def new_name
  (0...2).map { (65 + rand(26)).chr }.join + (0...3).map { Random.rand(9) }.join
end

robot1 = Robots.new(new_name)
robot2 = Robots.new(new_name)
robot3 = Robots.new(new_name)

robots_array = [robot1, robot2, robot3]


binding.pry

# DT alternative

class Robots

  def initialize
    @name = "#{prefix}#{suffix}"
  end

  def prefix
    ('AA'..'ZZ').to_a.sample
  end

  def suffix
    ('000'..'999').to_a.sample
  end

  def name
    @name
  end

  def reset
    @name = "#{prefix}#{suffix}"
  end

end

=begin

Client:

A client should have a name.
A client should have a number of children.
A client should have an age.
A client should have a number of pets.

=end

class Client

  attr_accessor :name, :age, :num_children, :num_pets

  def initialize(name, age, num_kids)
    @name = name
    @age = age
    @num_kids = num_kids
    @num_pets = []
  end

  def to_s
    puts "Name: #{@name}"
    puts "Age: #{@age}"
    puts "Number of kids: #{@num_kids}"
    puts "Number of pets: " + @num_pets.length.to_s
  end

end

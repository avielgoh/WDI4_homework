=begin

Animal:

An animal should have a name.
An animal should have an age.
An animal should have a gender.
An animal should have a species.
An animal can have multiple toys.

=end

class Animal

  attr_accessor :name, :age, :gender, :species

  def initialize(name, age, gender, species)
    @name = name
    @age = age
    @gender = gender
    @species = species
    @toys = []
  end

  def to_s
    puts "Name: #{@name}"
    puts "Age: #{@age}"
    puts "Gender: #{@gender}"
    puts "Species: #{@species}"

    if @toys != []
      puts "Toys: " + @toys.join(', ')
    end
  end

end

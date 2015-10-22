=begin

Person (assume tenants or prospective tenants)	type
name	string
age	integer
gender	string
apartment	apartment object

=end

class Person

  attr_accessor :name, :age, :gender, :apartment

  # initilize aka constructor
  def initialize(name, age, gender, apartment)
    @name = name.to_s
    @age = age.to_i
    @gender = gender
    @apartment = apartment
  end

  def to_s
    puts "Name: #{@name}"
    puts "Age: #{@age}"
    puts "Gender: #{@gender}"
    puts "Apartment no: #{@apartment}"
  end

end

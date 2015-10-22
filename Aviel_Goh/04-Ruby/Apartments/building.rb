=begin

Building - attribute	type
address	string
style	string
has_doorman	boolean
is_walkup	boolean
num_floors	integer
apartments	array of apartment objects

=end

class Building

  attr_accessor :address, :style, :has_doorman, :is_walkup, :num_floors

  def initialize(address, style, doorman, walkup, floors)
    @address = address.to_s
    @style = style
    @has_doorman = doorman
    @is_walkup = walkup
    @num_floors = floors.to_i
    @apartments = []
  end

  def to_s
    puts "Address: #{@address}"
    puts "Style: #{@style}"
    puts "Doorman: #{@has_doorman}"
    puts "Walkup: #{@is_walkup}"
    puts "Number of floors: #{@num_floors}"
    puts "Apartment: #{@apartments}"
  end

  def add_apartment(new_apartment)
    @apartments = @apartments.push(new_apartment)
  end

  def remove_apartment(old_apartment)
    @apartments = @apartments.delete(old_apartment)
  end

  def


end

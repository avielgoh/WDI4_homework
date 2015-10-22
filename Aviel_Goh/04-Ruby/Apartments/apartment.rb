=begin

Apartment - attribute	type
price	decimal
is_occupied	boolean
sqft	integer
num_beds	integer
num_baths	integer
renters	array of person objects

=end

class Apartment

  attr_accessor :price, :is_occupied, :sqft, :num_beds, :num_baths

  def initialize(price, occupied, size, beds, baths)
    @price = price
    @is_occupied = occupied
    @sqft = size.to_i
    @num_beds = beds.to_i
    @num_baths = baths.to_i
    @renters = []
  end

  def to_s
    puts "Price: $#{@price}"
    puts "Occupied: #{@is_occupied}"
    puts "Size: #{@sqft} square feet"
    puts "Beds: #{@num_beds}"
    puts "Baths: #{@num_baths}"
    puts "Tenants: #{@renters}"
  end

  def add_tenant(new_tenant)
    @renters = @renters << (new_tenant)
  end

  def remove_tenant(old_tenant)
    @renters = @renters.delete(old_tenant)
  end

  # loop through the renters array to put the names of the renters into a string
  def renters
    @retners.map do |renter|
      renter.name
    end.join(', ')
  end

end

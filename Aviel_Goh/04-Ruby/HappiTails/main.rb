require 'pry'
require './animals.rb'
require './clients.rb'

# global shelter variable
$shelter = {
  clients: [],
  animals: []
}

# create clients (name, age, num_kids)
client1 = Client.new('Barry', 82, 5)
client2 = Client.new('Todd', 18, 0)
client3 = Client.new('Leslie', 37, 2)
client4 = Client.new('Yvonne', 22, 0)
client5 = Client.new('Claudia', 65, 0) # cat lady

$shelter[:clients] = [client1, client2, client3, client4, client5]

# create animals (name, age, gender, species)
animal1 = Animal.new('Iggs', 7, 'Male', 'Iguana')
animal2 = Animal.new('Chimp', 12, 'Male', 'Chimpanzee')
animal3 = Animal.new('Mere', 2, 'Female', 'Meerkat')
animal4 = Animal.new('Fi', 1, 'Female', 'Catfish')
animal5 = Animal.new('Wes', 4, 'Female', 'Weasel')

$shelter[:animals] = [animal1, animal2, animal3, animal4, animal5]

begin

  puts '╦ ╦╔═╗╦  ╔═╗╔═╗╔╦╗╔═╗  ╔╦╗╔═╗  ╦ ╦╔═╗╔═╗╔═╗╦╔╦╗╔═╗╦╦  ╔═╗
║║║║╣ ║  ║  ║ ║║║║║╣    ║ ║ ║  ╠═╣╠═╣╠═╝╠═╝║ ║ ╠═╣║║  ╚═╗
╚╩╝╚═╝╩═╝╚═╝╚═╝╩ ╩╚═╝   ╩ ╚═╝  ╩ ╩╩ ╩╩  ╩  ╩ ╩ ╩ ╩╩╩═╝╚═╝'
  puts 'Please pick from one of the following options:'
  puts '1) Display list of animals'
  puts '2) Display list of clients'
  puts '3) Create a new animal'
  puts '4) Create a new client'
  puts '5) Adopt an animal'
  puts '6) Surrender an animal'
  puts 'Q) Quit'
  input = gets.chomp

  if input == '1' # display animals
    puts $shelter[:animals]
  end

  if input == '2' # display clients
    puts $shelter[:clients]
  end

  if input == '3' # create new animal

    puts 'Please enter animal name:'
    @name = gets.chomp.to_s
    puts 'Please enter animal age:'
    age = gets.chomp.to_i
    puts 'Please enter animal gender (M/F):'
    gender = gets.chomp.to_s
    puts 'Please enter animal species:'
    species = gets.chomp.to_s

    $shelter[:animals] << Animal.new(name, age, gender, species)
    puts "#{@name}'s animal profile has been created."

  end

  if input == '4' # create new client

    puts 'Please enter client name:'
    @name = gets.chomp.to_s
    puts 'Please enter client age:'
    age = gets.chomp.to_i
    puts 'Please enter number of kids:'
    kids = gets.chomp.to_i

    $shelter[:clients] << Client.new(name, age, kids)
    puts "#{@name}'s client profile has been created."

  end

  if input == '5' # adopt animal

    puts 'Please enter client name:'
    @client_name = gets.chomp.to_s

    # get index of client based on name
    client_index = $shelter[:clients].index { |i| i.name == @client_name }

    while client_index == nil
      puts 'Client not found. Please enter client name:'
      @client_name = gets.chomp.to_s

      client_index = $shelter[:clients].index { |i| i.name == @client_name }
    end

    puts 'Please enter animal name:'
    @animal_name = gets.chomp.to_s

    # get index of animal adopted based on name
    animal_index = $shelter[:animals].index { |i| i.name == @animal_name }

    while animal_index == nil
      puts 'Animal not found. Please enter animal name:'
      @animal_name = gets.chomp.to_s

      animal_index = $shelter[:animals].index { |i| i.name == @animal_name }
    end

    puts "Please confirm that #{@client_name} is adopting #{@animal_name} (Y/N):"
    confirm = gets.chomp.to_s

    if confirm == 'Y'
    # remove adopted animal from shelter and push into client pet list
    $shelter[:clients][client_index].num_pets << $shelter[:animals].delete_at(animal_index)
    else
    end

  end

  if input == '6' # surrender animal

    puts 'Please enter client name:'
    @client_name = gets.chomp.to_s

    # get index of client based on name
    client_index = $shelter[:clients].index { |i| i.name == @client_name }

    while client_index == nil
      puts 'Client not found. Please enter client name:'
      @client_name = gets.chomp.to_s

      client_index = $shelter[:clients].index { |i| i.name == @client_name }
    end

    puts 'Please enter animal name:'
    @animal_name = gets.chomp.to_s

    # get index of animal given up based on client index
    animal_index = $shelter[:clients][client_index].num_pets.index { |i| i.name == @animal_name }

    while animal_index == nil
      puts 'Animal not found. Please enter animal name:'
      @animal_name = gets.chomp.to_s

      animal_index = $shelter[:clients][client_index].num_pets.index { |i| i.name == @animal_name }
    end

    puts "Please confirm that #{@client_name} is surrendering #{@animal_name} (Y/N):"
    confirm = gets.chomp.to_s

    if confirm == 'Y'
    # remove surrendered animal from client pet list to shelter
    $shelter[:animals] << $shelter[:clients][client_index].num_pets.delete_at(animal_index)
    else
    end

  end

end while input != 'Q'

binding.pry

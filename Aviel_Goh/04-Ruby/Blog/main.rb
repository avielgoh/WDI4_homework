require 'sinatra'
require 'sinatra/reloader'

get '/' do
  erb :homepage
end

get '/about' do
  erb :about
end

get '/Tuna' do
  erb :post1
end

get '/Bacon' do
  erb :post2
end

get '/Veggie' do
  erb :post3
end

get '/form_processor' do

end

require 'pry'
require 'sinatra'
require 'sinatra/reloader'
require 'httparty'

get '/' do
  erb :index
end

# HTTParty.get('http://www.omdbapi.com/?t=jaws')

# get movie title from input
post '/movie' do
  @name = params[:name].split.join('+')
  redirect to "/movie/#{ @name }"
end

# display movie unless not found
get '/movie/:name' do
  @name = params[:name].split.join('+')
  @movie_info = HTTParty.get("http://www.omdbapi.com/?t=#{ @name }")

  pass if @movie_info['Error'] == "Movie not found!"

  @title = @movie_info['Title']
  @poster = @movie_info['Poster']

  erb :about
end

# display could not find if not found
get '/movie/*' do
  @error_title = params[:splat][0].gsub('+', ' ')
  @title = "ERROR: Could not find '#{ @error_title }'! "

  erb :about
end

post '/search' do
  @name = params[:name].split.join('+')
  redirect to "/search/#{ @name }"
end

get '/search/:name' do
  @name = params[:name].split.join('+')
  @movie_info = HTTParty.get("http://www.omdbapi.com/?s=#{ @name }")

  pass if @movie_info['Error'] == "Movie not found!"

  erb :search
end

get '/search/*' do
  @error_title = params[:splat][0].gsub('+', ' ')
  @title = "ERROR: Could not find '#{ @error_title }'! "

  erb :search
end

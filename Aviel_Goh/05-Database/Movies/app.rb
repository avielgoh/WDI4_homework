require 'pry'
require 'sinatra'
require 'sinatra/reloader'
require 'httparty'
require 'pg'

require_relative 'db_config'
require_relative 'models/movie'

# close connection with db
after do
  ActiveRecord::Base.connection.close
end

# homepage
get '/' do
  erb :index
end

# get input from user
post '/search' do
  @name = params[:name].gsub(' ', '+')
  redirect to "/search/#{ @name }"
end

# display general search results
get '/search/:name' do
  @name = params[:name]
  @movie_info = HTTParty.get("http://www.omdbapi.com/?s=#{ @name }")

  if @movie_info['Response'] == "False"
    redirect to "/error/#{ @name }"
  end

  erb :search
end

# get input from user
post '/movie' do
  @name = params[:name].gsub(' ', '+')
  redirect to "/movie/#{ @name }"
end

# display movie unless not found
get '/movie/:id' do
  @id = params[:id]
  @movie_info = HTTParty.get("http://www.omdbapi.com/?i=#{ @id }")

  if @movie_info['Response'] == "False"
    redirect to "/error/#{ @id }"
  else
    redirect to "/movie/#{ @movie_info['Title'].gsub(' ', '+') }/#{ @movie_info['imdbID'] }"
  end

  erb :about
end

# display movie details
get '/movie/:name/:id' do

  @name = params[:name]
  @id = params[:id]

  if Movie.find_by(imdbid: "#{ @id }")
    @movie_info = Movie.find_by(imdbid: "#{ @id }")

    @title = @movie_info.title
    @year = @movie_info.year
    @rated = @movie_info.rated
    @runtime = @movie_info.runtime
    @genre = @movie_info.genre
    @released = @movie_info.released
    @imdbrating = @movie_info.imdbrating
    @plot = @movie_info.plot
    @director = @movie_info.director
    @writer = @movie_info.writer
    @actors = @movie_info.actors
    @poster = @movie_info.poster

  else
    @movie_info = HTTParty.get("http://www.omdbapi.com/?i=#{ @id }")

    @title = @movie_info['Title']
    @year = @movie_info['Year']
    @rated = @movie_info['Rated']
    @runtime = @movie_info['Runtime']
    @genre = @movie_info['Genre']
    @released = @movie_info['Released']
    @imdbrating = @movie_info['imdbRating']
    @plot = @movie_info['Plot']
    @director = @movie_info['Director']
    @writer = @movie_info['Writer']
    @actors = @movie_info['Actors']
    @poster = @movie_info['Poster']

    # write to database
    Movie.create(
      imdbid: "#{ @id }",
      title: "#{ @title }",
      year: "#{ @year }",
      rated: "#{ @rated }",
      runtime: "#{ @runtime }",
      genre: "#{ @genre }",
      released: "#{ @released }",
      imdbrating: "#{ @imdbrating }",
      plot: "#{ @plot }",
      director: "#{ @director }",
      writer: "#{ @writer }",
      actors: "#{ @actors }",
      poster: "#{ @poster }"
    )

  end

  erb :about
end

# # display could not find if not found
# get '/movie/*' do
#   @error_title = params[:splat][0].gsub('+', ' ')
#   @title = "ERROR: Could not find '#{ @error_title }'! "
#
#   erb :about
# end
#


get '/error/:name' do

  @error_title = "ERROR: Could not find '#{ params[:name].gsub('+', ' ') }'! "

  erb :error
end

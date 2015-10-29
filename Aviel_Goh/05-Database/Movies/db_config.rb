require 'active_record' # require the Ruby Gem

options = {
  adapter: 'postgresql',
  database: 'movies_omdb'
}

# establish connection to the db based on the options above
ActiveRecord::Base.establish_connection(options)

require 'pry'
require 'sinatra'
require 'yahoofinance'
require 'sinatra/reloader'

# Home
get '/' do

  @ticker = ""
  @price = "-"
  @price_change = "-"
  @percentage_change_display = "-"
  @name = ""
  @tablename = ""

  erb :index

end

# Check whether ticker exists
get '/stock' do

  @ticker = params[:ticker]

  if YahooFinance::get_quotes(YahooFinance::StandardQuote, "#{@ticker}").empty?
    redirect to "/error"
  elsif YahooFinance::get_quotes(YahooFinance::StandardQuote, "#{@ticker}")["#{@ticker}"].date == "N/A"
    redirect to "/error"
  else
    redirect to "/stock/#{@ticker}"
  end

end

# Error if ticker not found
get '/error' do

  @ticker = ""
  @price = "-"
  @price_change = "-"
  @percentage_change_display = "-"
  @name = ""
  @tablename = "TICKER NOT FOUND"

  erb :index

end

# Display information about stock
get '/stock/:ticker' do


# YahooFinance::get_quotes(YahooFinance::StandardQuote, "AAPL")['AAPL'].change.split(' - ')[0][0]
  @ticker = params[:ticker]

  data = YahooFinance::get_quotes(YahooFinance::StandardQuote, "#{@ticker}") # standard information

  detailed_data = YahooFinance::get_quotes(YahooFinance::ExtendedQuote, "#{@ticker}") # more detailed information

  @price = data["#{@ticker}"].lastTrade
  @price_change = data["#{@ticker}"].change.split(' - ')[0]
  @percentage_change = data["#{@ticker}"].change.split(' - ')[1]
  @percentage_change_display = "(#{@percentage_change})"

  # Toggle between green and red based on '+' or '-' stock movement
  if @price_change[0] == '+'
    @new_price_class = 'green'
  else
    @new_price_class = 'red'
  end

  if @percentage_change[0] == '+'
    @new_percentage_class = 'green'
  else
    @new_percentage_class = 'red'
  end

  @name = data["#{@ticker}"].name

  @tablename = "#{@name} (#{@ticker})"
  @open = data["#{@ticker}"].open
  @high = data["#{@ticker}"].dayHigh
  @low = data["#{@ticker}"].dayLow
  @volume = data["#{@ticker}"].volume.to_s.reverse.gsub(/...(?=.)/,'\&,').reverse
  @pe = detailed_data["#{@ticker}"].peRatio
  @market_cap = detailed_data["#{@ticker}"].marketCap
  @w52_low = detailed_data["#{@ticker}"].weeks52Range.split(' - ')[0]
  @w52_high = detailed_data["#{@ticker}"].weeks52Range.split(' - ')[1]
  @average_volume = data["#{@ticker}"].averageDailyVolume.to_s.reverse.gsub(/...(?=.)/,'\&,').reverse
  @yield = detailed_data["#{@ticker}"].dividendYield
  @eps = detailed_data["#{@ticker}"].earningsPerShare
  @ebitda = detailed_data["#{@ticker}"].ebitda

  erb :index

end

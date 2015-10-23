require 'pry'
require 'sinatra'
require 'yahoofinance'
require 'sinatra/reloader'

=begin

YahooFinance::get_quotes(YahooFinance::StandardQuote, 'AAPL')['AAPL'].lastTrade

=end

get '/' do
  erb :index
end

get '/stock' do

  @ticker = params[:ticker]

  redirect to "/stock/#{@ticker}"

end

get '/stock/:ticker' do

  @ticker = params[:ticker]

  data = YahooFinance::get_quotes(YahooFinance::StandardQuote, "#{@ticker}") # standard information

  detailed_data = YahooFinance::get_quotes(YahooFinance::ExtendedQuote, "#{@ticker}") # more detailed information

  @price = data["#{@ticker}"].lastTrade
  @price_change = data["#{@ticker}"].change.split(' - ')[0]
  @percentage_change = data["#{@ticker}"].change.split(' - ')[1]

  @name = data["#{@ticker}"].name

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

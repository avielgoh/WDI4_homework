require 'sinatra'
require 'yahoofinance'
require 'sinatra/reloader'

=begin

YahooFinance::get_quotes(YahooFinance::StandardQuote, 'AAPL')['AAPL'].lastTrade

=end

get '/' do
  erb :index
end

post '/stock' do

  @ticker = params[:ticker]

  @price = YahooFinance::get_quotes(YahooFinance::StandardQuote, "#{@ticker}")["#{@ticker}"].lastTrade

  @name = YahooFinance::get_quotes(YahooFinance::StandardQuote, "#{@ticker}")["#{@ticker}"].name

  @open = YahooFinance::get_quotes(YahooFinance::StandardQuote, "#{@ticker}")["#{@ticker}"].open

  @high = YahooFinance::get_quotes(YahooFinance::StandardQuote, "#{@ticker}")["#{@ticker}"].dayHigh

  @low = YahooFinance::get_quotes(YahooFinance::StandardQuote, "#{@ticker}")["#{@ticker}"].dayLow

  @change = YahooFinance::get_quotes(YahooFinance::StandardQuote, "#{@ticker}")["#{@ticker}"].changePercent

  @volume = YahooFinance::get_quotes(YahooFinance::StandardQuote, "#{@ticker}")["#{@ticker}"].volume

  @average_volume = YahooFinance::get_quotes(YahooFinance::StandardQuote, "#{@ticker}")["#{@ticker}"].averageDailyVolume

  @display_stock = "The price of #{@ticker} is $#{@price}"

  erb :index

end

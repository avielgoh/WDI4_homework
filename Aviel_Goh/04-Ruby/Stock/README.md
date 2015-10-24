## Stock App
___________________________________________________________________________________

#### Overview

The stock app utilises the [YahooFinance Ruby Gem (version 1.2.2)](https://rubygems.org/gems/yahoofinance/versions/1.2.2) to retrieve real-time stock quote information from Yahoo! Finance about a selected stock.

#### Objective

Build a Sinatra application that will take a stock ticker/symbol and display data about the stock.

#### Technologies

1. Sinatra
2. Ruby
3. YahooFinance Ruby Gem
4. HTML
5. CSS
6. Font Awesome

#### Approach

In developing this application, I needed to retrieve and utilise the real-time data for a specific stock from the YahooFinance API. The main requests for data via the Ruby Gem were:

###### 1. Standard Quote - basic information

```ruby
  YahooFinance::get_quotes(YahooFinance::StandardQuote, '[TICKER/SYMBOL]')
```

The data retrieved included the following:
- Price
- Price change
- Percentage change
- Open
- High
- Low
- Volume

###### 2. Extended Quote - detailed information

```ruby
  YahooFinance::get_quotes(YahooFinance::Extended, '[TICKER/SYMBOL]')
```

The data retrieved included the following:
- P/E ratio
- EBITDA
- Market capitalisation
- 52 week range
- Average volume
- Yield
- EPS

The real-time data retrieved then needed to be categorised and displayed in a useful format for the user.

#### Feature request

In the future, I would like to add conditional colouring to the price change and percentage change boxes i.e. a green background when positive and a red background when negative.

#### Links

Stocky! - [TBC]

#### Acknowledgements

Thanks to [Matt](https://github.com/mattswann) and [DT](https://github.com/epoch) for your assistance!

*This project was undertaken as part of the General Assembly WDI course I undertook in 2015.*

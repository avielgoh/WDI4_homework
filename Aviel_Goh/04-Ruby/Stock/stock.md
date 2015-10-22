#Stock App

- Build a Sinatra App that will take a stock symbol and display data about the stock
- The stock symbol should be inputted via a form
- The result should be rendered in the browswer with ERB.


###Suggested Approach 

- Build a Sinatra application 
	- Include:
		- app.rb		
		- views/layout.erb
		- views/index.erb	
		- public/styles.css
- Set up a welcome page
	- Display "Welcome to WDI Stocks" when there is `GET` request to `/`
- Define a method that makes a request to the `YahooFinance` api via the `YahooFinance` gem.
	- This method should take, as paramater, a stock ticker
	- This method should return data about the stock
	- Test this method manually in pry
- Display, for example, google's stock price when there is `GET` request to `/stocks/goog`
	- The file should be `show.erb`

####***Example api usage:***

```ruby 

data = YahooFinance.historical_quotes("goog", Time::now-(24*60*60*10), Time::now)
```

```ruby

result = YahooFinance::get_quotes(YahooFinance::StandardQuote, 'MSFT')
```

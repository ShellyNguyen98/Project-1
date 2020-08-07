# [Bite-Wallet](https://shellynguyen98.github.io/Project-1/)
Need to see how your current portfolio will translate to how well your weekend will be? </br>
Simply type the ticker of any stock you're interested in, and our website will give you up to date and accurate information on not only how good or bad its doing... but also will recommend to you the nearest places for food and drinks, so whether your balling on a budget or popping bottles of Chardonnay this Friday, never go without the knowledge you need for the following Monday morning trades.
</br>
## Description:
The website is designed as simple as possible in order to help the users make a quick check of the current stock and top restaurents based on input company and location.</br>
Clicking on the company and restaurant name will link to the link of that company/restaurant.</br>
The website uses 2 APIs:
- Finhub API to get the exact information of the company that the user is looking for, then display company's name, logo, current and opening stock, and calculate how it changes based on percentage.
- Yelp Knowledge API to get the top 5 restaurants based on the input location. The displayed restaurants have the most rating and reviews, filtered based on how the percent change of the stock.
  - For example, Tesla has percent change of -0.8%, the yelp will display the best restaurants with the price of $ (1 price). If the percent change is 1.5%, they will come with restaurants with the price of $$ (2 price). And so on.

 </br>
## How to use:
- That's been said, the website is so simple that it only has a few buttons and the most important thing is the search bar with 2 bank boxes to input, the users only needs to:
  - Put in the company code that they are looking for. For instance, type in "aapl" for "Apple Inc."
    - They can find the code for the company [here](http://eoddata.com/default.aspx).
  - Put in the location: country, county, city, zipcode, etc.
  - Click the search button.
</br>
### Note:
- The finhub API search only works with company code. For example, putting "Apple" will not work, it must be "aapl"
- The search boxes are not case sensitive.
- The location can be zip code, city, county, and country.
</br>

var quotes = [
   `“Be yourself; everyone else is already taken.” - Oscar Wilde`,
   `“Two things are infinite: the universe and human stupidity; and I'm not sure about the universe.” - Albert Einstein`,
   `“So many books, so little time.” - Frank Zappa`,
   `“You only live once, but if you do it right, once is enough.” - Mae West`
];

var lastQuoteIndex = -1; 

function addQuote() {
   var randomQuoteIndex = Math.floor(Math.random() * quotes.length);
   
   if (randomQuoteIndex === lastQuoteIndex) {
       randomQuoteIndex = 0;
   }
   
   var quote = quotes[randomQuoteIndex];
   
   lastQuoteIndex = randomQuoteIndex; 
  
   document.getElementById('quote').innerHTML = quote;
}

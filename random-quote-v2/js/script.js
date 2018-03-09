// event listener to respond to "Show another quote" button clicks
// when user clicks anywhere on the button, the "printQuote" function is called
//document.getElementById('loadQuote').addEventListener("click", printQuote, false);
document.getElementById('loadQuote').addEventListener("click", printQuote, false);

// Array Quotes
var quotes = [
  {
    quote: 'How did it get so late so soon?',
    source:'Dr. Seuss'
  },
  {
    quote: 'There is no such thing in anyone\'s life as an unimportant day.',
    source: 'Alexander Woollcott'
  },
  {
    quote: 'To conquer fear is the beginning of wisdom.',
    source:'Bertrand Russell'
  },
  {
    quote: 'Only he who can see the invisible can do the impossible.',
    source: 'Frank L. Gaines'
  },
  {
    quote: 'If you would be wealthy, think of saving as well as getting.',
    source: 'Benjamin Franklin'
  }
];

// generates random quotes
function getRandomQuote() {
  var i = Math.floor(Math.random()*5)+1;
  var numberQuotes = quotes[i];
  return numberQuotes;
}


// print quotes to the web page
function printQuote() {
  var  print = getRandomQuote();
  var  message = '<p class="quote">' + print.quote + '</p>' + '<p class="source">' + print.source + '</p>';
  document.getElementById('quote-box').innerHTML = message;
}

var quotes = [  
	'I went on a walk', 'I went to', 'I went swimming', ' I cycled', 'I walked'
];
var quotes1 = [
	' with my cat', 'with my dog', 'with my horse', 'with my yak', 'with my donkey'

];

var quotes2 = [
	'and its started raining', 'and the bell rang', 'and no one saw us', 'and everyone ran', 'and time stopped'
];
// new quote generate random quote
 function newQuote(quote_array) {
 	var randomNumber = Math.floor(Math.random() * quote_array);
 	return (randomNumber);
}
function randomQuotes(){
  	var result = quotes[newQuote(quotes.length)] + ' ' + quotes1[newQuote(quotes1.length)] + ' ' + quotes2[newQuote(quotes2.length)];
  	return(result);
 	
 }

//displayQuote displays the generated quote on the browser
 
  function displayQuote(){
  	var quote = randomQuotes();
  	 console.log(quote);
 	document.getElementById("quoteDisplay").innerHTML = quote; 
 };


 
 






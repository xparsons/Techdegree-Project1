

// FSJS - Random Quote Generator

// Array of quote objects

const quotes = [
	{quote: 'What are you trying to tell me? That I can dodge bullets?', source: 'Neo', citation: 'The Matrix', year: 1999},
	
	{quote: 'Keep your face always toward the sunshine—and shadows will fall behind you.', source: 'Walt Whitman'},
	
	{quote: 'Let us make our future now, and let us make our dreams tomorrow’s reality.', source: 'Malala Yousafzai'},
	
	{quote: 'Ask not what your country can do for you — ask what you can do for your country.', source: 'John F. Kennedy', citation: 'Speech', year: '1961'},
	
	{quote: 'Where we\'re going, we don\'t need roads', source: 'Dr. Emmett Brown', citation: 'Back to the Future', year: '1985'},
	
];


// Create the getRandomQuote function and name it getRandomQuote
// This function will create a random number from 0 - 4
function getRandomQuote(array) {
	let randomQuote = array[Math.floor(Math.random() * quotes.length )];
	return randomQuote;
	
}

// This function prints the quote to the screen
function printQuote() {
	let getQuotes = getRandomQuote(quotes);
	let showQuote = '';
	showQuote +='<p class="quote">' + getQuotes.quote + ' ';
	showQuote +='<p class="source">' + getQuotes.source;
	//Conditional statements if quotes have more properties
	if ( getQuotes.citation && getQuotes.year  ) {
		showQuote += '<span class="citation">' + getQuotes.citation + '</span>' + ', ' + getQuotes.year + '</p>';
	} else {
	showQuote += '</p>';
	}
	document.getElementById('quote-box').innerHTML = showQuote;
}


// This event listener will respond to "Show another quote" button clicks
// when user clicks anywhere on the button, the "printQuote" function is called
document.getElementById('loadQuote').addEventListener("click", printQuote, false);


// FSJS - Random Quote Generator

const button = document.getElementById('loadQuote');

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

// Function that assigns new background color
function newBgColor() {
	backgroundColors = ['#E91E63', '#F44336', '#009688','#4CAF50', '#3F51B5', '#03A9F4'];
	randomBgColor = backgroundColors[Math.floor(Math.random() * backgroundColors.length)];
	document.getElementById('bg').style.background = randomBgColor;
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
	newBgColor();
}

// Changes quote every 8 seconds
let autoChangeTimer = setInterval(printQuote, 8000);

// Resets timer on button click
button.addEventListener('click', () => {
	clearInterval(autoChangeTimer);
	autoChangeTimer = setInterval(printQuote, 8000);
});


// This event listener will respond to "Show another quote" button clicks
// when user clicks anywhere on the button, the "printQuote" function is called
document.getElementById('loadQuote').addEventListener("click", printQuote, false);

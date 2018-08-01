// FSJS - Random Quote Generator

// Create the array of quote objects and name it quotes
let quotes = [
	{quote: 'What are you trying to tell me? That I can dodge bullets?', source: 'Neo', citation: 'The Matrix', year: 1999},
	
	{quote: 'Keep your face always toward the sunshine—and shadows will fall behind you.', source: 'Walt Whitman'},
	
	{quote: 'Let us make our future now, and let us make our dreams tomorrow’s reality.', source: 'Malala Yousafzai'},
	
	{quote: 'ask not what your country can do for you — ask what you can do for your country.', source: 'John F. Kennedy', citation: 'Speech', year: '1961'},
	
	{quote: 'Where we\'re going, we don\'t need roads', source: 'Dr. Emmett Brown', citation: 'Back to the Future', year: '1985'},
	
];


// Create the getRandomQuote function and name it getRandomQuote
// This function will create a random number from 0 - 4
function getRandomQuote(array) {
	let randomValue = Math.floor(Math.random() * quotes );
	return array[randomValue];
	
}



// Create the printQuote funtion and name it printQuote
function printQuote() {
	let getQuotes = getRandomQuote(quotes);
	let showQuote;
	showQuote = document.getElementById('quote-box').innerHTML = getRandomQuote(quotes);
}
	




// This event listener will respond to "Show another quote" button clicks
// when user clicks anywhere on the button, the "printQuote" function is called
document.getElementById('loadQuote').addEventListener("click", printQuote, false);
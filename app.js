const auth = document.getElementById('randoQuoteAuth');
const quote = document.getElementById('randoQuote');
const quoteGen = document.getElementById('quoteGen');

async function getQuotes(){
    const response = await fetch("https://type.fit/api/quotes");
    const allQuotes = await response.json();
    let randomizer = Math.floor(Math.random() * allQuotes.length);
    console.log(allQuotes[randomizer].author);
    quote.innerHTML = allQuotes[randomizer].text;
    if(allQuotes[randomizer].author === null) {
        auth.innerHTML = "Unknown";
    } else {
        auth.innerHTML = allQuotes[randomizer].author;
    }
    
}

quoteGen.addEventListener('click', getQuotes);
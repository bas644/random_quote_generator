const auth = document.getElementById('randoQuoteAuth');
const quote = document.getElementById('randoQuote');
const quoteGen = document.getElementById('quoteGen');
const specAuth = document.getElementById('authors');
let stuff = [];

function stupidFunction() {
    for(a in stuff){
        if(stuff[a].author === null) {
            stuff[a].author = 'Unknown';
        }
    }
    let moreAuthors = []
    for(a in stuff){
        moreAuthors.push(stuff[a].author);
    }
    let stupidAuthors = new Set(moreAuthors)
    for(const a of stupidAuthors.values()) {
            const node = new Option(a, a);
            specAuth.appendChild(node);
        }
}

async function getQuotes(writer=""){
    const response = await fetch("https://type.fit/api/quotes");
    const allQuotes = await response.json();
    stuff = allQuotes;
    stupidFunction();
}

function hereIsYourQuoteSIR(writer=""){
    // generate new quote
    let randomizer = Math.floor(Math.random() * stuff.length);
    if(writer === '') {
        quote.innerHTML = stuff[randomizer].text;
        auth.innerHTML = stuff[randomizer].author;
    } else if(stuff[randomizer].author === writer){
        quote.innerHTML = stuff[randomizer].text;
        auth.innerHTML = stuff[randomizer].author;
    } else {
        hereIsYourQuoteSIR(writer);
    }  
}
          


function findQuoteByAuthor(){
    console.log(specAuth.value);
    hereIsYourQuoteSIR(specAuth.value);
}

quoteGen.addEventListener('click', findQuoteByAuthor);
getQuotes();

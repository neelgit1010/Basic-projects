const quote = document.getElementById('quote');
const author = document.getElementById('author');

const api = 'https://api.quotable.io/random';

async function getQuote(url){
    const raw = await fetch(url);
    const data = await raw.json();

    quote.innerText = data.content;
    author.innerText = data.author;
    console.log(author);
}

getQuote(api);
